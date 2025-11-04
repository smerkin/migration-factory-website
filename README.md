# Migration Factory Website

A modern, high-end corporate website built with Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## 🚀 Features

- **Multiple Theme Variants**: 4 color palettes to choose from
  - Neon Purple (AI/Futuristic)
  - Electric Green (Data Flow/Cyber)
  - Amber Orange (Enterprise Consulting)
  - Lime Accent (Clean Startup)

- **3D Animated Backgrounds**: 3 animation styles
  - Tech Grid: Animated network of data nodes
  - Particle Flow: Continuous particle movement
  - Energy Field: Abstract AI waves and circuits

- **Fully Responsive**: Mobile-first design
- **SEO Optimized**: Semantic HTML, meta tags, structured data
- **Smooth Animations**: Framer Motion transitions
- **Modern Stack**: Next.js 14, React 18, TypeScript

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Switching Themes & Animations

### Using the UI (Recommended)

1. Click the **color palette icon** in the bottom-right corner
2. Select your preferred **color theme**
3. Choose your **background animation**
4. Changes are saved automatically in localStorage

### Programmatically

To set default theme, edit `app/layout.tsx`:

```tsx
<body className="theme-purple"> {/* Change to: theme-green, theme-orange, theme-lime */}
```

To set default animation, edit `lib/themeConfig.ts`:

```typescript
export function getStoredAnimation(): AnimationVariant {
  return 'techGrid'; // Change to: 'particleFlow', 'energyField'
}
```

## 🎭 Theme Variants

### 1. Neon Purple (Default)
```tsx
className="theme-purple"
```
- **Primary**: #7A3FFF
- **Style**: AI / Futuristic aesthetic
- **Use Case**: Tech-forward, innovative companies

### 2. Electric Green
```tsx
className="theme-green"
```
- **Primary**: #00FF9D
- **Style**: Data flow / Cyber aesthetic
- **Use Case**: Data-centric, cybersecurity firms

### 3. Amber Orange
```tsx
className="theme-orange"
```
- **Primary**: #FF8A00
- **Style**: Enterprise consulting tone
- **Use Case**: Professional consulting, B2B services

### 4. Lime Accent
```tsx
className="theme-lime"
```
- **Primary**: #C8FF00
- **Style**: Clean startup style
- **Use Case**: Modern startups, fresh brands

## 🌟 Animation Variants

### 1. Tech Grid
- 3D network of interconnected data nodes
- Rotating mesh with connection lines
- Best for: Technical, enterprise feel

### 2. Particle Flow
- Continuous flowing particles
- Dynamic movement patterns
- Best for: Innovation, data streams

### 3. Energy Field
- Abstract waves and glowing circuits
- Pulsing energy effects
- Best for: AI, cutting-edge technology

## 📁 Project Structure

```
migration-factory-website/
├── app/
│   ├── globals.css          # Global styles and theme system
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── backgrounds/
│   │   ├── TechGridBackground.tsx
│   │   ├── ParticleFlowBackground.tsx
│   │   └── EnergyFieldBackground.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ThemeSwitcher.tsx     # Theme/animation switcher UI
├── lib/
│   └── themeConfig.ts        # Theme configuration
├── public/
│   ├── favicon.ico
│   └── og-image.jpg
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎯 Key Sections

### Hero Section
- Large animated headline: "We can do IT"
- Subheadline with company description
- CTA button scrolling to contact form
- 3D animated background

### About Us
- Company mission and values (placeholder)
- Stats cards with hover effects
- Fade-in animations

### Services
- 5 service cards with icons:
  1. Data Migration & Integration
  2. AI Automation & Agents
  3. Data Cleansing & Quality Management
  4. IT Consulting & Systems Optimization
  5. Data Governance
- Hover animations and glow effects

### Contact Form
- Name, Email, Message fields
- Form validation
- Success animation
- Auto-reset after submission

### Footer
- Quick links
- Legal links (Privacy, Cookies, Legal)
- Social media icons (LinkedIn, Email)
- Copyright notice

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.js` to modify color values:

```js
neonPurple: {
  DEFAULT: '#7A3FFF',  // Change this
  light: '#9B6AFF',
  dark: '#5A1FDF',
}
```

### Adding New Services

Edit `components/sections/Services.tsx`:

```tsx
const services = [
  {
    icon: YourIcon,
    title: 'New Service',
    description: 'Service description...',
  },
  // ... more services
];
```

### Modifying Typography

Edit `app/globals.css`:

```css
h1 {
  @apply text-5xl md:text-7xl lg:text-8xl; /* Adjust sizes */
}
```

## 🌐 SEO Optimization

The site includes:
- Semantic HTML5 elements
- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card metadata
- Structured data ready
- Performance optimizations
- Mobile-responsive design

### Update SEO Metadata

Edit `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Company | Your Tagline',
  description: 'Your description...',
  // ... more metadata
};
```

## 📱 Responsive Design

Breakpoints (Tailwind CSS):
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
# Push to GitHub and connect to Vercel
```

### Other Platforms
```bash
npm run build
npm start
# Deploy the .next folder
```

## 📦 Dependencies

### Core
- `next`: ^14.2.3
- `react`: ^18.3.1
- `react-dom`: ^18.3.1

### Animation
- `framer-motion`: ^11.2.10
- `@react-three/fiber`: ^8.16.6
- `@react-three/drei`: ^9.105.6
- `three`: ^0.164.1

### Icons
- `lucide-react`: ^0.379.0

### Styling
- `tailwindcss`: ^3.4.3
- `autoprefixer`: ^10.4.19
- `postcss`: ^8.4.38

## 🎨 Favicon & Assets

Create and place the following files in the `public/` directory:

- `favicon.ico` - 32x32 icon
- `icon.svg` - Scalable vector icon
- `apple-touch-icon.png` - 180x180 for iOS
- `og-image.jpg` - 1200x630 for social sharing
- `manifest.json` - PWA manifest

Example `manifest.json`:
```json
{
  "name": "Migration Factory",
  "short_name": "MigFactory",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#7A3FFF",
  "background_color": "#1a1b1f",
  "display": "standalone"
}
```

## 🐛 Troubleshooting

### 3D Backgrounds Not Rendering
- Ensure WebGL is supported in the browser
- Check browser console for Three.js errors
- Try a different animation style

### Theme Not Persisting
- Check localStorage is enabled
- Clear browser cache
- Verify `getStoredTheme()` function

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📄 License

MIT License - feel free to use for commercial projects.

## 🤝 Support

For issues or questions, contact: contact@migrationfactory.com

---

**Built with ❤️ by Migration Factory**
