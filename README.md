# 🚀 Ikotek Solutions - Transform Your Digital Presence

<div align="center">

**A Premier Digital Agency Platform**

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC.svg)](https://tailwindcss.com/)

</div>

---

## 📖 About

Ikotek Solutions is a cutting-edge digital agency specializing in **high-performance web development**, **custom software solutions**, and **digital marketing**. This repository contains the official website for Ikotek Solutions, built with modern web technologies to deliver a premium, responsive user experience.

## ✨ Key Features

- 🎨 **Dynamic Portfolio System**: Categorized work grid with interactive filters (Web, Mobile, CMS, Marketing)
- 💼 **Recruitment Portal**: Integrated job board with direct-to-WhatsApp application flow
- 📧 **Newsletter Engine**: Web3Forms-integrated subscription system with Supabase logging
- 🎭 **Modern UI/UX**: Glassmorphism effects, smooth animations, and responsive dark-themed aesthetic
- 👥 **Leadership Showcase**: Comprehensive team representation with detailed bios and roles
- ⚖️ **Legal Compliance**: Integrated Privacy Policy and Terms & Conditions pages
- 📞 **Contact Ecosystem**: Professional contact forms with 24/7 support integration
- 🌐 **Multi-Page Architecture**: Home, About, Services, Team, Work, Blog, Careers, and more
- 🔒 **Secure Backend**: Supabase integration for data persistence and authentication
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.19
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Routing**: React Router DOM 6.30.1

### Backend & Services
- **Database**: Supabase
- **Forms**: Web3Forms
- **State Management**: TanStack Query 5.83.0
- **Form Handling**: React Hook Form + Zod validation

### Developer Tools
- **Linting**: ESLint 9.32.0
- **Type Checking**: TypeScript
- **Package Manager**: npm / Bun

## 💻 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **Bun** - [Download Bun](https://bun.sh/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/IkotekSolutions.git
   cd IkotekSolutions
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**:
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_WEB3FORMS_KEY=your_web3forms_key
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run build:dev` | Build development bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🏗️ Project Structure

```
IkotekSolutions/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (62 components)
│   ├── pages/          # Full-page components (13 pages)
│   ├── hooks/          # Custom React hooks (3 hooks)
│   ├── integrations/   # Supabase & API configurations
│   ├── lib/            # Utility functions and helpers
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── supabase/           # Supabase configuration
├── .env                # Environment variables (not in git)
├── package.json        # Project dependencies
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🌐 Pages Overview

- **Home**: Hero section with company overview and call-to-actions
- **About**: Company history, mission, and values
- **Services**: Detailed service offerings and capabilities
- **Team**: Leadership and team member profiles
- **Work**: Portfolio showcase with category filtering
- **Blog**: Articles and insights (Coming Soon)
- **Careers**: Job listings and recruitment portal
- **Contact**: Contact forms and support information
- **Privacy Policy**: Legal compliance documentation
- **Terms & Conditions**: User agreement and policies

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist/` directory.

### Deploy to Hosting

This project can be deployed to various platforms:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop the `dist/` folder or connect your Git repository
- **GitHub Pages**: Use `gh-pages` package
- **Custom Server**: Serve the `dist/` folder with any static file server

## 🔧 Configuration

### Tailwind CSS
Customize the theme in `tailwind.config.ts` to match your brand colors and design system.

### Supabase
Configure your Supabase project and update the environment variables with your credentials.

### Web3Forms
Sign up at [Web3Forms](https://web3forms.com/) and add your access key to the `.env` file.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

© 2024 **Ikotek Solutions**. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use of this software is strictly prohibited.

---

<div align="center">

**Built with ❤️ by the Ikotek Solutions Team**
</div>
