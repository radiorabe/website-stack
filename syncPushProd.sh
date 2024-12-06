set -a; 
source .env; 
set +a

npx directus-sync push --directus-url $PROD_URL  --directus-token $PROD_ACCESS_TOKEN
