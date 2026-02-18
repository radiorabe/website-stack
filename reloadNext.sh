docker compose stop next
rm -rf next/.next
docker compose rm -f next
docker compose build --no-cache next # for rebuilding whole dockerfile (if .env changes)
# docker compose up -d --no-deps --build --force-recreate next
docker compose up -d --no-deps next