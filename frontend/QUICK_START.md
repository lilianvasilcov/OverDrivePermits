# Quick Start Guide

## ✅ Project Status

The frontend folder is now fully configured for **Next.js 14** with:
- ✅ All components migrated and updated
- ✅ API routes for email submission
- ✅ Design system (white background, modern styling)
- ✅ TypeScript configuration
- ✅ All imports using `@/` alias

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Create Environment File
Create `.env.local` in the `frontend/` directory:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=admin@overdrivepermits.com
```

### 3. Add Logo
Place your logo file (with background removed) at:
```
frontend/public/logo.png
```

### 4. Run Development Server
```bash
npm run dev
```

Visit: `http://localhost:3000`

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── api/          # API routes
│   │       └── permit/   # POST /api/permit
│   ├── components/       # React components
│   ├── styles/           # Global CSS
│   └── utils/            # Utilities
├── public/               # Static assets (logo.png)
└── package.json
```

## ✅ What's Working

- Layout (Header, Footer)
- Hero Section
- Map Section (placeholder)
- State Regulations Display
- API Route for form submission
- Email service integration

## 🚧 Next Steps

1. Complete Permit Request Form
2. Integrate map library
3. Add state regulations data
4. Test email functionality

