# Why Separate Folders Don't Work in Deployment (and How to Fix It)

## The Problem

When deploying to Vercel (or most hosting platforms), they:

1. **Clone only the repository root** - They don't know about your folder structure
2. **Build from a single directory** - They need to know where your `package.json` is
3. **Can't access files outside the build context** - TypeScript/Next.js can't resolve paths outside the project root

## Why Your Setup Failed

```
permits/
├── frontend/          ← Vercel builds from here
│   └── src/
│       └── app/
│           └── api/
│               └── route.ts
│                   └── import from '../../../../shared/types' ❌
└── shared/           ← Outside the build context, not accessible
    └── types/
```

When Vercel builds, it only has access to the `frontend/` directory, so `../../../../shared/` doesn't exist in the build environment.

## Solutions

### ✅ Solution 1: Move Types Inside Frontend (Current - Recommended)

**Pros:**
- Simple and works everywhere
- No special configuration needed
- Fast builds
- Works with any deployment platform

**Cons:**
- Types are duplicated if you have a separate backend
- Not ideal for true monorepo setups

**Structure:**
```
frontend/
├── src/
│   └── types/        ← Types inside frontend
└── package.json
```

### ✅ Solution 2: Monorepo with Vercel Configuration

If you want to keep separate folders, you need to configure Vercel properly:

#### Option A: Root-Level Monorepo

1. **Create a root `package.json`:**
```json
{
  "name": "overdrive-permits-monorepo",
  "private": true,
  "workspaces": [
    "frontend",
    "shared"
  ]
}
```

2. **Create `vercel.json` in root:**
```json
{
  "buildCommand": "cd frontend && npm run build",
  "outputDirectory": "frontend/.next",
  "installCommand": "npm install",
  "framework": "nextjs",
  "rootDirectory": "frontend"
}
```

3. **Update `frontend/tsconfig.json`:**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@shared/*": ["../shared/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "../shared/**/*.ts"
  ]
}
```

#### Option B: Copy Files During Build

Add a build script that copies shared files:

**In `frontend/package.json`:**
```json
{
  "scripts": {
    "prebuild": "cp -r ../shared/types ./src/types",
    "build": "next build"
  }
}
```

### ✅ Solution 3: Use npm/yarn Workspaces (Advanced)

For true monorepo with shared packages:

1. **Root `package.json`:**
```json
{
  "name": "overdrive-permits",
  "private": true,
  "workspaces": [
    "frontend",
    "shared"
  ]
}
```

2. **`shared/package.json`:**
```json
{
  "name": "@overdrive/shared",
  "version": "1.0.0",
  "main": "types/index.ts",
  "types": "types/index.ts"
}
```

3. **`frontend/package.json`:**
```json
{
  "dependencies": {
    "@overdrive/shared": "*"
  }
}
```

4. **Import in code:**
```typescript
import { PermitRequest } from '@overdrive/shared/types/permit.types';
```

## Recommendation

For your current setup, **Solution 1 (current approach)** is best because:
- ✅ Simple and reliable
- ✅ Works with all deployment platforms
- ✅ No special configuration needed
- ✅ Faster builds
- ✅ You don't have a separate backend that needs the types

If you later add a separate backend that needs the same types, then consider Solution 3 (workspaces).

## Current Status

✅ **Fixed!** All types are now in `frontend/src/types/` and will work perfectly in Vercel deployment.

