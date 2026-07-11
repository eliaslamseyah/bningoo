# Bningoo

B2B office food platform — Generation 2.

## Tech Stack

- **Monorepo**: Turborepo
- **Package Manager**: pnpm
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Language**: TypeScript (strict mode)

## Structure

```
apps/
  customer/        Customer-facing ordering site
  dashboard/       Admin / operations panel
  api/             API routes and backend logic
  kitchen/         Kitchen display system
packages/
  ui/              Shared UI components (shadcn/ui)
  types/           Shared TypeScript types/interfaces
  utils/           Shared utility functions
```

## Getting Started

```bash
pnpm install
pnpm dev
```

- `apps/customer` → http://localhost:3000
- `apps/dashboard` → http://localhost:3001
- `apps/api` → http://localhost:3002
