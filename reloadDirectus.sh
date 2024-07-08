docker-compose stop directus
docker-compose rm -f directus 
docker-compose up -d --no-deps --build directus
