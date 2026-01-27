# Clouse Photography Portfolio

Minimal, image‑first portfolio site for Clouse Photography. Designed and coded by Justin Adame, with emphasis on clean layout, responsive galleries, and a simple contact flow.

## Tech Stack

- React (single‑page app)
- Vite
- Vanilla CSS
- npm

## Features

- Home hero with intro copy and featured image  
- Category galleries: Travel, Hospitality/Retail, Prints, Commissioned Work  
- Shared gallery layout for consistent image cards  
- Responsive design for desktop, tablet, and mobile  
- Contact page with profile image and form (name, email, message)  
- Global header with mobile hamburger navigation  
- Footer credit: “Designed & coded by Justin Adame”

## Getting Started

### Prerequisites

- Node.js (LTS)
- npm

### Installation

```bash
git clone https://github.com/<your-username>/clouse-portfolio.git
cd clouse-portfolio/clouse
npm install
npm run dev
Open the URL from the terminal (usually http://localhost:5173).
npm run build
Build output goes to dist/ and can be deployed to any static host.

Project Structure
text
clouse/
  ├─ src/
  │  ├─ assets/
  │  │  └─ images/          # gallery + profile images
  │  ├─ components/
  │  │  ├─ Header.jsx
  │  │  ├─ Footer.jsx
  │  │  └─ ContactModal.jsx
  │  ├─ pages/
  │  │  ├─ HomePage.jsx
  │  │  ├─ TravelPage.jsx
  │  │  ├─ HospitalityPage.jsx
  │  │  ├─ PrintsPage.jsx
  │  │  ├─ CommissionedWorkPage.jsx
  │  │  └─ ContactPage.jsx
  │  ├─ App.jsx
  │  └─ main.jsx
  ├─ index.html
  └─ package.json
Styling
Single global stylesheet handles:

Design tokens (color, spacing, type, shadows)

Gallery layout (.gallery-page, .gallery-grid, .gallery-item)

Breakpoints for hero, galleries, and contact page

Header, mobile nav, and footer alignment

Contact
For inquiries or commissions:

Email: hello@example.com

Instagram: @thisnormallife

Designed & coded by Justin Adame.


