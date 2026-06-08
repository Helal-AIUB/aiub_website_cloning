# 🎓 AIUB Website Clone - Next.js Masterclass Project

<div align="center">
  <img src="https://aiub-website-cloning.vercel.app/banner-logo.png" alt="AIUB Website Clone Banner" width="800" />
  <br />
  <p><strong>A highly optimized, modular, and interactive frontend clone of the American International University-Bangladesh (AIUB) website.</strong></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
  [![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
  [![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://aiub-website-cloning.vercel.app/)
</div>

<br />

## 🔗 Quick Links
- **Live Demo:** [https://aiub-website-cloning.vercel.app/](https://aiub-website-cloning.vercel.app/)
- **Repository:** [GitHub Link](https://github.com/Helal-AIUB/aiub_website_cloning)

---

## 💡 About The Project
This project was developed as part of a **Next.js Caching & Rendering Masterclass**. The goal was to deeply understand and implement modern Next.js features such as the **App Router**, **Server/Client Component architecture**, and **Static Site Generation (SSG)**. 

The application perfectly replicates the complex UI/UX of the official AIUB portal, featuring dynamic scroll effects, crossfading image sliders, and interactive masonry layouts—all while maintaining a blazing-fast performance score.

---

## ✨ Key Features & Interactivity

### 1. 🏗️ Modular Architecture (Server & Client Separation)
- **100% Server Rendered Homepage (`app/page.tsx`):** The main layout, `ImportantLinks`, and `FindProgramNotice` components are pure Server Components to ensure zero JavaScript bundle overhead and maximum SEO.
- **Isolated Client Components:** Interactivity is strictly isolated to specific components using the `"use client"` directive.

### 2. 📱 Interactive UI Components
- **Infinite Marquee News Slider:** A continuous, seamless horizontal slider built with CSS keyframes and Tailwind for the "News & Events" section.
- **Expanding Hover Accordion:** The "Faculties" section utilizes React state to smoothly expand the hovered column and transition gradient colors, mimicking the native AIUB experience.
- **Crossfade Fullscreen Slider:** The "Discover Our Campus" section features a vertical-tab-triggered background image crossfade effect.
- **Sticky Scroll with IntersectionObserver:** The "Talents Got Sparked" section implements a modern scroll-tracking system. As the user scrolls through text on the right, the pinned image on the left dynamically updates based on the viewport intersection.

### 3. 🎨 Responsive & Mobile First
- Fully responsive across all devices.
- Custom Hamburger Menu for mobile navigation without breaking the desktop layout.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Library:** React 18
- **Styling:** Tailwind CSS
- **Icons:** React-Icons / Heroicons
- **Deployment:** Vercel

---

## 🚀 Getting Started

If you want to run this project locally, follow these steps:

### Prerequisites
- Node.js (v18.x or later)
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/Helal-AIUB/aiub_website_cloning.git](https://github.com/Helal-AIUB/aiub_website_cloning.git)
