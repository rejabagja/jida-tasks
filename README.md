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
- Create a new database named `jidatasks` (optional - app will create it automatically)
- Create `.env` file and insert DATABASE_URL variable:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/jidatasks?schema=public"
```

- Generate NextAuth secret:

  This step will generate auth secret and automatically added into .env.local

```bash
pnpx auth secret
```

### 4. Prisma Setup

```bash
pnpx prisma generate
pnpx prisma migrate deploy
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
