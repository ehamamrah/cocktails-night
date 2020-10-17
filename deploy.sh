npm run build
git add .
git commit -m 'Fixes on Work & Deploy'
git push && netlify deploy
netlify deploy --prod
