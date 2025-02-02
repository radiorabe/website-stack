# cd to this folder
cd "$(dirname "$0")" 
# check if next has some undici problems -> if yes restart both docker containers
docker logs rabe-next --since 1m | grep ECONNRESET && docker compose up -d --no-deps --build --force-recreate directus && docker compose up -d --no-deps --build next