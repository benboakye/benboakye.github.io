# Bernard Boakye Appiah — Cybersecurity Portfolio

A Dark Cyber-themed, dashboard-style portfolio website built with Vite, React, TypeScript, and Tailwind CSS. Designed for GitHub Pages deployment.

## Features

- Dark cyber dashboard layout with sticky navbar and sidebar navigation
- Sections: Home, About, Resume, Projects, Articles, Skills, Contact
- Featured project cards with placeholder links for case studies and demos
- Resume timeline with PDF download support
- Mailto-based contact form (Formspree/Web3Forms ready)
- Responsive design for desktop, tablet, and mobile
- GitHub Actions deployment workflow

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion

## Local Setup

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages)

1. Create a GitHub repository and push this project.
2. In **Settings → Pages**, set source to **GitHub Actions**.
3. Update `vite.config.ts` `base` if needed:
   - `username.github.io` repo → `base: '/'`
   - Project repo (e.g. `portfolio`) → `base: '/portfolio/'`
4. Push to `main` or `master` to trigger `.github/workflows/deploy.yml`.

## Folder Structure

```text
public/          Static assets (images, resume PDF)
src/components/  Reusable UI components
src/data/        Editable content (profile, projects, articles, skills)
src/sections/    Page sections
src/layouts/     Dashboard layout
```

## Customization

Edit content in `src/data/`:

- `profile.ts` — name, contact, stats, resume content
- `projects.ts` — project cards and links
- `articles.ts` — article previews
- `skills.ts` — skill groups
- `techStack.ts` — tech stack icons

Replace placeholders:

- Add resume PDF to `public/resume/Bernard-Boakye-Appiah-Resume.pdf`
- Update GitHub URL in `profile.ts`
- Add real project links in `projects.ts`
- Swap SVG placeholders in `public/images/` with real screenshots

## License

Personal portfolio project for Bernard Boakye Appiah.
