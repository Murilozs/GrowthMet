# Growth Dashboard

A modern analytics dashboard built with Next.js and Tailwind CSS v4, featuring responsive design and interactive charts.

## Features

- **Dashboard** - Revenue metrics and overview
- **Analytics** - Channel performance with bar charts and detailed metrics table
- **Campaigns** - Campaign management with filtering
- **Leads** - Lead tracking with pagination
- **Settings** - Application settings

## Tech Stack

- [Next.js 16](https://nextjs.org) - React framework
- [Tailwind CSS v4](https://tailwindcss.com) - Styling
- [Recharts](https://recharts.org) - Interactive charts
- [TanStack Query](https://tanstack.com/query) - Data fetching
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
src/
├── app/
│   ├── analytics/     # Analytics page
│   ├── campaigns/     # Campaigns page
│   ├── dashboard/     # Dashboard page
│   ├── leads/         # Leads page
│   ├── api/          # API routes
│   └── layout.tsx     # Root layout with sidebar
├── components/        # Shared components
├── services/         # Data services
└── types/           # TypeScript types
```
