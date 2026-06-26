# Swetha & Shivaji Wedding Invitation Website

A luxury, cinematic, single-page wedding invitation web application handcrafted with **React**, **Tailwind CSS v4**, and **Framer Motion**. Inspired by premium Indian wedding aesthetics, featuring deep royal maroon, warm creams, and glowing metallic gold accents.

## 🌟 Premium Features

- **Cinematic Entrance:** High-quality inline Ganesha SVG line-art with spring transitions, custom gold separators, and responsive countdown cards.
- **Language Toggle:** Fluid toggle between English and Telugu (తెలుగు) using Framer Motion spring physics with zero layout shifting or flickering.
- **Interactive Profiles:** Dedicated Bride & Groom cards with generated South Indian portraits, custom gold borders, and parents' details.
- **Venue Showcase:** Google Map embed alongside a call-to-action button linking directly to Google Maps.
- **Photoshoot Gallery:** Responsive masonry gallery with a lightbox viewer, hover-zoom triggers, and body-scroll locking.
- **RSVP Form:** Glassmorphic card form with loading indicators and success confirmation states.
- **Contact Center:** Clickable phone directory for both families.
- **Sensory Footer:** Realistic flickering golden Diya lamp, Sanskrit blessing, and thank-you signature.
- **Background Ornaments:** Floating gold particles, glowing lights, and corner mandala patterns.

---

## 🛠️ Project Structure

The project has been structured cleanly for modular development and easy editing:

```text
/src
  /components
    BackgroundEffects.jsx  - Floating particles, glowing orbs, & mandalas
    GaneshaSVG.jsx         - Custom vector gold Ganesha line-art
    LanguageToggle.jsx     - Spring-pill language switcher (EN <-> తెలుగు)
    Hero.jsx               - Hero blessing, couple names, and countdown
    BrideGroom.jsx         - Bride and groom profile cards
    Venue.jsx              - Subham Convention details & Google maps
    Gallery.jsx            - Photoshoot grid & lightbox modal
    RSVP.jsx               - RSVP state, form, & validation
    Contact.jsx            - Call directory buttons
    Footer.jsx             - Animated Diya SVG and blessings
  /constants
    weddingData.js         - Central CONFIG (names, dates, maps, numbers)
  /assets
    (Original styling & fallback assets)
  App.jsx                  - Main layout coordinator
  index.css                - Tailwind directives & custom CSS animations
  main.jsx                 - App mounting entry
```

---

## ⚙️ Easy Customization (`src/constants/weddingData.js`)

All details are stored in one single file. To update names, dates, or contact information, just edit `src/constants/weddingData.js`:

```javascript
export const CONFIG = {
  weddingDate: "2026-08-27T22:34:00", // ISO format for Countdown
  weddingTime: "10:34 PM",
  googleMapsUrl: "https://maps.google.com/?q=Subham+Convention+Center+Rajendra+Nagar+Guntur",
  venueName: "Subham Convention Center",
  venueAddress: "Rajendra Nagar, 1st Line, Rajendra Nagar North, Guntur, Andhra Pradesh – 522006",
  bride: {
    name: "Swetha",
    parents: { father: "Movva Suresh", mother: "Movva Purnima" },
    contacts: [...]
  },
  groom: {
    name: "Paleti Shivaji",
    parents: { father: "Paleti Anil Babu", mother: "Paleti Venkata Ramana" },
    contacts: [...]
  }
};
```

---

## 🚀 Running Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Start Local Development Server:**
   ```bash
   npm run dev
   ```
3. **Build for Production:**
   ```bash
   npm run build
   ```
