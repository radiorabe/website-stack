set -a; 
source .env; 
set +a

npx directus-sync push --directus-url $STAGING_URL  --directus-token $STAGING_ACCESS_TOKEN
