# Zemzem Mejlis and Furniture Website

A modern, responsive website for Zemzem Mejlis and Furniture, showcasing premium furniture collections and mejlis sets.

## Features

- 🎨 Modern, elegant design with smooth animations
- 📱 Fully responsive across all devices
- 🖼️ Interactive product galleries
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 Call-to-action sections
- 🎨 Custom color scheme matching brand identity

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Vite

## Project Structure

```
zemzem-mejlis/
├── public/
│   ├── logo.png
│   └── assets/
│       ├── products/
│       │   ├── majlis-set/
│       │   ├── cushions/
│       │   └── dining-set/
│       └── hero/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductGallery.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json
```

## Image Assets Organization

The project uses a structured approach for organizing images:

```
public/assets/
├── products/
│   ├── majlis-set/
│   │   ├── main.jpg
│   │   ├── detail-1.jpg
│   │   └── detail-2.jpg
│   ├── cushions/
│   │   ├── main.jpg
│   │   ├── detail-1.jpg
│   │   └── detail-2.jpg
│   └── dining-set/
│       ├── main.jpg
│       ├── detail-1.jpg
│       └── detail-2.jpg
└── hero/
    └── hero-image.jpg
```

### Image Replacement Guide

To replace the placeholder Unsplash images with local assets:

1. Create the directory structure shown above in the `public` folder
2. Add your images to the appropriate folders
3. Update the image paths in `App.tsx`:

```typescript
// Replace Unsplash URLs with local paths
const products = [
  {
    images: [
      "/assets/products/majlis-set/main.jpg",
      "/assets/products/majlis-set/detail-1.jpg",
      "/assets/products/majlis-set/detail-2.jpg"
    ],
    // ... rest of the product data
  },
  // ... other products
];
```

## Setup and Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Customization

### Colors

The website uses a custom color scheme defined in `src/index.css`:

```css
:root {
  --primary: #1e4d5c;
  --secondary: #2a6477;
  --accent: #34818f;
}
```

To modify the color scheme, update these variables to match your brand colors.

### Content

Product information can be updated in the `products` array in `App.tsx`. Each product object follows this structure:

```typescript
{
  images: string[];
  title: string;
  description: string;
  price: string;
  features: string[];
  dimensions: string;
  materials: string[];
}
```

## Deployment

The project can be deployed to any static hosting service. Build the project using:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Browser Support

The website supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © Zemzem Mejlis and Furniture