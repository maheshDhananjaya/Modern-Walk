# Next.js E-commerce Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
It includes **Zustand** for state management, **React Query** for API fetching, and **shadcn/ui** for UI components.

---

## Features

- Landing page with category tiles  
- Product listing page with filtering, sorting, and pagination  
- Product detail page (PDP) with SSR for SEO  
- Shopping cart with localStorage persistence  
- Related products and order summary  
- Tailwind CSS + shadcn/ui for styling  
- API fetching using React Query  

---

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```
### 2. Environment Variables
- Create a .env.local file at the root of your project
```
NEXT_PUBLIC_API_BASE_URL=https://fakestoreapi.com
```
- **Even though this is public endpoint, i add to env and gitignore**

### 3 .Run the Development Serve

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
- Open http://localhost:3000
 in your browser to see the app



