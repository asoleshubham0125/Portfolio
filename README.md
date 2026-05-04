<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=32&pause=1000&color=3B82F6&center=true&vCenter=true&width=500&lines=Shubham+Asole;Full-Stack+Developer;Software+Engineer;Embedded+Systems+Engineer" alt="Typing SVG" />
</h1>

<p align="center">
  <em>Building scalable backend services and responsive web applications with clean code</em>
</p>

<p align="center">
  <a href="https://asoleshubham0125.github.io/Portfolio">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-0ea5e9?style=for-the-badge&logoColor=white" alt="Live Demo" />
  </a>
  &nbsp;
  <a href="https://www.linkedin.com/in/shubham-asole/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="mailto:asoleshubham01@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  &nbsp;
  <a href="https://github.com/asoleshubham0125">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-CDN-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-v7-CA4245?style=flat-square&logo=reactrouter&logoColor=white" />
  <img src="https://img.shields.io/badge/Lucide-Icons-f43f5e?style=flat-square" />
  <img src="https://img.shields.io/badge/Formspree-Forms-6366f1?style=flat-square" />
  <img src="https://img.shields.io/badge/Google_Fonts-Inter-4285F4?style=flat-square&logo=googlefonts&logoColor=white" />
</p>

---

## 📸 Preview

<table>
  <tr>
    <td align="center"><strong>🌙 Dark Mode</strong></td>
    <td align="center"><strong>☀️ Light Mode</strong></td>
  </tr>
  <tr>
    <td><img src="public/utils/DarkMode.png" alt="Dark Mode" width="500"/></td>
    <td><img src="public/utils/LightMode.png" alt="Light Mode" width="500"/></td>
  </tr>
</table>

---

## ✨ Features

<table>
  <tr>
    <td>🎨</td>
    <td><strong>Dual-Domain Showcase</strong></td>
    <td>Dedicated sections for Software Engineering and Embedded Systems with distinct color schemes</td>
  </tr>
  <tr>
    <td>⌨️</td>
    <td><strong>Animated Hero</strong></td>
    <td>Typing effect cycling through roles with floating particle background and gradient text</td>
  </tr>
  <tr>
    <td>👁️</td>
    <td><strong>Scroll Reveal</strong></td>
    <td>IntersectionObserver-based fade-in animations with staggered children timing</td>
  </tr>
  <tr>
    <td>🌗</td>
    <td><strong>Dark / Light Theme</strong></td>
    <td>Smooth toggle with optimized color-only transitions for instant switching</td>
  </tr>
  <tr>
    <td>💎</td>
    <td><strong>Glassmorphism</strong></td>
    <td>Frosted-glass cards with animated gradient borders and card-shine hover effects</td>
  </tr>
  <tr>
    <td>🔷</td>
    <td><strong>SA Monogram</strong></td>
    <td>Custom SVG favicon with blue-cyan gradient branding across all platforms</td>
  </tr>
  <tr>
    <td>📬</td>
    <td><strong>Contact Form</strong></td>
    <td>Integrated with Formspree for real-time message delivery with status feedback</td>
  </tr>
  <tr>
    <td>📄</td>
    <td><strong>Resume Viewer</strong></td>
    <td>Built-in PDF viewer for Software and Embedded resumes with download option</td>
  </tr>
  <tr>
    <td>📱</td>
    <td><strong>Fully Responsive</strong></td>
    <td>Optimized layouts for mobile, tablet, and desktop with hamburger menu</td>
  </tr>
  <tr>
    <td>🔍</td>
    <td><strong>SEO Optimized</strong></td>
    <td>Proper meta tags, semantic HTML, Open Graph ready, and structured headings</td>
  </tr>
</table>

---

## 🏗️ Architecture

