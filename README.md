# Clouse Photography Portfolio

Minimal, image‑first portfolio site for Clouse Photography. Designed and coded by Justin Adame, with emphasis on clean layout, responsive galleries, and a simple contact flow.

## Tech Stack

- React (single‑page app)
- React Router
- Vite
- Vanilla CSS
- npm

## Features

- Home hero with intro copy and featured image  
- Category galleries: Travel & Personal, Hospitality/Retail, Prints, Commissioned Work  
- Shared gallery layout for consistent 4×3 image grids  
- Responsive design for desktop, tablet, and mobile  
- Contact page with profile image and form (name, email, message)  
- Global header with mobile hamburger navigation  
- Footer credit: “Designed & coded by Justin Adame”

## Getting Started

### Prerequisites

- Node.js (LTS)
- npm

### Installation & Development

```bash
git clone https://github.com/<your-username>/clouse.git
cd clouse
npm install
npm run dev

Project Structure
clouse/
  ├─ public/
  ├─ src/
  │  ├─ assets/
  │  │  └─ images/
  │  │     ├─ commissioned-work/
  │  │     ├─ hospitality/
  │  │     ├─ prints/
  │  │     ├─ profile/
  │  │     └─ travel/
  │  ├─ components/
  │  │  ├─ AboutPanel.jsx
  │  │  ├─ Categories.jsx
  │  │  ├─ Footer.jsx
  │  │  ├─ Header.jsx
  │  │  └─ Hero.jsx
  │  ├─ pages/
  │  │  ├─ HomePage.jsx
  │  │  ├─ CommissionedWorkPage.jsx
  │  │  ├─ TravelPersonalPage.jsx
  │  │  ├─ HospitalityRetailPage.jsx
  │  │  ├─ PrintsPage.jsx
  │  │  └─ ContactPage.jsx
  │  ├─ App.jsx
  │  ├─ App.css
  │  └─ main.jsx
  ├─ index.html
  ├─ package.json
  └─ vite.config.js

Styling
A single global stylesheet (App.css) handles:

Design tokens (color, spacing, typography, shadows)

Gallery layout (.gallery-page, .gallery-grid, .gallery-item, .gallery-image)

Breakpoints for hero, galleries, and contact page

Header, mobile navigation, and footer alignment

