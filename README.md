# Project Setup Guide

This is a Next.js project with Prisma ORM and PostgreSQL database.

## Prerequisites

- Node.js 18+
- PostgreSQL
- pnpm

## Setup Instructions

### 1. Clone Repository
```bash
git clone <repository-url>
cd jida-tasks
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Environment Setup
- Install PostgreSQL on your system
- Create a new database named `jidatasks`
- Copy `.env` to `.env.local` and update the DATABASE_URL:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/jidatasks?schema=public"
```
- Generate NextAuth secret:
```bash
pnpx auth secret
```
- Add the generated secret to `.env.local`:
```env
AUTH_SECRET="your-generated-secret"
```

### 4. Prisma Setup
```bash
pnpm prisma generate
pnpm prisma migrate deploy
```

### 5. Run Development Server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Prisma ORM
- PostgreSQL
- Tailwind CSS
- NextAuth.js