```
portfolio/
│
├── 📂 public/
│   ├── logo.svg                  # SA monogram favicon (SVG)
│   ├── logo192.png               # PWA icon 192×192
│   ├── logo512.png               # PWA icon 512×512
│   ├── index.html                # HTML template + SEO meta
│   ├── manifest.json             # PWA manifest
│   └── 📂 utils/                 # Resume PDFs
│       ├── software_resume.pdf
│       └── embedded_resume.pdf
│
├── 📂 src/
│   ├── 📂 components/
│   │   ├── Header.js             # 🧭 Navbar + SA badge + theme toggle
│   │   ├── Hero.js               # 🚀 Typing effect + particles + CTA
│   │   ├── About.js              # 👤 Education + experience + highlights
│   │   ├── SoftwareSection.js    # 💻 6 skill categories + 8 projects
│   │   ├── EmbeddedSection.js    # 🔧 Hardware skills + 4 projects + internship
│   │   ├── Contact.js            # 📧 Form + info cards + "Why Hire Me"
│   │   └── Footer.js             # 📌 Footer with branding
│   │
│   ├── 📂 hooks/
│   │   └── useScrollReveal.js    # 👁️ Custom IntersectionObserver hook
│   │
│   ├── 📂 pages/
│   │   ├── ResumePage.js         # Resume type selector
│   │   ├── SoftwareResume.js     # PDF embed viewer
│   │   └── EmbeddedResume.js     # PDF embed viewer
│   │
│   ├── App.js                    # ⚙️ Router + theme state management
│   ├── index.js                  # Entry point
│   └── index.css                 # 🎨 Global styles + all animations
│
└── package.json
```

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/asoleshubham0125/Portfolio.git

# 2. Navigate to project
cd Portfolio

# 3. Install dependencies
npm install

# 4. Start dev server
npm start
```

> App runs at **http://localhost:3000** with hot-reload enabled.

#### 📦 Production Build

```bash
npm run build
```

The `build/` folder is ready for deployment on **Vercel**, **Netlify**, **GitHub Pages**, or any static host.

---

## 💼 Featured Projects

<table>
  <tr>
    <th>Project</th>
    <th>Description</th>
    <th>Tech Stack</th>
  </tr>
  <tr>
    <td>
      <strong>⭐ LoadMitrra</strong><br/>
      <a href="https://github.com/asoleshubham0125/LoadMitrraApp">View Code →</a>
    </td>
    <td>Full-Stack MERN freight matching & logistics platform with real-time WebSocket chat, RBAC, and Google Maps integration</td>
    <td><img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/-Socket.io-010101?style=flat-square&logo=socketdotio&logoColor=white"/></td>
  </tr>
  <tr>
    <td>
      <strong>⭐ CLIPFORGE</strong><br/>
      <a href="https://github.com/asoleshubham0125/CLIPFORGE.ai">View Code →</a>
    </td>
    <td>AI-powered viral content generation SaaS with Google Gemini API, credit-based monetization, and Clerk Auth</td>
    <td><img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/> <img src="https://img.shields.io/badge/-Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white"/></td>
  </tr>
  <tr>
    <td>
      <strong>StatzHub</strong><br/>
      <a href="https://github.com/asoleshubham0125/StatzHub">View Code →</a>
    </td>
    <td>Zerodha-inspired trading & investment platform with dashboard, Chart.js analytics, and multi-app architecture</td>
    <td><img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/-Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white"/></td>
  </tr>
  <tr>
    <td>
      <strong>GoBnB</strong><br/>
      <a href="https://github.com/asoleshubham0125/GoBnB">View Code →</a>
    </td>
    <td>Airbnb-inspired booking platform with Passport.js auth, Cloudinary uploads, and Mapbox maps</td>
    <td><img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/-Mapbox-000?style=flat-square&logo=mapbox&logoColor=white"/> <img src="https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"/></td>
  </tr>
</table>

---

## 🛠️ Skills

<p align="center">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" />
  <img src="https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=sentry&logoColor=white" />
  <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" />
</p>

---

## 📫 Get In Touch

<p align="center">
  <a href="mailto:asoleshubham01@gmail.com"><img src="https://img.shields.io/badge/asoleshubham01@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/></a>
  &nbsp;
  <a href="tel:+918767239628"><img src="https://img.shields.io/badge/+91_8767239628-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/></a>
</p>

---

<p align="center">
  <strong>⭐ Star this repo if you found it useful!</strong>
</p>

<p align="center">
  Made with ❤️ by <strong>Shubham Asole</strong><br/>
  BTech ECE · IIITDM Kancheepuram · Class of 2026
</p>
