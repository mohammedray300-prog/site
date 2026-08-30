# Vivid Window Films — Site

A static React + Vite + Tailwind marketing site, ready to deploy to **GitHub** and **Azure Static Web Apps**.

## What changed from the original export

This project originally used TanStack Start with server-side rendering, targeting Cloudflare Workers by default (via a Lovable-specific build wrapper). Since every part of this site is static content — no live data, no forms hitting a backend — it's been converted to a plain client-rendered Vite + React app. This removes the Cloudflare-specific server build entirely, so it deploys cleanly to any static host, including Azure Static Web Apps.

Six images (`residential-specialty.jpg`, `before-house.jpg`, `after-house.jpg`, `charcoal-black-example.png`, `blue-film-example.png`, `dual-reflective-example.png`) are currently placeholder graphics — replace them with real photos in `src/assets/` (same filenames) whenever you have them; no code changes needed.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy to Azure Static Web Apps

1. In the [Azure Portal](https://portal.azure.com), create a new **Static Web App** resource.
2. Choose **GitHub** as the deployment source and authorize/select this repository and the `main` branch.
3. When asked for build details, use:
   - **Build Presets:** Custom (or "React")
   - **App location:** `/`
   - **Output location:** `dist`
4. Azure will automatically commit a GitHub Actions workflow to your repo and add the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret for you.

This repo already includes a matching workflow at `.github/workflows/azure-static-web-apps.yml`. If Azure adds its own (slightly different) workflow file during setup, keep whichever one has your deployment token wired up and delete the duplicate so only one workflow runs.

Once the secret exists and you push to `main`, the GitHub Action builds the site (`npm run build`) and deploys the `dist` folder automatically. Every future push to `main` redeploys.
