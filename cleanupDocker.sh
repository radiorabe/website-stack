docker rmi $(docker images | grep "^<none>" | awk '{print $3}') 
docker volume rm $(docker volume ls -qf dangling=true)   