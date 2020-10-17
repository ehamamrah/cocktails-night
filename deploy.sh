npm run build
git add .
git commit -m 'Fixes on Work'
git push && netlify build && netlify build --prod
