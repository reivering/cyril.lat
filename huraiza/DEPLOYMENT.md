# Deployment Instructions

## Server Structure Required

On your server at `cyril.lat`, the files should be structured like this:

```
/var/www/cyril.lat/          (or wherever your web root is)
  └── huraiza/
      ├── index.html          ← from build/index.html
      ├── 404.html            ← from build/404.html (for SPA routing)
      └── assets/
          ├── huraiza1.wf0gbxsX.jpeg
          ├── huraiza2.B_Dq5UfQ.jpeg
          ├── huraiza3.35dEkmBU.jpeg
          ├── huraiza4.CuuPthab.jpeg
          ├── index.6Mnrdgg1.js
          └── index.B9tGEHMo.css
```

## Important: 

**DO NOT** upload the `build` folder itself. Instead:
1. Upload the **contents** of the `build` folder to `/huraiza/` on your server
2. Make sure `index.html` is directly in `/huraiza/` (not `/huraiza/build/index.html`)
3. Make sure the `assets` folder is at `/huraiza/assets/`

## Files to Upload from `build` folder:

1. `build/index.html` → `/huraiza/index.html`
2. `build/404.html` → `/huraiza/404.html`
3. `build/assets/` folder → `/huraiza/assets/` (all files inside)

## Verification:

After uploading, check these URLs work:
- https://cyril.lat/huraiza/ (should load the site)
- https://cyril.lat/huraiza/assets/index.6Mnrdgg1.js (should load the JS)
- https://cyril.lat/huraiza/assets/index.B9tGEHMo.css (should load the CSS)

## If using GitHub Pages:

If you're using GitHub Pages, you'll need to either:
1. Copy the `build` folder contents to the repository root, OR
2. Use GitHub Actions to automatically deploy from the `build` folder

