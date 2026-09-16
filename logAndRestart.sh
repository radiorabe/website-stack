#!/bin/bash
cd "$(dirname "$0")"
source .env

folderName="logs/$(date +%F)"
directus_log_file="${folderName}/directus.log"
next_log_file="${folderName}/next.log"

mkdir $folderName
touch $directus_log_file
touch $next_log_file

docker logs rabe-directus -t >> $directus_log_file
docker logs rabe-next -t >> $next_log_file

wget -O "${folderName}/server_health.json" --header="Authorization: Bearer ${PROD_ACCESS_TOKEN}" https://data.rabe.ch/server/health 

top -b -n1 > "${folderName}/top.log"

# restart 
docker compose up -d --no-deps --build --force-recreate directus

# Wait until Directus really answers before rebuilding Next.
#
# The Next build prerenders every page against Directus. A fetch that fails
# during the build is caught by the page and rendered as an error page, and that
# output is then stored in the route cache with s-maxage=31536000 — so a page can
# stay broken for a year until someone edits the matching collection in Directus.
# `sleep 10` used to be the only guard here, while the Directus healthcheck alone
# needs ~30s (--start-period=30s), and `--no-deps` skips the service_healthy gate
# from docker-compose.yml.
BE_URL="${NEXT_PUBLIC_BE_URL:-https://data.rabe.ch}"
echo "waiting for Directus at ${BE_URL} ..."
directus_ready=0
for i in $(seq 1 60); do
  health=$(curl -s --max-time 10 "${BE_URL}/server/health")
  # the heaviest query the build makes (/sendungen) — the real readiness signal
  programs=$(curl -s -o /dev/null -w "%{http_code}" --max-time 30 \
    "${BE_URL}/items/programs?limit=1000&sort=name&filter=%7B%22status%22%3A%7B%22_eq%22%3A%22published%22%7D%7D")
  if echo "$health" | grep -q '"status":"ok"' && [ "$programs" = "200" ]; then
    echo "Directus ready after $((i * 5))s"
    directus_ready=1
    break
  fi
  echo "  attempt ${i}/60 - health=${health:-none} programs=${programs}"
  sleep 5
done

if [ "$directus_ready" != "1" ]; then
  echo "Directus did not become ready within 5min - keeping the current Next container"
  echo "rather than rebuilding against a broken backend."
  docker system prune -f
  exit 1
fi

# Build BEFORE tearing down the running container.
#
# Pages now rethrow API errors instead of calling notFound(), so a build that
# cannot reach Directus fails loudly rather than quietly baking error pages into
# the route cache. That is what we want - but it means a failed build must never
# leave the site without a container, so the old one keeps serving until the new
# image is actually ready.
# `.next` is not in .dockerignore, so it is part of the build context and has to
# go before the build, not after.
rm -rf next/.next

if ! docker compose build --no-cache next; then
  echo "next build failed - keeping the currently running container."
  docker system prune -f
  exit 1
fi

docker compose stop next
docker compose rm -f next
docker compose up -d --no-deps next
docker system prune -f
