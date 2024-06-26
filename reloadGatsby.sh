cd /srv/webapps/bene-app/gatsby
# clean up
# rm -rf .cache
# rm -rf public

#build nuew
# yarn
npm run clean
npm run build
# gatsby build
cd ..
rm -rf gatsby-public
cp -r gatsby/public gatsby-public

# stop and restart
# docker-compose up -d --no-deps --build gatsby