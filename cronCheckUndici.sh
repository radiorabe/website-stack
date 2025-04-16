# cd to this folder
cd "$(dirname "$0")" 

echo "check long requests"
# check if some requests take longer than a minute
docker logs rabe-directus --since 1m | grep -E " 1m | 2m | 3m | 4m | 5m " && sh logAndRestart.sh

echo "check health problems"
# check if next has health problems
docker inspect --format='{{json .State.Health.Status}}' rabe-directus | grep unhealthy && sh logAndRestart.sh

echo "check undici problem"
# check if next has some undici problems -> if yes restart both docker containers
docker logs rabe-next --since 1m | grep ECONNRESET && sh logAndRestart.sh