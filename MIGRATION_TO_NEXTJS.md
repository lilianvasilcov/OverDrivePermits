# Migration to Next.js - Component Copy Guide

## ✅ Already Migrated
- Project structure and configuration
- Styles (variables.css, global.css)
- API route for permit submission (`/api/permit`)
- App layout and page structure

## 📋 Components to Copy

Copy these components from `frontend/src/components/` to `frontend-nextjs/src/components/`:

### 1. Layout Components
- `layout/Header/` → Copy as-is (add `'use client'` if using hooks)
- `layout/Footer/` → Copy as-is
- `layout/Layout.tsx` → Copy as-is

### 2. Hero Section
- `hero/HeroSection.tsx` → Copy, add `'use client'` at top
- `hero/HeroSection.module.css` → Copy as-is

### 3. Map Components
- `map/MapContainer.tsx` → Copy, add `'use client'`
- `map/USMap/` → Copy, add `'use client'`
- `map/StateRegulations/` → Copy as-is
- All CSS modules → Copy as-is

### 4. Form Components
- `form/PermitForm/` → Copy, add `'use client'`
- CSS modules → Copy as-is

### 5. Common Components
- `common/Button/` → Copy as-is (works everywhere)
- `common/Input/` → Copy, add `'use client'` if using hooks

### 6. Utils
- `utils/constants/states.ts` → Copy as-is

## 🔧 Changes Needed

### 1. Add 'use client' directive
For any component that uses:
- React hooks (useState, useEffect, etc.)
- Event handlers (onClick, onChange, etc.)
- Browser APIs

Add at the top of the file:
```typescript
'use client';
```

### 2. Image Component
Replace `<img>` with Next.js `<Image>`:
```typescript
import Image from 'next/image';

// Old
<img src="/logo.png" alt="Logo" />

// New
<Image src="/logo.png" alt="Logo" width={200} height={50} />
```

### 3. Import Paths
Update imports to use `@/` alias:
```typescript
// Old
import Button from '../../common/Button';

// New
import Button from '@/components/common/Button';
```

## 🚀 Quick Copy Command

From the project root:
```bash
# Copy components
cp -r frontend/src/components frontend-nextjs/src/

# Copy utils
cp -r frontend/src/utils frontend-nextjs/src/

# Copy shared types (already exists, but verify)
cp -r shared frontend-nextjs/
```

Then manually:
1. Add `'use client'` to interactive components
2. Replace `<img>` with Next.js `<Image>` component
3. Update import paths to use `@/` alias

## ✅ Verification Checklist

- [ ] All components copied
- [ ] 'use client' added to interactive components
- [ ] Images use Next.js Image component
- [ ] Import paths updated
- [ ] No TypeScript errors
- [ ] App runs with `npm run dev`

