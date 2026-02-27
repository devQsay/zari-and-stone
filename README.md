# Zari & Stone Co. — Landing Page

Landing page for **Zari & Stone Co.** — a boutique personalized jewelry brand specializing in custom engagement rings and wedding bands. One-on-one consultations, CAD designs, and fully custom pieces. Serving clients across the USA, Canada, and worldwide.

**Tagline:** Natural, Lab, Gemstones & More

Built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **shadcn/ui**.

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn)

### Installation

```bash
git clone <your-repo-url>
cd zari-stone-frontend
npm install
```

### Environment Variables

Copy the example env file and add your Web3Forms access key:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_key_here
```

Get a free key at [web3forms.com](https://web3forms.com).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── globals.css          # Brand theme, color palette, patterns, animations
├── layout.tsx           # Root layout with fonts & metadata
└── page.tsx             # Landing page (assembles all sections)

components/
├── sections/
│   ├── navbar.tsx       # Sticky nav with scroll blur, mobile menu
│   ├── hero.tsx         # Full-screen hero on dark brown background
│   ├── about.tsx        # Brand story with image placeholders & stats
│   ├── process.tsx      # 4-step custom journey (Consultation → Delivery)
│   ├── collection.tsx   # Featured jewelry grid (4 cards)
│   ├── testimonials.tsx # Customer quotes on dark background
│   ├── contact.tsx      # Inquiry form (Web3Forms)
│   └── footer.tsx       # Social links, nav, copyright
└── ui/                  # shadcn/ui primitives

lib/
└── utils.ts             # cn() utility

public/
├── logo.svg             # Brand logo (primary)
└── logo2.svg            # Brand logo (alternate)
```

## Color Palette

| Color  | Hex       | Usage                      |
|--------|-----------|----------------------------|
| Beige  | `#FFF8EA` | Primary background         |
| Brown  | `#483434` | Primary text, dark sections |
| Green  | `#AAB396` | Accent, buttons, highlights |
| Black  | `#1A120B` | Deep accent                |

## Typography

| Role       | Font             | Usage              |
|------------|------------------|--------------------|
| Headers    | Lexend Zetta     | Section labels, nav |
| Subheaders | Bacasime Antique | Headings, quotes   |
| Body       | Host Grotesk     | Paragraphs, forms  |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` in the environment variables settings
4. Deploy

### Other Platforms

Any platform that supports Next.js works (Netlify, Railway, AWS Amplify, etc.). Set the environment variable in your platform's dashboard.

## Customization

- **Colors**: Edit CSS variables in `app/globals.css` under `:root` and `@theme inline`
- **Fonts**: Swap Google Fonts in `app/layout.tsx`
- **Content**: Edit placeholder text/data directly in each section component
- **Images**: Replace placeholder blocks in `about.tsx` and `collection.tsx` with actual `<Image>` components
- **Logo**: Replace `public/logo.svg` with your updated logo file

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router, React Server Components
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) — Button, Card, Input, Textarea, Select, Label
- [Web3Forms](https://web3forms.com) — Contact form backend
- [Lexend Zetta](https://fonts.google.com/specimen/Lexend+Zetta) + [Bacasime Antique](https://fonts.google.com/specimen/Bacasime+Antique) + [Host Grotesk](https://fonts.google.com/specimen/Host+Grotesk)
