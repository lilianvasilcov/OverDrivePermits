# OVERDRIVE PERMITS

A modern permits booking platform for trucking companies and customers to request permits for oversized, overweight, and superload cargo transportation across all 50 US states.

## 🚀 Project Status

### ✅ Completed
- Project structure setup
- Frontend React + TypeScript configuration
- Design system (CSS variables, global styles)
- Layout components (Header, Footer)
- Hero Section
- Map Section structure (placeholder for map library)
- State Regulations display component
- Basic styling with white background and modern design

### 🚧 In Progress
- US Map interactive component (needs map library integration)
- Permit Request Form (structure created, needs full implementation)

### 📋 TODO
- Backend API setup (Node.js/Express)
- Email service integration
- Form validation and submission
- State regulations data
- Map library integration (Datamaps.js or React Simple Maps)

## 📁 Project Structure

```
overdrive-permits/
├── frontend/          # React + TypeScript frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/      # Reusable UI components
│   │   │   ├── layout/      # Header, Footer, Layout
│   │   │   ├── hero/         # Hero section
│   │   │   ├── map/          # US Map and regulations
│   │   │   └── form/         # Permit request form
│   │   ├── styles/           # Global CSS and variables
│   │   └── utils/            # Utilities and constants
│   └── package.json
└── INSTRUCTIONS.md   # Detailed development instructions
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3001`

### Backend Setup (Coming Soon)
Backend setup instructions will be added once the backend is implemented.

## 🎨 Design System

The website uses a modern design with:
- **Background**: Clean white (`#FFFFFF`) throughout
- **Primary Colors**: 
  - Red: `#DC143C` (for CTAs and primary actions)
  - Blue: `#1E3A8A` (for secondary actions and accents)
- **Typography**: Inter (body) and Montserrat (headings)
- **Spacing**: 4px grid system
- **Shadows**: Subtle, layered shadows for depth
- **Border Radius**: 6px-12px for modern rounded corners

## 📝 Development Notes

- All components follow SOLID principles
- Code is organized for reusability
- TypeScript is used for type safety
- CSS Modules for component styling
- Responsive design (mobile-first approach)

## 🔜 Next Steps

1. Integrate map library (Datamaps.js or React Simple Maps)
2. Complete Permit Request Form with validation
3. Setup backend API with Express
4. Implement email service
5. Add state regulations data
6. Connect frontend to backend
7. Add form submission handling
8. Polish and optimize

## 📚 Documentation

See `INSTRUCTIONS.md` for detailed development guidelines, architecture patterns, and implementation details.

## 📄 License

Private project - All rights reserved

