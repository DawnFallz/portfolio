# 🚀 DawnFallz Portfolio

A modern, interactive developer portfolio built with **Next.js, React, TypeScript, and Tailwind CSS**, designed to showcase my projects, technical skills, learning journey, and certifications through a responsive and highly interactive experience.

**Live Website:** [Visit the portfolio](https://dawnfallz.vercel.app)

---

## 📖 Overview

This repository contains the source code for my personal developer portfolio.

The portfolio is designed to present both my work and the engineering behind it, combining a clean responsive interface with interactive visual elements, animations, WebGL experiences, and carefully structured content.

Rather than relying on a static presentation, the site uses modern web technologies to create an experience that reflects my interests in frontend development, TypeScript, React, Next.js, and interactive web development.

---

## ✨ Features

- Responsive design across desktop, tablet, and mobile devices
- Interactive hero section with animated visual effects
- Scroll-driven video experience
- WebGL-powered interactive elements using React Three Fiber
- Animated page sections and transitions
- Interactive technology and skill showcases
- Certificate carousel
- Learning journey timeline
- Social and contact sections
- SEO and metadata configuration
- Custom typography and visual design
- Accessibility and responsive considerations

---

## 🛠️ Tech Stack

### Core

- **Next.js** - React framework and application architecture
- **React** - UI development
- **TypeScript** - Static typing and maintainable application code
- **Tailwind CSS** - Utility-first styling
- **pnpm** - Package management

### UI & Components

- **shadcn/ui** - Reusable UI components
- **DaisyUI** - Tailwind-based component utilities
- **React Icons** - Technology and interface icons

### Animation & Interaction

- **GSAP** - Advanced animations and scroll-driven interactions
- **AOS** - Scroll-triggered animations
- **React Bits** - Interactive visual components and effects

### 3D & WebGL

- **Three.js** - 3D rendering
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Reusable helpers and abstractions for React Three Fiber

### Tooling

- **ESLint** - Code quality and linting
- **Prettier** - Code formatting
- **Git** - Version control

---

## 📁 Project Structure

```text
├── app/
│   ├── components/       # Page sections
│   ├── globals.css
│   ├── layout.tsx
│   ├── manifest.ts
│   └── page.tsx
├── components/
│   ├── dev/              # Development tools
│   ├── primitives/       # Reusable primitives
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities
├── providers/            # React providers
├── public/               # Static assets
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

---

## 🚦 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

Clone the repository:

```bash
git clone https://github.com/DawnFallz/portfolio.git
cd portfolio
```

Install dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

Then open:

```text
http://localhost:3000
```

---

## 🌐 Browser & Performance Considerations

Some sections use GPU-intensive technologies such as WebGL, video, and animated effects.

The implementation therefore takes device and viewport differences into account rather than assuming that every browser can provide the same graphics capabilities.

Where appropriate, components use responsive alternatives or reduced visual complexity on smaller devices.

---

## 🚀 Deployment

This portfolio is deployed on [Vercel](https://vercel.com/).
**Live website:** [https://dawnfallz.vercel.app](https://dawnfallz.vercel.app)

---

## 📄 License

This project is licensed under the [**MIT License**](LICENSE).
