# melbavivendi-website

Personal website for Melissa Rombout (PhD), curator and cultural analyst.

## Deployment

This site automatically builds and deploys to GitHub Pages at [melbavivendi.com](https://melbavivendi.com) when changes are pushed to the main branch.

### Automatic Deployment Process

1. **Trigger**: Push to main branch
2. **Build**: GitHub Actions runs `pnpm build:client` 
3. **Deploy**: Built files from `dist/spa/` are deployed to GitHub Pages
4. **Domain**: Site is served at custom domain `melbavivendi.com`

### Manual Deploy Setup

If you need to set up GitHub Pages manually:

1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. The workflow will handle the rest automatically

### Local Development

```bash
pnpm dev        # Start development server
pnpm build      # Build both client and server
pnpm typecheck  # Type checking
```