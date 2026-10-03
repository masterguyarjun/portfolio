# MasterGuyArjun Portfolio

Professional portfolio website for **Mallikharjun Swamy Sudnagunta** (brand: **MasterGuyArjun**) — Cybersecurity Researcher, Infrastructure Engineer, and Security Engineer.

**Live URL:** https://masterguyarjun.online

---

## 🎯 Purpose

This portfolio presents cybersecurity research, infrastructure engineering, and security engineering credentials to remote, EU, and German employers and recruiters. Built with professional credibility, accessibility (WCAG 2.2 AA), SEO optimization, and security hardening as top priorities.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router) with Static Export (`output: 'export'`)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with comprehensive design system
- **Architecture:** Component-based, data-driven content separation
- **Accessibility:** Semantic HTML, skip links, focus management, reduced motion support
- **SEO:** Metadata, Open Graph, Twitter Cards, Structured Data (JSON-LD), Sitemap
- **Security:** CSP-ready headers, external link safety (`noopener noreferrer`), no secrets in code

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles & design tokens
│   ├── about/             # About page
│   ├── experience/        # Experience timeline
│   ├── research/          # Security research
│   ├── projects/          # Selected projects
│   ├── freelance/         # Freelance work
│   ├── writing/           # Technical writing
│   ├── cv/                # Curriculum Vitae (print-optimized)
│   ├── contact/           # Contact form
│   └── 404/               # Custom 404 page
├── components/
│   ├── ui/                # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Tag.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ExternalLink.tsx
│   │   ├── SkipLink.tsx
│   │   ├── Input.tsx
│   │   └── Textarea.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── home/              # Home page sections
│   ├── about/             # About page components
│   ├── experience/        # Experience page components
│   ├── research/          # Research page components
│   ├── projects/          # Projects page components
│   ├── freelance/         # Freelance page components
│   ├── writing/           # Writing page components
│   ├── cv/                # CV page component
│   ├── contact/           # Contact page component
│   └── 404/               # 404 page component
├── data/                  # Content layer (single source of truth)
│   ├── profile.ts         # Personal profile & SEO config
│   ├── experience.ts      # Experience (3 categories)
│   ├── types.ts           # TypeScript interfaces
│   ├── research.ts        # Research platforms & methodology
│   ├── projects.ts        # Project showcase data
│   ├── freelance.ts       # Freelance engagements
│   ├── writing.ts         # Technical writing & publications
│   ├── cv.ts              # CV data structure
│   └── socials.ts         # Social/professional links
├── lib/
│   └── utils.ts           # Utility functions (cn, date formatting, etc.)
├── styles/
│   └── globals.css        # Base styles & component utilities
└── types/
    └── index.ts           # Global type definitions
```

---

## 🎨 Design System

### Brand Colors (from logo)
| Role | Hex | Usage |
|------|-----|-------|
| Primary Blue | `#0B3D91` | Primary actions, headers, focus rings |
| Blue Accent | `#00A3FF` | Links, accents, highlights |
| Red Accent | `#E11D2E` | Security alerts, critical CTAs |
| Gold Accent | `#F5B800` | Secondary CTAs, highlights, freelance |
| Dark Base | `#0B0F1A` | Page background, dark surfaces |
| Dark Elevated | `#1F2937` | Cards, elevated surfaces |

### Typography Scale
- `display-xl` → `display-lg` → `display-md` → `display-sm`
- `heading-xl` → `heading-lg` → `heading-md` → `heading-sm`
- `body-xl` → `body-lg` → `body` → `body-sm` → `caption`

### Spacing & Layout
- Custom spacing scale (space-18 through space-128)
- Container: `max-w-7xl` with responsive padding
- Section vertical rhythm: `py-16 lg:py-24`

---

## ♿ Accessibility (WCAG 2.2 AA)

- **Semantic HTML:** Proper heading hierarchy, landmarks, lists
- **Skip Links:** "Skip to main content" on every page
- **Focus Management:** Visible focus rings (`focus-visible:ring-2 ring-brand-blue-accent`)
- **Color Contrast:** All text meets 4.5:1 (AA) or 7:1 (AAA) ratios
- **Reduced Motion:** Respects `prefers-reduced-motion`
- **ARIA:** Labels, descriptions, live regions where needed
- **Keyboard Navigation:** All interactive elements reachable and operable

---

## 🔍 SEO Features

- Per-page `metadata.ts` exports (title, description, OG, Twitter)
- JSON-LD structured data: `Person`, `WebSite`, `ProfilePage`, `ItemList`
- `sitemap.xml` generated at build time
- `robots.txt` with sitemap reference
- Canonical URLs, `hreflang` ready for i18n
- Optimized OG image (1200×630) at `/brand/social/og-image.png`

---

## 🔒 Security Hardening

- **No secrets** in codebase (`.env.example` only)
- **External links:** `rel="noopener noreferrer"` + `ExternalLink` component
- **CSP-ready:** `next.config.js` configured for strict CSP headers
- **Static export:** No server-side attack surface
- **Input validation:** Client-side form validation with accessible errors
- **Content Security Policy** meta tag in layout

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+ or pnpm/yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/masterguyarjun/portfolio.git
cd portfolio

# Install dependencies
npm install

# Development server
npm run dev

# Production build (static export to /out)
npm run build

# Preview production build
npm run preview

# Lint & type-check
npm run lint
npm run type-check
```

### Available Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `http://localhost:3000` |
| `npm run build` | Production build with static export to `out/` |
| `npm run preview` | Serve `out/` directory for preview |
| `npm run lint` | Run ESLint with Next.js config |
| `npm run type-check` | Run TypeScript compiler check |

---

## 📦 Deployment

### Static Hosting (Recommended)
The `npm run build` command generates a fully static site in the `out/` directory. Deploy to:

- **Vercel:** Connect repository, auto-detects Next.js static export
- **Netlify:** Build command `npm run build`, publish directory `out/`
- **Cloudflare Pages:** Build command `npm run build`, output `out/`
- **GitHub Pages:** Use `out/` with custom domain
- **AWS S3 + CloudFront:** Sync `out/` to S3 bucket

### Environment Variables
No required environment variables for static export. For contact form backend, add:
```env
CONTACT_FORM_ENDPOINT=https://api.example.com/contact
RECAPTCHA_SITE_KEY=your_site_key
```

---

## 📄 License

This portfolio codebase is open source under the **MIT License**. 

**Content** (profile data, experience, research, writing, CV) is **proprietary** and belongs to Mallikharjun Swamy Sudnagunta. Do not copy personal information, credentials, or proprietary content without permission.

---

## 🤝 Contributing

This is a personal portfolio — issues and PRs for bug fixes or accessibility improvements are welcome. For feature requests, please open an issue first.

---

## 📞 Contact

- **Email:** arjun@masterguyarjun.online
- **LinkedIn:** [linkedin.com/in/masterguyarjun](https://linkedin.com/in/masterguyarjun)
- **GitHub:** [github.com/masterguyarjun](https://github.com/masterguyarjun)
- **Website:** https://masterguyarjun.online

---

*Built with Next.js, TypeScript, Tailwind CSS, and attention to detail.*
