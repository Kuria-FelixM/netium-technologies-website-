# Netium Technologies Marketing Website

A professional, SEO-optimized marketing website for Netium Technologies Limited, a cybersecurity and cloud advisory company based in Nairobi, Kenya.

## Website Structure

### Pages & Sections
- **Hero Section** - Bold headline, compelling CTA, background pattern
- **Trust Bar** - Client logos and "Trusted by" section
- **About Section** - Company mission and vision with illustration
- **Why Choose Us** - 4 key differentiation points
- **Cybersecurity Services** - 5 security solution cards
- **Cloud Advisory Services** - 9 cloud solution cards
- **CTA Banner** - Free assessment call-to-action
- **Contact Section** - Contact form and contact information
- **Navigation & Footer** - Sticky navbar with mobile menu and comprehensive footer

### Component Architecture
- **Layout Components**: Navbar, Footer, Container wrapper
- **Section Components**: HeroSection, TrustBar, AboutSection, WhyChooseUs, CybersecurityServices, CloudServices, CTABanner, ContactSection
- **Reusable Components**: ServicesCard for feature display

## Design System

### Color Palette
- **Primary Blue**: #2563EB - CTAs and accents
- **Secondary Navy**: #1E3A5F - Hero section and headers
- **White**: #FFFFFF - Background
- **Light Grey**: #F8FAFC - Secondary backgrounds
- **Dark Grey**: #1F2937 - Text color
- **Medium Grey**: #6B7280 - Muted text

### Typography
- **Font**: Geist (Google Fonts) - Professional and modern
- **Hierarchy**: Proper H1-H3 heading structure for SEO

### Spacing
- Uses 8px spacing grid for consistency
- Responsive padding: 20px mobile, 40px tablet, 60px desktop
- Max-width container: 1280px

## Key Features

1. **Responsive Design** - Mobile-first approach with hamburger menu for mobile devices
2. **Smooth Navigation** - Click to scroll navigation between sections
3. **Contact Form** - Working form with validation and success state
4. **SEO Optimized** - Proper metadata, heading hierarchy, alt text for images
5. **Professional Styling** - Hover states, transitions, and modern aesthetics
6. **Accessibility** - Semantic HTML, ARIA labels, screen reader friendly

## Deployment

### To Vercel
1. Click "Publish" button in v0 interface
2. Connect GitHub repository if not already connected
3. Vercel will automatically build and deploy

### Local Development
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Contact Information

The website includes:
- Email: info@netium.co.ke
- Phone: +254 (0) 700 000 000
- Location: Nairobi, Kenya
- Response Time: Typically within 24 hours

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS and Android)
- Minimum viewport width: 320px

## Future Enhancements

- Backend integration for contact form submission
- Blog section for security articles and insights
- Case studies section showcasing client successes
- Client testimonials/reviews section
- Integration with scheduling system for consultations
- Newsletter signup form
- Dark mode toggle (currently light theme only)

## File Structure

```
/app
  /page.tsx - Main page with all sections
  /layout.tsx - Root layout with metadata
  /globals.css - Design tokens and global styles

/components
  /layout
    Navbar.tsx
    Footer.tsx
  /sections
    HeroSection.tsx
    TrustBar.tsx
    AboutSection.tsx
    WhyChooseUs.tsx
    CybersecurityServices.tsx
    CloudServices.tsx
    CTABanner.tsx
    ContactSection.tsx
  /ui
    services-card.tsx
  Container.tsx

/public
  hero-pattern.png
  about-illustration.png
  contact-illustration.png
```

---

**Version**: 1.0  
**Last Updated**: June 2026  
**Status**: Production Ready
