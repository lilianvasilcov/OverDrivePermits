# OVERDRIVE PERMITS - Next.js Application

A modern permits booking platform built with **Next.js 14**, TypeScript, and React.

## ✅ Current Status

### Completed
- ✅ Next.js 14 project setup with TypeScript
- ✅ Design system (CSS variables, global styles)
- ✅ Layout components (Header, Footer, Layout)
- ✅ Hero Section with modern styling
- ✅ Map Section structure (placeholder for map library)
- ✅ State Regulations display component
- ✅ API route for permit submissions (`/api/permit`)
- ✅ Email service integration (nodemailer)
- ✅ All components updated for Next.js (Image components, 'use client' directives)
- ✅ White background theme throughout
- ✅ Modern, minimalist design

### In Progress
- 🚧 Permit Request Form (structure ready, needs full implementation)
- 🚧 Interactive US Map (placeholder ready, needs map library integration)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Setup Environment Variables
Create `.env.local` file:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=admin@overdrivepermits.com
```

### 3. Add Logo
Place your logo (with background removed) at:
```
public/logo.png
```

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── api/          # API routes
│   │       └── permit/   # Permit submission endpoint
│   ├── components/        # React components
│   │   ├── common/       # Reusable UI (Button, etc.)
│   │   ├── layout/       # Header, Footer, Layout
│   │   ├── hero/         # Hero section
│   │   ├── map/          # US Map and regulations
│   │   └── form/         # Permit request form
│   ├── styles/           # Global CSS and variables
│   └── utils/            # Utilities and constants
├── public/               # Static assets (logo.png)
└── package.json
```

## 🎨 Design System

- **Background**: Clean white (`#FFFFFF`) throughout
- **Primary Colors**: 
  - Red: `#DC143C` (CTAs, primary actions)
  - Blue: `#1E3A8A` (secondary actions, accents)
- **Typography**: Inter (body) and Montserrat (headings)
- **Style**: Modern, minimalist with subtle shadows and smooth transitions

## 📡 API Endpoints

### POST `/api/permit`
Submit a permit request. Sends email notification.

**Request:**
```json
{
  "customerName": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "state": "CA",
  "permitType": "oversized",
  ...
}
```

**Response:**
```json
{
  "success": true,
  "message": "Permit request submitted successfully"
}
```

## 🔜 Next Steps

1. Complete Permit Request Form with validation
2. Integrate map library (Datamaps.js or React Simple Maps)
3. Add state regulations data
4. Enhance email templates
5. Add form validation (frontend + backend)
6. Deploy to production (Vercel recommended)

## 📚 Documentation

- See `../INSTRUCTIONS.md` for detailed development guidelines
- See `../NEXTJS_SETUP.md` for Next.js migration details

## 🛠️ Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
vercel
```
