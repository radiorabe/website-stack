docker-compose stop strapiDB
docker-compose rm strapiDB
docker-compose up -d --no-deps --build strapiDB
