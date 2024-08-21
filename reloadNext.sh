docker-compose stop next
docker-compose rm -f next
# docker-compose build --no-cache next # for rebuilding whole dockerfile (if .env changes)
docker-compose up -d --no-deps --build next
