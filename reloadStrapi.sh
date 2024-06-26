# HAS TO BE RUN IN ROOT FOLDER (also: docker-compose up -d strapi)

rm -rf strapi/build
rm -rf strapi/.cache
# sudo rm -rf strapi/node_modules
# docker exec -it strapi rm -rf node_modules
docker-compose stop strapi
docker-compose rm strapi
docker-compose up -d --no-deps --build strapi

# PROBLEM WITH SHARP
# remove node_modules while docher is running
# -> the container will reinstall node_modules with right sharp packages