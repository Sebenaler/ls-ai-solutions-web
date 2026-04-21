# L&S AI Solutions — Marketing Website

Marketing and advertisement website for L&S AI Solutions, a company that builds custom AI automations for small and medium-sized businesses using Claude AI and Python.

## Tech Stack

- **React 18** — UI framework
- **TypeScript** — type safety
- **React Router 6** — client-side routing
- **Tailwind CSS 3** — styling
- **Vite 8** — build tool and dev server

## Pages

- `/` — Home
- `/about` — About
- `/solutions` — Solutions Offered

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node)

## Getting Started

**1. Clone the repo**
```bash
git clone <repo-url>
cd ls-ai-solutions-web
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the dev server**
```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

> **Windows users:** Run these commands in Command Prompt, not PowerShell.

## Other Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── context/
│   └── ThemeContext.tsx   # Dark mode toggle and persistence
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   └── Solutions.tsx
├── App.tsx
├── main.tsx
└── index.css
```
