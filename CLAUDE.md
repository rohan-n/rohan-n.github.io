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

This is a personal website built with **React** (Create React App) showcasing professional background, links, and a photo. It features a scroll-based experience with a full-screen landing animation that unfolds into the main content.

## Architecture

### Single-Page Application
- **No routing** — the site is now a single page with scroll-based navigation
- Main component is `src/LandingPage.js` which handles the entire experience
- `src/App.js` simply renders the LandingPage component

### Design & Styling
- Clean, minimal aesthetic with warm accent color (#c96a2e)
- Uses **Lora** (serif) for headings and **DM Sans** (sans-serif) for body text
- Responsive grid layout with photo integration
- Fade-in animations on page load
- Subtle grain overlay texture

### Page Structure
- **Landing Section**: Full-screen hero with "Welcome to Rohan's Website" animation
- **Main Content**: Scrollable section with navigation, hero text, links, and "Currently" section
- **Profile Photo**: Featured alongside hero text (IMG_2802.jpg in /public)
- **Links Grid**: Interactive pills for social/contact links
- **Currently Section**: Details about current work, background, and interests

### Styling
- Global styles in `src/styles.css` with:
  - CSS custom properties for color theming
  - Responsive grid layouts
  - Smooth animations (fadeUp, bounce, etc.)
  - Mobile-first responsive design
- Uses **Google Fonts** (Lora, DM Sans) loaded from CDN in `public/index.html`

### Deployment
- Deployed to **GitHub Pages** via the `gh-pages` npm package
- The `npm run deploy` script runs `predeploy` (builds), then pushes the `/build` directory to the `gh-pages` branch
- GitHub Actions automatically publishes from the `gh-pages` branch

## Key Dependencies
- **react**: UI framework
- **react-dom**: DOM rendering
- **gh-pages**: Deployment utility
- **react-scripts**: Build tooling (Create React App)

## Development Notes

- The site is built with **react-scripts** (Create React App), so webpack and babel are configured automatically
- ESLint is configured with the **Airbnb** style guide
- Removed old routing, particle effects, and multi-page components in favor of a simpler single-page design
- Image assets should be placed in the `/public` folder
- The landing animation fires automatically on page load using React state
