# OpenEverest - Product Vision Website

## Overview
A sleek, modern React + MUI frontend showcasing the vision of OpenEverest. This is a frontend-only website designed to communicate the product's mission with a premium visual experience.

## Project Structure
```
.
├── index.html              # Entry HTML file with Poppins font import
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main app component with theme and content
│   └── index.css          # Global styles
├── vite.config.js         # Vite configuration with allowedHosts
├── package.json           # Dependencies: React, Vite, MUI
└── .gitignore             # Node modules and build artifacts
```

## Design System

### Color Palette
- **#161641** - Dark background and text
- **#7790de** - Primary accent, light text, buttons
- **#ffffff** - Main text color
- **#ededed** - Supporting text and light backgrounds
- **#393939** - Contrast text on white backgrounds
- **#ed6a5a** - Accent and attention elements (coral/red)

### Typography
- **Font Family**: Poppins (imported from Google Fonts)
- **Font Weights Used**: 300 (light), 400 (regular), 500, 600, 700
- **Hierarchy**: Large gradient header, blue subtitle, light text body

## Workflow
- **Name**: React Dev Server
- **Command**: `npm run dev`
- **Port**: 5000 (0.0.0.0)
- **Type**: Webview (frontend preview)

## Running Locally
```bash
npm install
npm run dev
```

The app will be available at http://localhost:5000

## Build
```bash
npm run build
```

## Key Features
- Gradient text effects on main header
- Responsive design with MUI Container
- Custom MUI theme with brand colors
- Smooth visual hierarchy
- Poppins typography throughout

## Technology Stack
- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.0.8
- **UI Library**: Material-UI (MUI) 5.14.20
- **Styling**: Emotion (MUI dependency)
- **Font**: Poppins (Google Fonts)

## Notes
- Frontend is configured to trust proxy headers for Replit environment
- Vite is configured with `allowedHosts: true` for proper preview in Replit iframe
- No backend or database required for this MVP
