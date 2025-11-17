# OVERDRIVE PERMITS - Development Instructions

## Project Overview
**Website Name**: OVERDRIVE PERMITS  
**Purpose**: Permits booking platform for trucking companies and other customers  
**Main Feature**: Permit request form with email notifications

---

## Table of Contents
1. [Architecture & Design Patterns](#architecture--design-patterns)
2. [Technology Stack](#technology-stack)
3. [Design System & Color Palette](#design-system--color-palette)
4. [Project Structure](#project-structure)
5. [Core Features](#core-features)
6. [Component Architecture](#component-architecture)
7. [SOLID Principles Implementation](#solid-principles-implementation)
8. [Code Reusability Guidelines](#code-reusability-guidelines)
9. [Implementation Details](#implementation-details)

---

## Architecture & Design Patterns

### Design Patterns to Implement

1. **MVC (Model-View-Controller)**
   - Separate business logic from presentation
   - Models: Data structures and validation
   - Views: UI components
   - Controllers: Handle user interactions

2. **Repository Pattern**
   - Abstract data access layer
   - Email service abstraction
   - Form submission handling

3. **Factory Pattern**
   - Create form validators dynamically
   - Generate email templates
   - State regulation data factory

4. **Observer Pattern**
   - Form field validation
   - Map state selection events
   - Email notification system

5. **Strategy Pattern**
   - Different validation strategies per form field
   - Multiple email sending strategies (SMTP, API)
   - State-specific regulation display strategies

6. **Singleton Pattern**
   - Email service instance
   - Configuration manager
   - Logger instance

---

## Technology Stack

### Frontend
- **Framework**: React.js or Vue.js (recommended: React for better component reusability)
- **Styling**: CSS Modules / Styled Components / Tailwind CSS
- **State Management**: Context API / Redux (for complex state)
- **Form Handling**: React Hook Form / Formik
- **Map Library**: 
  - Datamaps.js (as shown in example)
  - OR Leaflet.js with custom US states layer
  - OR React Simple Maps
- **Validation**: Yup / Zod

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js / Fastify
- **Email Service**: 
  - Nodemailer (SMTP)
  - SendGrid API
  - Mailgun API
- **Validation**: Joi / express-validator

### Development Tools
- **Build Tool**: Vite / Webpack
- **Package Manager**: npm / yarn
- **Linting**: ESLint
- **Formatting**: Prettier
- **Version Control**: Git

---

## Design System & Color Palette

### Design Philosophy
- **Background**: Clean white background (`#FFFFFF`) throughout the entire website
- **Style**: Modern, minimalist design with clean lines and ample white space
- **Approach**: Contemporary UI/UX with subtle shadows, smooth transitions, and professional aesthetics
- **Layout**: Spacious layouts with generous padding and breathing room

### Logo Information
- **Logo File**: `logo.png` (to be added - background will be removed)
- **Logo Design**: Features stylized "OD" letters forming an infinity symbol with road/track motif
- **Logo Colors**: Red, White, and Blue (patriotic theme)
- **Logo Theme**: Represents travel, United States, and trucking industry

### Color Palette

Based on the logo design, the following color palette should be used throughout the website:

#### Primary Colors

```css
/* Primary Red - Main brand color (from logo) */
--color-primary-red: #DC143C;        /* Crimson Red - vibrant red from logo */
--color-primary-red-dark: #B71C1C;   /* Darker shade for hover states */
--color-primary-red-light: #EF5350;  /* Lighter shade for backgrounds */

/* Primary Blue - Accent color (from logo stars) */
--color-primary-blue: #1E3A8A;       /* Deep blue from stars */
--color-primary-blue-dark: #1E40AF; /* Darker shade */
--color-primary-blue-light: #3B82F6; /* Lighter shade for highlights */

/* White - Neutral/Background */
--color-white: #FFFFFF;
--color-white-off: #F8F9FA;          /* Off-white for subtle backgrounds */
```

#### Secondary Colors

```css
/* Neutral Grays */
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;

/* Status Colors */
--color-success: #10B981;            /* Green for success messages */
--color-error: #DC143C;              /* Red for errors (matches primary) */
--color-warning: #F59E0B;            /* Amber for warnings */
--color-info: #3B82F6;               /* Blue for info messages */
```

#### Color Usage Guidelines

1. **Primary Red (`--color-primary-red`)**
   - Primary buttons
   - Call-to-action elements
   - Active states
   - Important highlights
   - Header/Logo area
   - Form submit buttons

2. **Primary Blue (`--color-primary-blue`)**
   - Secondary buttons
   - Links
   - Selected states (map)
   - Accent elements
   - Information sections
   - Interactive elements

3. **White (`--color-white`)**
   - Backgrounds
   - Text on colored backgrounds
   - Card backgrounds
   - Spacing/breathing room

4. **Gray Scale**
   - Text colors (gray-700, gray-800, gray-900)
   - Borders (gray-200, gray-300)
   - Disabled states (gray-400)
   - Subtle backgrounds (gray-50, gray-100)

### Typography

```css
/* Font Families */
--font-primary: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-heading: 'Montserrat', 'Inter', sans-serif;  /* Bold, modern for headings */

/* Font Sizes */
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;   /* 20px */
--font-size-2xl: 1.5rem;   /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem;  /* 36px */
--font-size-5xl: 3rem;     /* 48px */

/* Font Weights */
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### Spacing System

```css
/* Spacing Scale (based on 4px grid) */
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;  /* 20px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
--spacing-10: 2.5rem;  /* 40px */
--spacing-12: 3rem;    /* 48px */
--spacing-16: 4rem;    /* 64px */
--spacing-20: 5rem;    /* 80px */
--spacing-24: 6rem;    /* 96px */
```

### Modern Design Principles

#### Layout & Spacing
- **White Space**: Generous use of white space for breathing room and visual hierarchy
- **Grid System**: Use a 12-column grid system for consistent layouts
- **Container Width**: Max-width containers (1200px-1400px) centered on page
- **Section Spacing**: Large vertical spacing between sections (80px-120px)
- **Card Spacing**: Consistent padding within cards (24px-32px)

#### Visual Effects
- **Subtle Shadows**: Soft, layered shadows for depth (not heavy or dark)
- **Smooth Transitions**: All interactions should have smooth 0.2s-0.3s transitions
- **Hover Effects**: Subtle lift effects on interactive elements
- **Border Radius**: Rounded corners (6px-12px) for modern feel
- **Gradients**: Subtle gradients only where appropriate (avoid heavy gradients)

#### Typography Hierarchy
- **Headings**: Bold, clear hierarchy (H1: 48px, H2: 36px, H3: 30px, H4: 24px)
- **Body Text**: Comfortable reading size (16px-18px) with good line-height (1.6-1.8)
- **Contrast**: High contrast text on white background for readability
- **Letter Spacing**: Slight letter spacing on headings for modern look

#### Modern UI Patterns
- **Cards**: Elevated cards with subtle shadows and rounded corners
- **Buttons**: Rounded buttons with hover states and smooth transitions
- **Forms**: Clean input fields with focus states and subtle borders
- **Navigation**: Clean, minimal navigation with smooth transitions
- **Icons**: Modern icon set (Feather Icons, Heroicons, or similar)
- **Animations**: Subtle fade-in and slide animations (not distracting)

#### Color Usage on White Background
- **Primary Actions**: Use red (#DC143C) for primary CTAs
- **Secondary Actions**: Use blue (#1E3A8A) for secondary actions
- **Text**: Dark gray (#1F2937 or #374151) for body text
- **Borders**: Light gray (#E5E7EB) for subtle separations
- **Accents**: Use brand colors sparingly for emphasis

### Component Styling Guidelines

#### Buttons

```css
/* Primary Button (Red) - Modern Style */
.btn-primary {
  background-color: var(--color-primary-red);
  color: var(--color-white);
  border: none;
  padding: 0.875rem 2rem;  /* 14px 32px */
  border-radius: 0.5rem;    /* 8px - modern rounded */
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  letter-spacing: 0.025em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(220, 20, 60, 0.2);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-primary:hover {
  background-color: var(--color-primary-red-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(220, 20, 60, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(220, 20, 60, 0.2);
}

/* Secondary Button (Blue) - Modern Style */
.btn-secondary {
  background-color: var(--color-primary-blue);
  color: var(--color-white);
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  letter-spacing: 0.025em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(30, 58, 138, 0.2);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-secondary:hover {
  background-color: var(--color-primary-blue-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(30, 58, 138, 0.3);
}

/* Outline Button - Modern Style */
.btn-outline {
  background-color: transparent;
  color: var(--color-primary-red);
  border: 2px solid var(--color-primary-red);
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: var(--font-weight-semibold);
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-outline:hover {
  background-color: var(--color-primary-red);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 20, 60, 0.2);
}
```

#### Form Elements

```css
/* Input Fields - Modern Style */
.input-field {
  width: 100%;
  background-color: var(--color-white);
  border: 2px solid var(--color-gray-300);
  border-radius: 0.5rem;  /* 8px - modern rounded */
  padding: 0.875rem 1rem;  /* 14px 16px */
  font-size: var(--font-size-base);
  color: var(--color-gray-900);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.input-field::placeholder {
  color: var(--color-gray-400);
}

.input-field:hover {
  border-color: var(--color-gray-400);
}

.input-field:focus {
  outline: none;
  border-color: var(--color-primary-blue);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
}

.input-field:error {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px rgba(220, 20, 60, 0.1);
}

/* Labels - Modern Style */
.label {
  display: block;
  color: var(--color-gray-700);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  margin-bottom: 0.5rem;
  letter-spacing: 0.025em;
}

.label.required::after {
  content: ' *';
  color: var(--color-error);
}

/* Form Group - Modern Style */
.form-group {
  margin-bottom: 1.5rem;
}

/* Error Message - Modern Style */
.error-message {
  color: var(--color-error);
  font-size: var(--font-size-sm);
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

/* Select Dropdown - Modern Style */
.select-field {
  width: 100%;
  background-color: var(--color-white);
  border: 2px solid var(--color-gray-300);
  border-radius: 0.5rem;
  padding: 0.875rem 1rem;
  font-size: var(--font-size-base);
  color: var(--color-gray-900);
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

.select-field:focus {
  outline: none;
  border-color: var(--color-primary-blue);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

#### Map Styling

```css
/* US Map Colors */
.map-default-fill: #CBE8FF;        /* Light blue for unselected states */
.map-selected-fill: var(--color-primary-blue);  /* Blue for selected state */
.map-hover-fill: var(--color-primary-blue-light);  /* Lighter blue on hover */
.map-border: var(--color-white);   /* White borders */
```

#### Cards & Containers

```css
/* Card - Modern Style */
.card {
  background-color: var(--color-white);
  border-radius: 0.75rem;  /* 12px - modern rounded */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 2rem;  /* 32px */
  border: 1px solid var(--color-gray-200);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

/* Container - Modern Style */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

.container-wide {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

/* Section - Modern Style */
.section {
  padding: 5rem 0;  /* 80px vertical spacing */
  background-color: var(--color-white);
}

.section-alt {
  padding: 5rem 0;
  background-color: var(--color-gray-50);  /* Subtle gray for alternating sections */
}
```

### Global Styles (White Background Theme)

```css
/* frontend/src/styles/global.css */

/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--color-gray-900);
  background-color: var(--color-white);  /* Clean white background */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  color: var(--color-gray-900);
  letter-spacing: -0.025em;
  margin-bottom: 1rem;
}

h1 {
  font-size: 3rem;  /* 48px */
  font-weight: var(--font-weight-extrabold);
}

h2 {
  font-size: 2.25rem;  /* 36px */
}

h3 {
  font-size: 1.875rem;  /* 30px */
}

h4 {
  font-size: 1.5rem;  /* 24px */
}

p {
  margin-bottom: 1rem;
  color: var(--color-gray-700);
  line-height: 1.7;
}

a {
  color: var(--color-primary-blue);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--color-primary-blue-dark);
}

/* Layout */
#root {
  min-height: 100vh;
  background-color: var(--color-white);
}

/* Smooth Animations */
@media (prefers-reduced-motion: no-preference) {
  * {
    transition: background-color 0.2s ease, 
                border-color 0.2s ease, 
                color 0.2s ease,
                transform 0.2s ease,
                box-shadow 0.2s ease;
  }
}

/* Focus States for Accessibility */
*:focus-visible {
  outline: 2px solid var(--color-primary-blue);
  outline-offset: 2px;
}

/* Scrollbar Styling (Modern) */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: var(--color-white);
}

::-webkit-scrollbar-thumb {
  background: var(--color-gray-300);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-gray-400);
}
```

### CSS Variables File Structure

Create a centralized CSS variables file:

```css
/* frontend/src/styles/variables.css */
:root {
  /* Colors - Primary */
  --color-primary-red: #DC143C;
  --color-primary-red-dark: #B71C1C;
  --color-primary-red-light: #EF5350;
  
  --color-primary-blue: #1E3A8A;
  --color-primary-blue-dark: #1E40AF;
  --color-primary-blue-light: #3B82F6;
  
  --color-white: #FFFFFF;
  --color-white-off: #F8F9FA;
  
  /* Colors - Grays */
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  /* ... rest of grays ... */
  
  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --font-heading: 'Montserrat', sans-serif;
  /* ... font sizes and weights ... */
  
  /* Spacing */
  --spacing-1: 0.25rem;
  /* ... rest of spacing ... */
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.2s ease;
  --transition-slow: 0.3s ease;
}
```

### Design Theme Implementation

#### Theme Provider (React Example)

```typescript
// frontend/src/context/ThemeContext.tsx
export const theme = {
  colors: {
    primary: {
      red: '#DC143C',
      redDark: '#B71C1C',
      redLight: '#EF5350',
      blue: '#1E3A8A',
      blueDark: '#1E40AF',
      blueLight: '#3B82F6',
    },
    neutral: {
      white: '#FFFFFF',
      whiteOff: '#F8F9FA',
      // ... grays
    },
    status: {
      success: '#10B981',
      error: '#DC143C',
      warning: '#F59E0B',
      info: '#3B82F6',
    },
  },
  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      heading: "'Montserrat', sans-serif",
    },
    // ... sizes and weights
  },
  spacing: {
    // ... spacing values
  },
};
```

### Logo Integration

- **File Location**: `frontend/public/logo.png`
- **Usage**: 
  - Header/Navigation
  - Hero section
  - Footer
  - Email templates
  - Favicon (create from logo)
- **Styling**: 
  - Maintain aspect ratio
  - Responsive sizing
  - Hover effects (optional)
  - Alt text: "OVERDRIVE PERMITS Logo"

---

## Project Structure

```
overdrive-permits/
├── frontend/
│   ├── public/
│   │   ├── logo.png (to be added)
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.module.css
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Input/
│   │   │   │   ├── Modal/
│   │   │   │   └── LoadingSpinner/
│   │   │   ├── layout/
│   │   │   │   ├── Header/
│   │   │   │   ├── Footer/
│   │   │   │   └── Layout.tsx
│   │   │   ├── hero/
│   │   │   │   └── HeroSection.tsx
│   │   │   ├── map/
│   │   │   │   ├── USMap/
│   │   │   │   │   ├── USMap.tsx
│   │   │   │   │   ├── USMap.module.css
│   │   │   │   │   └── index.ts
│   │   │   │   ├── StateRegulations/
│   │   │   │   │   ├── StateRegulations.tsx
│   │   │   │   │   └── StateRegulations.module.css
│   │   │   │   └── MapContainer.tsx
│   │   │   └── form/
│   │   │       ├── PermitForm/
│   │   │       │   ├── PermitForm.tsx
│   │   │       │   ├── PermitForm.module.css
│   │   │       │   └── index.ts
│   │   │       ├── FormField/
│   │   │       └── FormValidation/
│   │   ├── services/
│   │   │   ├── api/
│   │   │   │   ├── permitService.ts
│   │   │   │   └── stateService.ts
│   │   │   ├── validation/
│   │   │   │   └── formValidators.ts
│   │   │   └── email/
│   │   │       └── emailService.ts
│   │   ├── hooks/
│   │   │   ├── useFormValidation.ts
│   │   │   ├── useMapInteraction.ts
│   │   │   └── useEmailSubmission.ts
│   │   ├── utils/
│   │   │   ├── constants/
│   │   │   │   ├── states.ts
│   │   │   │   └── regulations.ts
│   │   │   ├── helpers/
│   │   │   │   ├── formatters.ts
│   │   │   │   └── validators.ts
│   │   │   └── types/
│   │   │       ├── permit.types.ts
│   │   │       ├── state.types.ts
│   │   │       └── form.types.ts
│   │   ├── context/
│   │   │   ├── StateContext.tsx
│   │   │   └── FormContext.tsx
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── PermitController.ts
│   │   │   └── StateController.ts
│   │   ├── services/
│   │   │   ├── EmailService.ts
│   │   │   ├── ValidationService.ts
│   │   │   └── StateRegulationService.ts
│   │   ├── repositories/
│   │   │   ├── EmailRepository.ts
│   │   │   └── StateRepository.ts
│   │   ├── models/
│   │   │   ├── PermitRequest.ts
│   │   │   └── StateRegulation.ts
│   │   ├── routes/
│   │   │   ├── permit.routes.ts
│   │   │   └── state.routes.ts
│   │   ├── middleware/
│   │   │   ├── validation.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   └── logger.middleware.ts
│   │   ├── utils/
│   │   │   ├── emailTemplates.ts
│   │   │   └── validators.ts
│   │   ├── config/
│   │   │   ├── email.config.ts
│   │   │   └── app.config.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
├── README.md
└── INSTRUCTIONS.md (this file)
```

---

## Core Features

### 1. Hero Section
- **Location**: Top of the page
- **Background**: Clean white background with subtle design elements
- **Style**: Modern, spacious layout with generous white space
- **Content**: 
  - Logo (PNG - to be added later, background removed)
  - Website title: "OVERDRIVE PERMITS" (large, bold typography)
  - Tagline/description (clear, concise messaging)
  - Call-to-action button (primary red button with modern styling)
- **Layout**: Centered content with max-width container, large vertical padding
- **Visual Elements**: Subtle shadows, smooth animations, modern typography

### 2. Interactive US Map Section
- **Functionality**:
  - Display interactive US map
  - Click on any state to view regulations
  - Regulations displayed on the right side of the map
  - Responsive design (mobile: dropdown selector instead of map)
  
- **Implementation**:
  - Use Datamaps.js or similar library
  - State click handlers
  - Dynamic regulation loading
  - Smooth transitions

### 3. Permit Request Form
- **Fields** (to be defined, but typically include):
  - Customer Information (Name, Email, Phone)
  - Company Information (if applicable)
  - Permit Details (Type, State, Route, Dates)
  - Cargo Information (Weight, Dimensions, Type)
  - Additional Notes
  
- **Validation**:
  - Real-time field validation
  - Required field indicators
  - Email format validation
  - Phone number validation
  - Error messages

- **Submission**:
  - Form data sent to backend
  - Backend sends email notification
  - Success/error feedback to user
  - Form reset after successful submission

### 4. State Regulations Display
- **Content per State**:
  - Oversized cargo regulations
  - Overweight cargo regulations
  - Superload regulations
  - Time restrictions
  - Route restrictions
  - Permit requirements
  - Contact information

---

## Component Architecture

### Component Hierarchy

```
App
├── Layout
│   ├── Header (with logo)
│   ├── Main Content
│   │   ├── HeroSection
│   │   ├── MapSection
│   │   │   ├── USMap
│   │   │   └── StateRegulations
│   │   └── PermitForm
│   └── Footer
└── Modal (for form submission confirmation)
```

### Component Responsibilities

#### 1. USMap Component
- **Responsibilities**:
  - Render interactive map
  - Handle state clicks
  - Emit state selection events
  - Highlight selected state
  
- **Props**:
  ```typescript
  interface USMapProps {
    onStateSelect: (stateCode: string) => void;
    selectedState?: string;
    dataUrl?: string;
  }
  ```

#### 2. StateRegulations Component
- **Responsibilities**:
  - Display regulations for selected state
  - Format regulation data
  - Handle loading states
  
- **Props**:
  ```typescript
  interface StateRegulationsProps {
    stateCode: string;
    regulations: StateRegulation;
    isLoading?: boolean;
  }
  ```

#### 3. PermitForm Component
- **Responsibilities**:
  - Render form fields
  - Handle form validation
  - Submit form data
  - Display success/error messages
  
- **Props**:
  ```typescript
  interface PermitFormProps {
    onSubmit: (data: PermitRequest) => Promise<void>;
    isLoading?: boolean;
  }
  ```

---

## SOLID Principles Implementation

### 1. Single Responsibility Principle (SRP)

**Example: Email Service**
```typescript
// ✅ Good: Single responsibility
class EmailService {
  sendPermitRequest(data: PermitRequest): Promise<void> {
    // Only responsible for sending emails
  }
}

// ❌ Bad: Multiple responsibilities
class EmailService {
  sendEmail() { }
  validateForm() { }
  saveToDatabase() { }
}
```

**Example: Form Validator**
```typescript
// ✅ Good: Only validates
class FormValidator {
  validate(data: FormData): ValidationResult {
    // Only validation logic
  }
}
```

### 2. Open/Closed Principle (OCP)

**Example: Email Sending Strategies**
```typescript
// Base interface
interface EmailSender {
  send(email: Email): Promise<void>;
}

// Extend without modifying base
class SMTPEmailSender implements EmailSender {
  send(email: Email): Promise<void> {
    // SMTP implementation
  }
}

class SendGridEmailSender implements EmailSender {
  send(email: Email): Promise<void> {
    // SendGrid API implementation
  }
}
```

### 3. Liskov Substitution Principle (LSP)

**Example: State Data Sources**
```typescript
// Base interface
interface StateDataProvider {
  getRegulations(stateCode: string): Promise<StateRegulation>;
}

// All implementations must be substitutable
class APIDataProvider implements StateDataProvider {
  getRegulations(stateCode: string): Promise<StateRegulation> {
    // API call
  }
}

class LocalDataProvider implements StateDataProvider {
  getRegulations(stateCode: string): Promise<StateRegulation> {
    // Local data
  }
}
```

### 4. Interface Segregation Principle (ISP)

**Example: Form Field Interfaces**
```typescript
// ✅ Good: Segregated interfaces
interface Validatable {
  validate(): boolean;
}

interface Submittable {
  submit(): Promise<void>;
}

interface FormField extends Validatable {
  value: any;
  onChange: (value: any) => void;
}

// ❌ Bad: Fat interface
interface FormField {
  validate(): boolean;
  submit(): Promise<void>;
  render(): JSX.Element;
  save(): void;
  delete(): void;
}
```

### 5. Dependency Inversion Principle (DIP)

**Example: Service Dependencies**
```typescript
// ✅ Good: Depend on abstractions
class PermitController {
  constructor(
    private emailService: EmailService,
    private validator: FormValidator
  ) {}
}

// ❌ Bad: Depend on concrete implementations
class PermitController {
  constructor() {
    this.emailService = new SMTPEmailService();
    this.validator = new BasicValidator();
  }
}
```

---

## Code Reusability Guidelines

### 1. Reusable Components

#### Button Component
```typescript
// components/common/Button/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}
```

#### Input Component
```typescript
// components/common/Input/Input.tsx
interface InputProps {
  type: 'text' | 'email' | 'tel' | 'number';
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
}
```

### 2. Custom Hooks

#### useFormValidation
```typescript
// hooks/useFormValidation.ts
export const useFormValidation = (schema: ValidationSchema) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validate = (data: FormData) => {
    // Validation logic
  };
  
  return { errors, validate, clearErrors };
};
```

#### useMapInteraction
```typescript
// hooks/useMapInteraction.ts
export const useMapInteraction = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [regulations, setRegulations] = useState<StateRegulation | null>(null);
  
  const handleStateClick = async (stateCode: string) => {
    // Load regulations for state
  };
  
  return { selectedState, regulations, handleStateClick };
};
```

### 3. Utility Functions

#### Formatters
```typescript
// utils/helpers/formatters.ts
export const formatPhoneNumber = (phone: string): string => {
  // Format phone number
};

export const formatDate = (date: Date): string => {
  // Format date
};
```

#### Validators
```typescript
// utils/helpers/validators.ts
export const validateEmail = (email: string): boolean => {
  // Email validation
};

export const validatePhone = (phone: string): boolean => {
  // Phone validation
};
```

### 4. Constants

#### States Data
```typescript
// utils/constants/states.ts
export const US_STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  // ... all states
];

export const STATE_REGULATIONS: Record<string, StateRegulation> = {
  'AL': { /* regulations */ },
  // ... all states
};
```

---

## Implementation Details

### 1. Email Integration

#### Backend Email Service
```typescript
// backend/src/services/EmailService.ts
export class EmailService {
  async sendPermitRequest(data: PermitRequest): Promise<void> {
    const emailContent = this.generateEmailTemplate(data);
    await this.emailSender.send({
      to: process.env.ADMIN_EMAIL,
      subject: `New Permit Request - ${data.state}`,
      html: emailContent
    });
  }
  
  private generateEmailTemplate(data: PermitRequest): string {
    // Generate HTML email template
  }
}
```

#### Email Template
- HTML template with all form data
- Professional formatting
- Include all permit details
- Contact information

### 2. Form Submission Flow

```
User fills form
    ↓
Frontend validation
    ↓
POST /api/permit/request
    ↓
Backend validation
    ↓
EmailService.sendPermitRequest()
    ↓
Return success response
    ↓
Show success message to user
    ↓
Reset form
```

### 3. Map Implementation

#### Map Component Structure
```typescript
// components/map/USMap/USMap.tsx
export const USMap: React.FC<USMapProps> = ({ onStateSelect, selectedState }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize map with brand colors
    const map = new Datamap({
      element: mapRef.current,
      scope: 'usa',
      fills: {
        defaultFill: '#CBE8FF',  // Light blue for unselected states
        selected: '#1E3A8A'       // Primary blue from logo for selected state
      },
      geographyConfig: {
        highlightFillColor: '#3B82F6',  // Primary blue light for hover
        highlightBorderColor: '#FFFFFF', // White borders
        borderColor: '#FFFFFF',
        borderWidth: 1
      },
      done: (datamap: any) => {
        datamap.svg.selectAll('.datamaps-subunit').on('click', (geography: any) => {
          onStateSelect(geography.id);
        });
      }
    });
    
    return () => {
      // Cleanup
    };
  }, []);
  
  return <div ref={mapRef} id="map-container" />;
};
```

### 4. State Regulations Display

```typescript
// components/map/StateRegulations/StateRegulations.tsx
export const StateRegulations: React.FC<StateRegulationsProps> = ({ 
  stateCode, 
  regulations 
}) => {
  if (!regulations) {
    return <div>Select a state to view regulations</div>;
  }
  
  return (
    <div className={styles.regulations}>
      <h3>{regulations.stateName} Regulations</h3>
      <div className={styles.regulationSection}>
        <h4>Oversized Cargo</h4>
        <p>{regulations.oversized}</p>
      </div>
      <div className={styles.regulationSection}>
        <h4>Overweight Cargo</h4>
        <p>{regulations.overweight}</p>
      </div>
      {/* More sections */}
    </div>
  );
};
```

### 5. Responsive Design

#### Mobile Breakpoints
- **Desktop**: Map + Regulations side by side
- **Tablet**: Map + Regulations stacked
- **Mobile**: Dropdown selector + Regulations below

```typescript
// Responsive map container
<div className={styles.mapContainer}>
  <div className={styles.mapWrapper}>
    {/* Desktop: Show map */}
    <div className={styles.mapDesktop}>
      <USMap onStateSelect={handleStateSelect} />
    </div>
    
    {/* Mobile: Show dropdown */}
    <div className={styles.mapMobile}>
      <StateSelector onSelect={handleStateSelect} />
    </div>
  </div>
  
  <div className={styles.regulationsWrapper}>
    <StateRegulations stateCode={selectedState} />
  </div>
</div>
```

---

## Environment Variables

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_MAP_API_KEY=your_map_api_key
```

### Backend (.env)
```
PORT=3000
NODE_ENV=development

# Email Configuration
EMAIL_SERVICE=smtp|sendgrid|mailgun
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_password

# Or for SendGrid
SENDGRID_API_KEY=your_sendgrid_key

# Admin Email
ADMIN_EMAIL=admin@overdrivepermits.com
```

---

## Testing Strategy

### Unit Tests
- Component rendering
- Form validation
- Utility functions
- Service methods

### Integration Tests
- Form submission flow
- Email sending
- API endpoints
- Map interactions

### E2E Tests
- Complete permit request flow
- State selection and regulation display
- Form validation and submission

---

## Security Considerations

1. **Input Validation**
   - Sanitize all user inputs
   - Validate on both frontend and backend
   - Prevent XSS attacks

2. **Email Security**
   - Validate email addresses
   - Rate limiting on form submissions
   - CAPTCHA for spam prevention

3. **API Security**
   - CORS configuration
   - Request rate limiting
   - Input sanitization

---

## Performance Optimization

1. **Code Splitting**
   - Lazy load map component
   - Lazy load form component
   - Route-based code splitting

2. **Image Optimization**
   - Optimize logo PNG
   - Lazy load images
   - Use WebP format

3. **Caching**
   - Cache state regulations
   - Cache map data
   - Browser caching for static assets

---

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Email service tested
- [ ] Form submission tested
- [ ] Map interactions tested
- [ ] Responsive design verified
- [ ] Cross-browser testing
- [ ] Performance optimization
- [ ] Security audit
- [ ] SEO optimization
- [ ] Analytics integration (if needed)

---

## Next Steps

1. **Setup Project Structure**
   - Initialize frontend and backend projects
   - Install dependencies
   - Configure build tools

2. **Create Base Components**
   - Layout components
   - Common UI components
   - Form components

3. **Implement Map Feature**
   - Integrate map library
   - Create state selection logic
   - Build regulations display

4. **Build Form System**
   - Create form fields
   - Implement validation
   - Connect to backend

5. **Email Integration**
   - Setup email service
   - Create email templates
   - Test email delivery

6. **Styling & Polish**
   - Apply design system
   - Responsive adjustments
   - Animations and transitions

7. **Testing & Deployment**
   - Write tests
   - Performance optimization
   - Deploy to production

---

## Notes

- **Background**: The entire website should use a clean white background (`#FFFFFF`) throughout. This is a core design requirement for a modern, professional appearance.
- **Modern Design**: Implement contemporary UI/UX patterns with:
  - Generous white space
  - Subtle shadows and depth
  - Smooth transitions and animations
  - Rounded corners (6px-12px)
  - Clean typography hierarchy
  - Minimal, focused design elements
- **Logo**: Will be added later as PNG file (background will be removed). Logo features red, white, and blue color scheme with road/track motif. Use the provided color palette throughout the website.
- **Color Palette**: All design elements should use the defined color palette (Primary Red: #DC143C, Primary Blue: #1E3A8A, White, and Gray scale). Use colors sparingly on the white background for emphasis.
- **State Regulations**: Data needs to be collected and structured for all 50 US states.
- **Email Templates**: Should be professional, use brand colors, include logo, use white background, and contain all form data.
- **User Confirmation**: Consider adding a confirmation email to the user after form submission.
- **Future Enhancements**: May want to add a dashboard for viewing submitted permits.

---

## Contact & Support

For questions or clarifications about these instructions, please refer to the project documentation or contact the development team.

