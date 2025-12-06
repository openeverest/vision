# OpenEverest Vision

An interactive website showcasing the vision and roadmap for [OpenEverest](https://openeverest.io) - an open source database platform that runs anywhere.

🌐 **Live Site:** [vision.openeverest.io](https://vision.openeverest.io)

## About

This repository contains the source code for the OpenEverest product vision website. It presents our journey from the current Everest platform to the future OpenEverest - a truly modular, open source, and universal database management solution.

## Vision Pillars

The website explores four key pillars of OpenEverest's evolution:

1. **🔌 Modular** - Modular core, making it easy to add new database technologies and integrations
2. **💻 Open Source** - Built by the community, for the community
3. **🌍 Runs Anywhere** - From Kubernetes to cloud providers to bare metal
4. **🤖 AI Copilot** - Intelligent assistance for database management

## Tech Stack

- **Framework:** React 18.3.1
- **Build Tool:** Vite 5.0.8
- **UI Library:** Material-UI (MUI) 5.14.20
- **Typography:** Poppins (Google Fonts)
- **Routing:** React Router DOM 7.9.6

## Design System

### Color Palette
- **#161641** - Dark background
- **#7790de** - Primary accent
- **#ffffff** - Main text
- **#ededed** - Supporting text
- **#ed6a5a** - Accent highlights

### Typography
- **Font Family:** Poppins
- **Weights:** 300 (light), 400 (regular), 500, 600, 700

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/openeverest/vision.git
cd vision

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
.
├── src/
│   ├── assets/
│   │   └── logos/          # Database and platform logos
│   ├── components/
│   │   ├── home/           # Hero section components
│   │   ├── journey/        # Vision section components
│   │   └── layout/         # Layout components
│   ├── pages/
│   │   ├── mockups/        # Interactive mockup pages
│   │   └── Home.jsx        # Main landing page
│   ├── theme/              # MUI theme configurations
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## Features

- **Responsive Design** - Optimized for all screen sizes
- **Interactive Journey** - Scroll-based progress indicator
- **Typing Animations** - Dynamic text effects
- **Interactive Mockups** - Clickable prototypes of future features
- **Smooth Animations** - Polished user experience

## Contributing

We welcome contributions! OpenEverest is built by the community, for the community.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Learn More

- **Try OpenEverest:** [openeverest.io](https://openeverest.io)
- **Community Slack:** Join our community Slack at CNCF - [#openeverest-users](https://cloud-native.slack.com/archives/C09RRGZL2UX)

## License

This project is open source and available under the [Apache 2.0](LICENSE).

