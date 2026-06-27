# task.md — Cursor AI Development Brief

## Project Title
**Bernard Boakye Appiah — Cybersecurity Portfolio Website**

## Main Goal
Build a polished, responsive, GitHub Pages-ready portfolio website for **Bernard Boakye Appiah**, positioning him as an aspiring **Critical Infrastructure, OT Cybersecurity, Network Security, and Infrastructure Security professional**.

The website must feel professional, technical, clean, and career-focused. It should not look like a generic student portfolio. It should clearly show Bernard's strengths in cybersecurity operations, network security labs, firewall segmentation, traffic analysis, infrastructure projects, and technical documentation.

---

## Document Roles (Read This First)

This project has **two sources of truth** with distinct roles:

| Source | Role |
|--------|------|
| **`task.md` (this file)** | Content, structure, tech stack, deployment, data organization, and engineering constraints |
| **Design mockup PNG** | Visual theme, layout, colors, component styling, and UI patterns |

**Rule:** Where this file and the mockup conflict on **design or layout**, follow the **mockup**. Where they conflict on **content**, follow **this file** (Bernard's real information). Never copy placeholder text or generic projects from the mockup.

### Design mockup reference
Store the provided mockup at:

```text
public/images/portfolio-mockup-reference.png
```

The mockup title is **"Portfolio Website — Dark Cyber Theme"**. Use it as the primary visual reference during implementation.

---

## Recommended Tech Stack
Use a static frontend stack that works smoothly with GitHub Pages.

### Preferred stack
- **Vite**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** for icons
- **Framer Motion** for light animations

### Important hosting note
This must be a **static website**. Do not build a backend. The site must deploy to GitHub Pages.

The contact form should either:
1. Use a `mailto:` fallback, or
2. Use a placeholder for Formspree/Web3Forms that Bernard can configure later.

Do not add a database, authentication system, server API, or admin dashboard.

---

## Design Reference (Authoritative for UI)

### Theme name
**Dark Cyber Portfolio**

### Design direction
Recreate the mockup's **dashboard-style dark cyber aesthetic**: futuristic, minimal, and professional. Use glowing borders, rounded corners, and translucent glassmorphism card effects.

The visual identity should communicate:
- Cybersecurity
- Critical infrastructure
- Network defense
- Technical discipline
- Professional growth
- Engineering confidence

Use subtle network-grid visuals, circuit-line details, terminal-style micro-elements, HUD-style icon rings, and infrastructure/security icons — as shown in the mockup hero.

### Color palette
Use the mockup palette (overrides any earlier palette in this document):

```css
--background: #0D1117;
--surface: #161B22;
--surface-soft: #1C2333;
--primary: #7C3AED;
--primary-dark: #6D28D9;
--accent: #22D3EE;
--accent-green: #22C55E;
--text-main: #E6EDF3;
--text-muted: #94A3B8;
--border: rgba(148, 163, 184, 0.18);
```

### Typography
Use Google Fonts or system-safe alternatives:
- Headings: **Poppins** or **Inter**
- Body: **Inter**
- Code/technical labels: **JetBrains Mono** or system monospace

### UI style (from mockup)
- Very dark blue/black background (`#0D1117`)
- Card surfaces (`#161B22`) with thin borders and soft shadows
- **Purple primary buttons** (`#7C3AED`) with glow on hover
- **Cyan accent** (`#22D3EE`) for icons, links, and secondary highlights
- Outlined secondary buttons (purple or cyan border)
- Glassmorphism / translucent panel effects where appropriate
- Rounded cards, clean project cards with thumbnail areas
- Tech stack icon row (horizontal strip of tool icons)
- Sidebar widgets with compact headings and bordered containers
- Smooth hover states; professional, not childish

### Do NOT copy from the mockup
- Placeholder name ("Your Name")
- Generic subtitle ("AI & Cybersecurity Enthusiast | Network Engineer") — use Bernard's branding below
- Generic project titles from the image
- Fake GitHub / Live Demo URLs
- Any lorem ipsum or filler content

---

## Website Structure

Build the portfolio as a **single static page** with anchor-linked sections (avoids GitHub Pages routing issues). On desktop, present content in a **dashboard-style three-column layout** inspired by the mockup. On mobile, collapse into a single-column stack.

### Desktop layout (from mockup)

```text
┌─────────────────────────────────────────────────────────────┐
│  Sticky top navbar: logo | nav links | Download CV button   │
├──────────┬──────────────────────────────┬───────────────────┤
│  Left    │  Center (main content)       │  Right sidebar    │
│  sidebar │                              │  widgets          │
│  nav     │  Hero                        │  About Me         │
│          │  Tech stack row              │  Resume preview   │
│          │  Featured projects           │  Articles preview │
│          │  (full sections also below   │  Contact form     │
│          │   or reachable via scroll)   │                   │
├──────────┴──────────────────────────────┴───────────────────┤
│  Footer: logo, quick links, social links, copyright         │
└─────────────────────────────────────────────────────────────┘
```

Full sections (Resume, Projects, Articles, Skills, Contact) must remain reachable via navbar and sidebar links. They may appear as expanded center-column sections below the hero area, or scroll into view from sidebar/top nav — but all content lives on one page.

### Required top navigation
```text
Home | About | Resume | Projects | Articles | Contact
```

Top-right CTA button:
```text
Download CV
```

Logo text:
```text
</> Bernard Appiah
```

### Left sidebar navigation
Mirror the mockup: vertical menu with icons, section titles, and short one-line descriptions for each link (Home, About, Resume, Projects, Articles, Contact).

The nav must be sticky on desktop and collapse into a mobile hamburger menu on small screens.

---

## Required File/Folder Structure

Create a clean project structure similar to this:

```text
bernard-portfolio/
├── public/
│   ├── resume/
│   │   └── Bernard-Boakye-Appiah-Resume.pdf
│   └── images/
│       ├── portfolio-mockup-reference.png
│       ├── hero-cyber-visual.svg
│       ├── profile-placeholder.png
│       ├── project-network-security.png
│       ├── project-nas.png
│       ├── project-risk-assessment.png
│       └── project-ai-ids.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── SidebarNav.tsx
│   │   ├── Hero.tsx
│   │   ├── TechStackRow.tsx
│   │   ├── SidebarWidget.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── SkillBadge.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ArticleCard.tsx
│   │   ├── ResumeTimeline.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ContactSection.tsx
│   │   ├── DownloadCvButton.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── articles.ts
│   │   ├── skills.ts
│   │   └── techStack.ts
│   ├── sections/
│   │   ├── HomeSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ResumeSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ArticlesSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   ├── layouts/
│   │   └── DashboardLayout.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .gitignore
├── package.json
├── README.md
├── vite.config.ts
└── task.md
```

If this project is not built with React, still follow the same information architecture and design requirements.

---

## Content Requirements

### Personal branding
Use this identity (replaces mockup placeholder text):

```text
Bernard Boakye Appiah
Aspiring Critical Infrastructure & OT Cybersecurity Professional
Cybersecurity Operations & Management Student | Telecommunications Engineering Graduate
```

### Hero section (mockup layout + Bernard content)

Follow the mockup hero structure:
- Greeting line: `Hi, I'm **Bernard Boakye Appiah**`
- Sub-headline in purple/cyan accent: Bernard's role line from Personal branding above
- Short professional intro paragraph (see below)
- Primary CTA: **View My Work** (scrolls to Projects)
- Secondary CTA: **Contact Me** (scrolls to Contact)
- Social icon row: GitHub, LinkedIn, Email (use Bernard's real links where available)
- Hero visual: stylized cyber/security dashboard illustration inspired by the mockup (hooded figure with laptop, shield, and HUD-style icons for network, fingerprint, brain/AI, and code). Implement as SVG/CSS composition or optimized asset — not a generic stock photo.

Suggested intro paragraph:
```text
I am a Cybersecurity Operations and Management student and Telecommunications Engineering graduate focused on network security, infrastructure defense, OT cybersecurity foundations, and practical security lab documentation.
```

Optional supporting headline (can appear above or below greeting):
```text
Building Secure, Resilient Infrastructure Through Network Security and Cybersecurity Operations
```

Hero badges (below intro or near CTAs):
- Network Security
- OT Cybersecurity Foundations
- Firewall Segmentation
- Packet Analysis
- Critical Infrastructure Security

Top navbar and hero should both offer resume download via **Download CV** / **Download Full Resume** buttons.

---

## About Section Requirements

Create an **About** section matching the mockup's right-sidebar "About Me" widget, also reachable as a full section.

Content: condensed version of the resume summary plus 2–3 sentences on Bernard's focus areas (network security labs, firewall segmentation, infrastructure projects, technical documentation).

Include a small profile image area (use `profile-placeholder.png` until a real photo is provided).

---

## Resume Section Requirements

Create a resume section that summarizes Bernard's background and includes a download button for the PDF resume. On desktop, show a condensed **Resume preview** widget in the right sidebar (Education + Experience timeline); the full section expands in the center column when navigated to.

### Resume summary
Use this content in polished form:

```text
Cybersecurity Operations and Management student and Telecommunications Engineering graduate with practical experience in network security, Linux systems, infrastructure security, and cybersecurity risk assessment. Skilled in packet analysis, network segmentation, firewall configuration, vulnerability assessment, and technical documentation through academic projects and hands-on lab environments.
```

### Education
Display as timeline cards:

1. **MSc Computer Science — Cybersecurity Operations & Management**
   - Humber Polytechnic
   - Expected Aug 2027

2. **BSc Telecommunications Engineering**
   - Ghana Communication Technology University
   - Nov 2025

### Certification
Display clearly:

```text
ISC2 Certified in Cybersecurity (CC) — Certified
```

### Professional Experience
Create timeline cards for:

1. **Intern — Avionics & Systems Diagnostics**
   - Ghana Air Force
   - Jun 2024 – Aug 2024
   - Mention: pre-flight checks, engine warming/testing support, avionics/electronic systems inspection, troubleshooting support, technical records, procedural discipline, safety awareness.

2. **Data Entry Intern**
   - PRIME Infrastructure & Engineering Services Ltd
   - Oct 2023 – Dec 2023
   - Mention: data auditing, data cleaning, validation, documentation, record management for engineering/infrastructure operations.

### Resume download
Add a button:
```text
Download Full Resume
```

The button should link to:
```text
/public/resume/Bernard-Boakye-Appiah-Resume.pdf
```

If the PDF is not available yet, include a placeholder file path and add a clear TODO comment.

---

## Skills Section Requirements

Group skills into clean categories with badges or cards. Display in the center column (full section) and optionally as a compact preview near the tech stack row.

### Security Frameworks & Methods
- NIST Cybersecurity Framework (CSF)
- MITRE ATT&CK
- Risk assessment
- Threat scenario mapping
- Security recommendations

### Network Security
- OSI Model
- TCP/IP
- DHCP
- ARP
- ICMP
- Routing
- OSPF
- VLANs
- VLSM
- ACLs
- NAT/PAT
- Network segmentation
- VPN concepts
- TLS
- SSH

### Tools & Platforms
- Wireshark
- Tcpdump
- Nmap
- Kali Linux
- OPNsense
- Cisco Packet Tracer
- Keycloak
- OpenWrt

### Systems & Infrastructure
- Linux Ubuntu/OpenWrt
- SSH
- Bash scripting
- Windows
- Active Directory fundamentals
- UAC
- Windows Registry
- Windows Defender
- BitLocker
- Local servers
- Banana Pi
- Raspberry Pi

### Programming & Data
- Python
- Pandas
- NumPy
- Data cleaning
- Technical documentation

### Tech stack row (mockup element)
Below the hero, render a horizontal **Tech Stack** icon row inspired by the mockup. Pull icon labels from `src/data/techStack.ts`. Suggested entries:

```text
Python, Linux, Wireshark, OPNsense, Docker (concepts), React, Tailwind CSS, Nmap, Kali Linux
```

Use Lucide icons or simple branded-style icon placeholders — not copyrighted vendor logos unless freely usable.

---

## Projects Section Requirements

The projects section must be the strongest part of the website.

Use mockup-style project cards with:
- Thumbnail image area at top of card
- Project title
- Category
- Short description
- Technology tags (pill badges)
- Buttons for `Case Study`, `GitHub`, and `Live Demo` where applicable
- If links are not available yet, use disabled buttons or `Coming Soon`

Show **featured projects** (top 3) prominently in the center column below the tech stack row, matching the mockup's "Featured Projects" layout. All five projects appear in the full Projects section.

### Project 1 — Cybersecurity Risk Assessment Project
Category: Governance, Risk & Compliance / Cybersecurity Analysis

Description:
```text
Assessed cybersecurity gaps using NIST CSF and mapped threat scenarios with MITRE ATT&CK, including social engineering, supply-chain compromise, insider risk, and APT activity.
```

Highlights:
- NIST CSF assessment
- MITRE ATT&CK threat mapping
- Incident analysis: Stuxnet, SolarWinds, Uber
- Recommendations: MFA, segmentation, vulnerability management, incident response planning, supply-chain risk management, continuous monitoring

Technologies/tags:
```text
NIST CSF, MITRE ATT&CK, Risk Assessment, Threat Modeling, Security Documentation
```

Thumbnail: `project-risk-assessment.png`

### Project 2 — Enterprise Network Security, Firewall & Traffic Analysis Labs
Category: Network Security / Advanced Network Security

Description:
```text
Designed and configured segmented enterprise lab networks using VLANs, VLSM, DHCP, OSPF/static routing, NAT, ACLs, and OPNsense firewall rules.
```

Highlights:
- Segmented LAN/WAN/DMZ environments
- OPNsense firewall rules
- Internal, External, and DMZ traffic control
- Nmap before/after validation
- Wireshark and Tcpdump packet analysis
- Reduced reconnaissance visibility and minimized exposed attack surface

Technologies/tags:
```text
OPNsense, VLANs, ACLs, NAT, OSPF, Nmap, Wireshark, Tcpdump, Network Segmentation
```

Thumbnail: `project-network-security.png`

### Project 3 — Offline Network-Attached Storage Architecture
Category: Infrastructure / Local Network Systems

Description:
```text
Engineered a portable, internet-independent NAS using Banana Pi BPI-R4, NVMe storage, OpenWrt, and Wi-Fi 7 for local multimedia file sharing.
```

Highlights:
- Independent Wi-Fi access point
- Firewall zones
- Internet-independent local network
- SQM for bufferbloat reduction
- Multi-user local sharing
- Chunked uploads using uHTTPd and PHP 8 CGI

Technologies/tags:
```text
Banana Pi BPI-R4, OpenWrt, NVMe, Wi-Fi 7, SQM, uHTTPd, PHP 8 CGI, Local Servers
```

Thumbnail: `project-nas.png`

### Project 4 — Identity and Access Management Lab
Category: IAM / Access Control

Description:
```text
Configured users, roles, and access control concepts in Keycloak to understand IAM workflows and role-based access foundations.
```

Technologies/tags:
```text
Keycloak, IAM, RBAC, Access Control, Authentication Concepts
```

### Project 5 — AI-Based Network Anomaly Detection IDS
Category: AI Cybersecurity / Network Defense Research

Description:
```text
Research project focused on developing an anomaly-based IDS that models normal network behavior and flags deviations using machine learning techniques.
```

Highlights:
- Virtual enterprise lab design
- pfSense router, Linux servers, Windows client
- Kali Linux attack simulation
- Public datasets such as NSL-KDD or UNSW-NB15
- Models such as Isolation Forest, One-Class SVM, and autoencoders
- Python tools including scikit-learn, PyOD, and TensorFlow
- GPU-assisted model training
- False-positive and resource-consumption evaluation

Technologies/tags:
```text
Python, scikit-learn, PyOD, TensorFlow, Isolation Forest, Autoencoders, pfSense, Kali Linux, IDS, Network Anomaly Detection
```

Status label:
```text
Research / In Progress
```

Thumbnail: `project-ai-ids.png`

---

## Articles Section Requirements

Create an articles section matching the mockup's right-sidebar **Articles** widget (compact list with thumbnails) plus a full center-column section when navigated to.

Each article card should include:
- Title
- Category
- Short excerpt
- Estimated reading time
- Date placeholder
- Small thumbnail area
- Read More button

### Suggested article cards

1. **How Firewall Segmentation Reduces Attack Surface**
   - Category: Network Security
   - Excerpt: A beginner-friendly breakdown of how firewall rules, VLANs, and DMZ design limit attacker movement.

2. **What I Learned Building Enterprise Network Security Labs**
   - Category: Cybersecurity Labs
   - Excerpt: Lessons from configuring VLANs, routing, ACLs, NAT, OPNsense rules, and validating traffic with Nmap and Wireshark.

3. **AI-Based Anomaly Detection for Network Security**
   - Category: AI + Cybersecurity
   - Excerpt: How machine learning can model normal traffic behavior and detect suspicious deviations in enterprise environments.

4. **My Path Toward Critical Infrastructure and OT Cybersecurity**
   - Category: Career Development
   - Excerpt: A personal reflection on moving from telecommunications engineering into cybersecurity operations and infrastructure defense.

For now, article pages can be placeholders or modal previews. Do not build a full CMS.

---

## Contact Section Requirements

The contact section should match the mockup's right-sidebar **Contact Me** form widget and also exist as a full section.

### Display contact options
- Email: `N10036999@humber.ca`
- LinkedIn: `linkedin.com/in/ben-boakye`
- Location: `Toronto, ON`
- GitHub: Add placeholder `https://github.com/YOUR-USERNAME` until Bernard provides the exact link

### Privacy instruction
Do **not** display the phone number publicly by default. Add it only if Bernard confirms that he wants it visible on the public website.

### Contact form (mockup style)
Include fields:
- Name
- Email
- Message

Primary button:
```text
Send Message
```

Use a paper-plane or send icon on the button, matching the mockup.

For submission, use one of these safe static approaches:
- `mailto:` link fallback
- Formspree/Web3Forms placeholder

Do not build backend email sending. Do not pretend the form works without configuration — show a clear note if using a placeholder endpoint.

---

## Home Page Layout

The homepage follows the mockup dashboard flow:

1. Sticky top navbar (logo, section links, Download CV)
2. Three-column dashboard area (desktop):
   - **Left:** Sidebar section navigation
   - **Center:** Hero → Tech stack row → Featured projects (top 3)
   - **Right:** About Me widget → Resume preview → Articles preview → Contact form
3. Full sections below (or scroll targets): About, Skills, Resume, Projects (all 5), Articles, Contact
4. Quick stats row (center column, near hero or projects):
   ```text
   4+ Cybersecurity & Infrastructure Projects
   10+ Security and Infrastructure Tools
   2 Academic Programs
   1 Cybersecurity Certification
   ```
5. Footer (logo, quick links, social links, copyright, Back to top)

---

## Visual Components to Build

Create reusable components matching the mockup:

### Navbar
- Sticky top bar with dark blur background
- Logo on left, horizontal nav links center/right
- **Download CV** button (purple, bordered or solid) on far right
- Active section highlight
- Mobile hamburger menu

### SidebarNav
- Vertical section menu with Lucide icons
- Section title + one-line description per item
- Active state with accent border or glow
- Collapses on mobile (drawer or hidden behind menu)

### Hero
- "Hi, I'm [Name]" greeting
- Accent-colored subtitle
- Intro paragraph
- Purple primary + outlined secondary CTAs
- Social icon row
- Cyber hero illustration (mockup-inspired)

### TechStackRow
- Horizontal row of tool/tech icons with labels
- Subtle border container matching mockup

### SidebarWidget
- Reusable bordered glass card wrapper
- Used for About Me, Resume preview, Articles preview, Contact form

### SectionHeader
- Small label
- Large heading
- Short description

### ProjectCard
- Thumbnail area
- Title, category, description
- Tag pills
- GitHub / Live Demo / Case Study buttons
- Status label where applicable
- Hover lift + glow border

### SkillBadge / SkillGroup
- Grouped skill categories
- Hover animation

### ResumeTimeline
- Education and experience timeline
- Compact variant for sidebar preview

### ArticleCard
- Thumbnail, title, category, excerpt
- Reading time, Read more button
- Compact list variant for sidebar

### ContactForm
- Name, Email, Message fields
- Send Message button with icon
- mailto or Formspree placeholder behavior

### DownloadCvButton
- Shared component for navbar, hero, and resume section
- Links to PDF resume path

### Footer
- Logo, quick links, social links, copyright
- Back to top link

### DashboardLayout
- Orchestrates three-column desktop layout and mobile stack
- Manages sidebar visibility and scroll-spy active states

---

## Animation Requirements

Use subtle animations only (matching mockup polish):
- Fade-in sections on scroll
- Card hover lift
- Soft glow on primary purple buttons
- Smooth scrolling to anchor sections
- Mobile menu slide/fade
- Subtle hero HUD icon pulse (optional, very light)

Do not overuse animations. The website must remain professional and fast.

---

## Responsiveness Requirements

The site must look excellent on:
- Desktop (full three-column dashboard — primary target, match mockup)
- Laptop
- Tablet
- Mobile

Mobile requirements:
- Top navbar with hamburger menu
- Left sidebar hidden or in drawer
- Right sidebar widgets stack below center content
- Hero stacks vertically (text above visual)
- Cards become one column
- Buttons remain easy to tap
- Text remains readable
- No horizontal scrolling

---

## Accessibility Requirements

Implement:
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images and hero illustration
- Keyboard-friendly navigation
- Sufficient color contrast (verify purple/cyan on dark backgrounds)
- Visible focus states
- `aria-label` for icon buttons and social links
- No text embedded only inside images

---

## SEO Requirements

Add proper metadata:

```html
<title>Bernard Boakye Appiah | Cybersecurity Portfolio</title>
<meta name="description" content="Portfolio of Bernard Boakye Appiah, an aspiring Critical Infrastructure and OT Cybersecurity professional focused on network security, infrastructure defense, packet analysis, and cybersecurity operations." />
```

Add Open Graph tags:

```html
<meta property="og:title" content="Bernard Boakye Appiah | Cybersecurity Portfolio" />
<meta property="og:description" content="Cybersecurity portfolio focused on network security, critical infrastructure, OT cybersecurity foundations, firewall segmentation, and infrastructure security projects." />
<meta property="og:type" content="website" />
```

Optionally set `og:image` to a generated preview or hero asset once available.

---

## GitHub Pages Deployment Requirements

Include a GitHub Actions workflow for deployment.

Create:
```text
.github/workflows/deploy.yml
```

The workflow should:
- Install dependencies
- Build the Vite project
- Deploy the `dist` folder to GitHub Pages

Also update `vite.config.ts`.

Important:
- If the repo is named `username.github.io`, use `base: '/'`
- If the repo is named something like `portfolio`, use `base: '/portfolio/'`

Add a clear comment in `vite.config.ts` explaining this.

---

## README Requirements

Create a professional `README.md` with:

1. Project title
2. Description
3. Features
4. Tech stack
5. Local setup instructions
6. Deployment instructions
7. Folder structure
8. Customization guide (emphasize editing `src/data/` files and swapping images in `public/images/`)

Example setup commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

---

## Quality Checks Before Completion

Before finishing, verify:

- [ ] Site runs locally with `npm run dev`
- [ ] Site builds successfully with `npm run build`
- [ ] No TypeScript errors
- [ ] No broken links
- [ ] Desktop layout matches Dark Cyber mockup (navbar, sidebars, hero, widgets)
- [ ] Purple/cyan color palette matches mockup specification
- [ ] Resume download button points to the correct file path
- [ ] Contact form does not pretend to work without configuration
- [ ] GitHub placeholder link is clearly marked if the final username is unknown
- [ ] Phone number is not publicly displayed by default
- [ ] Site is responsive on mobile (dashboard collapses cleanly)
- [ ] All project cards are readable with thumbnail areas
- [ ] All sections are reachable from top navbar and sidebar
- [ ] Bernard's real content is used (no mockup placeholder names)
- [ ] Page has useful title and meta description
- [ ] No unused placeholder text like Lorem Ipsum remains
- [ ] Mockup reference image saved at `public/images/portfolio-mockup-reference.png`

---

## Final Acceptance Criteria

The completed portfolio should:

1. Clearly present Bernard as an aspiring Critical Infrastructure and OT Cybersecurity professional.
2. Have sections for Home, About, Resume, Projects, Articles, and Contact.
3. Use the **Dark Cyber** visual theme from the mockup (purple primary, cyan accent, dashboard layout).
4. Highlight the strongest projects from the resume in featured project cards.
5. Include a resume download option in the navbar, hero area, and resume section.
6. Be fully responsive (dashboard on desktop, stacked on mobile).
7. Be ready for GitHub Pages deployment.
8. Be easy to edit by updating data files in `src/data/`.
9. Look professional enough to share with recruiters, instructors, and cybersecurity professionals.

---

## Cursor AI Build Instruction

Cursor, build this portfolio website from scratch using the requirements above.

**Priority order:**
1. Match the **Dark Cyber mockup** for layout, colors, and component styling.
2. Populate all content from **this task file** (Bernard's real information).
3. Maintain clean architecture, reusable components, and GitHub Pages-ready static deployment.

Keep the website static. Use polished content based on the information in this file. Where links or assets are missing, add clear placeholders and TODO comments instead of inventing false links. Save the provided design mockup PNG to `public/images/portfolio-mockup-reference.png` for future reference.
