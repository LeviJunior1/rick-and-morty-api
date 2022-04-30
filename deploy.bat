
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:LeviJunior1/rick-and-morty-api.git master:gh-pages

cd -
