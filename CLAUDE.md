# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

**Development:**
```bash
npm start          # Start dev server on http://localhost:3000
npm run build      # Build for production (outputs to /build)
npm test           # Run tests
npm run deploy     # Build and deploy to GitHub Pages
```

**Linting:**
```bash
npx eslint src/    # Run ESLint on source files
```

## Project Overview

This is a personal website built with **React** (Create React App) that showcases contact information, social links, and professional background. The site features an animated particle background and uses client-side routing for a single-page application experience.

## Architecture

### Routing
- Uses **HashRouter** instead of BrowserRouter because the site is deployed to GitHub Pages as a project site (`rohan-n.github.io`), not a user site. Hash-based routing (`/#/about`) is required for GitHub Pages to work without server-side routing.
- Router config is in `src/App.js`

### Page Structure
- **HomePage** (`src/HomePage.js`): Landing page with name, social links (GitHub, LinkedIn, Twitter, email), and navigation to About page
- **AboutMe** (`src/AboutMe.js`): Professional background page with career history and hobbies

### Animated Background
- Uses **tsparticles** library (`src/Particles.js`) to render animated particles on every page
- Particle configuration is centralized in `Particles.js` and included in `App.js`
- Particles are initialized in a `useEffect` hook before rendering routes

### Styling
- Global styles in `src/styles.css` (responsive layout, centering utilities, hover effects)
- Uses **Font Awesome** icons for social links
- Uses **Google Fonts** (Slabo 27px) loaded from CDN in `public/index.html`

### Deployment
- Deployed to **GitHub Pages** via the `gh-pages` npm package
- The `npm run deploy` script runs `predeploy` (builds), then pushes the `/build` directory to the `gh-pages` branch
- GitHub Actions automatically publishes from the `gh-pages` branch

## Key Dependencies
- **react-router-dom**: Client-side routing
- **@tsparticles/react** and **@tsparticles/slim**: Animated background
- **@fortawesome/fontawesome-free**: Icon library
- **gh-pages**: Deployment utility

## Development Notes

- The site is built with **react-scripts** (Create React App), so webpack and babel are configured automatically
- ESLint is configured with the **Airbnb** style guide
- There is a commented-out `BookListPage` component in `App.js` for future expansion
- Mobile optimization is listed as a TODO in the README
