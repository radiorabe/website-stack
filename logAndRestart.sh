#!/bin/bash
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
sleep 10
docker compose stop next
rm -rf next/.next
docker compose up -d --no-deps --build --force-recreate next 
docker system prune -f
