# 🚀 Quick Start Guide - Migration Factory Website

## Installation & Running

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:3000
```

## 🎨 Switching Between Designs

### Method 1: Using the UI (Easiest)
1. Look for the **palette icon** 🎨 in the bottom-right corner
2. Click it to open the customization panel
3. Select your color theme:
   - **Neon Purple** - AI/Futuristic (default)
   - **Electric Green** - Data flow/Cyber
   - **Amber Orange** - Enterprise consulting
   - **Lime Accent** - Clean startup
4. Choose your background animation:
   - **Tech Grid** - 3D data nodes network
   - **Particle Flow** - Flowing particles
   - **Energy Field** - AI waves and circuits

Settings are saved automatically!

### Method 2: Edit Code Directly

**Change Default Theme:**
Edit `app/layout.tsx`, line 79:
```tsx
<body className="theme-purple">  // Change to: theme-green, theme-orange, theme-lime
```

**Change Default Animation:**
Edit `lib/themeConfig.ts`, line 80:
```typescript
return 'techGrid';  // Change to: 'particleFlow', 'energyField'
```

## 📋 Preview All Variants

### Color Themes Preview:
1. **Purple** - http://localhost:3000 (default)
2. **Green** - Click palette icon → Select "Electric Green"
3. **Orange** - Click palette icon → Select "Amber Orange"  
4. **Lime** - Click palette icon → Select "Lime Accent"

### Animation Variants Preview:
1. **Tech Grid** - Click palette icon → Select "Tech Grid"
2. **Particle Flow** - Click palette icon → Select "Particle Flow"
3. **Energy Field** - Click palette icon → Select "Energy Field"

## 🛠️ Common Customizations

### Change Company Name
1. Edit `app/layout.tsx` - Update metadata title and description
2. Edit `components/sections/Footer.tsx` - Update brand name
3. Edit `components/sections/Hero.tsx` - Update headline if needed

### Update Contact Email
Edit `components/sections/Footer.tsx`:
```tsx
href="mailto:YOUR-EMAIL@example.com"
```

### Modify Services
Edit `components/sections/Services.tsx`:
```tsx
const services = [
  {
    icon: YourIcon,  // Import from lucide-react
    title: 'Your Service',
    description: 'Description...',
  },
  // Add more services...
];
```

### Edit About Section Text
Edit `components/sections/About.tsx` - Update paragraphs in the component

## 🎯 Testing Each Variant

### Quick Test Script:
```bash
# Start dev server
npm run dev

# In browser:
# 1. Test Purple theme with Tech Grid (default)
# 2. Click palette icon → Switch to Green → Tech Grid
# 3. Switch to Orange → Particle Flow
# 4. Switch to Lime → Energy Field
# 5. Test contact form submission
# 6. Test responsive design (resize browser)
```

## 📱 Mobile Testing
- Chrome DevTools: F12 → Toggle device toolbar
- Test breakpoints: 375px, 768px, 1024px, 1440px

## 🚢 Deployment

### Vercel (Recommended)
```bash
# 1. Push code to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main

# 2. Go to vercel.com
# 3. Import your GitHub repository
# 4. Deploy!
```

### Manual Build
```bash
npm run build
npm start
```

## ⚠️ Troubleshooting

**3D animations not showing:**
- Check browser console for errors
- Ensure WebGL is supported
- Try different animation style

**Theme not persisting:**
- Clear browser localStorage
- Check browser console for errors

**Build fails:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📚 File Structure

```
Key files to customize:
├── app/
│   ├── layout.tsx          ← SEO metadata, company name
│   └── page.tsx            ← Main page
├── components/sections/
│   ├── Hero.tsx            ← Main headline
│   ├── About.tsx           ← Company description
│   ├── Services.tsx        ← Service offerings
│   └── Contact.tsx         ← Contact form
├── lib/themeConfig.ts      ← Theme colors & defaults
└── README.md              ← Full documentation
```

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **Three.js**: https://threejs.org/docs

## 💡 Pro Tips

1. **Performance**: The 3D backgrounds are optimized but test on lower-end devices
2. **SEO**: Update all metadata in `app/layout.tsx` before deploying
3. **Analytics**: Add Google Analytics ID in `.env.local`
4. **Fonts**: Fonts are loaded from Google Fonts, consider self-hosting for GDPR
5. **Images**: Add favicon.ico and og-image.jpg to `/public` folder

## ✅ Pre-Launch Checklist

- [ ] Update company name throughout
- [ ] Customize all text content
- [ ] Add real email addresses
- [ ] Update SEO metadata
- [ ] Add favicon and OG image
- [ ] Test all theme variants
- [ ] Test contact form
- [ ] Mobile responsiveness check
- [ ] Cross-browser testing
- [ ] Privacy/Cookie/Legal pages completed

---

**Need help?** Check the full README.md or contact support.
