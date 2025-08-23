# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal website for Melissa Rombout (PhD), a curator and cultural analyst, built using the Fusion Starter template. The project is a full-stack React application with TypeScript, featuring an Express server backend and modern UI components.

## Architecture

### Client-Server Structure
- **Client**: React 18 SPA with TypeScript, located in `client/`
- **Server**: Express.js API server in `server/`
- **Shared**: Common types and interfaces in `shared/`
- **Deployment**: Configured for Netlify with serverless functions

### Key Technologies
- Frontend: React 18, React Router 6, TypeScript, Vite, TailwindCSS
- Backend: Express.js with TypeScript
- UI: Radix UI components with shadcn/ui patterns
- Testing: Vitest
- Styling: TailwindCSS with custom design tokens
- Package Manager: pnpm (required)

### Path Aliases
- `@/` maps to `client/`
- `@shared/` maps to `shared/`

## Development Commands

```bash
# Development (starts both client and server on port 8080)
pnpm dev

# Production build (builds both client and server)
pnpm build

# Build client only
pnpm build:client

# Build server only  
pnpm build:server

# Start production server
pnpm start

# Type checking
pnpm typecheck

# Testing
pnpm test

# Code formatting
pnpm format.fix
```

## Project Structure

```
client/
├── App.tsx              # Main app with routing setup
├── pages/               # Route components
│   ├── Index.tsx       # Home page (Melissa's profile)
│   └── NotFound.tsx    # 404 page
├── components/ui/       # Radix UI components library
├── lib/utils.ts        # Utility functions (cn helper)
└── global.css          # TailwindCSS globals and design tokens

server/
├── index.ts            # Express server setup
├── routes/             # API route handlers
└── node-build.ts       # Production server entry

shared/
└── api.ts              # Shared TypeScript interfaces

netlify/functions/
└── api.ts              # Serverless function wrapper
```

## Key Patterns

### Routing
- React Router 6 SPA mode
- Routes defined in `client/App.tsx`
- Page components in `client/pages/`
- API routes prefixed with `/api/`

### Styling
- TailwindCSS utility classes
- Custom design tokens in `client/global.css`
- `cn()` utility function for conditional classes (clsx + tailwind-merge)
- Inter font family configured

### API Development
1. Define shared types in `shared/api.ts`
2. Create route handlers in `server/routes/`
3. Register routes in `server/index.ts`
4. API accessible at `/api/*` endpoints

### Component Development
- Use existing Radix UI components from `client/components/ui/`
- Follow established styling patterns with TailwindCSS
- Import utilities with path aliases (`@/` for client, `@shared/` for shared)

## Deployment

- **Development**: Single port (8080) serves both frontend and backend
- **Production**: Netlify deployment with serverless functions
- **Build**: Separate client (`dist/spa`) and server (`dist/server`) builds
- Client build goes to `dist/spa`, server to `dist/server`

## Current Implementation

The site currently displays Melissa Rombout's professional profile with:
- Personal information and headshot
- Professional skills and services
- Detailed biography
- Contact information
- Clean, responsive design with custom styling

Before making changes, understand the existing design system and follow established patterns for consistency.