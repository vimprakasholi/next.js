This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Next.js

- React.js ful-stack web development framework.
- In addition to react that builds the UI, next.js also provides features like optimization, rendering, data fetching etc.
- Opinionated framework (file. folder structure conventions)

## Features

1. Routing - File based routing
2. API routes
3. Rendering: SSR, SSG, CSR
4. Data fetching/File system
5. Optimization: Imgae, file optimization
6. Styling

## React server component

- Architecture introduced by react team
- Types
  1. Server components
  2. Client components

### Server components

- All react components in Next.js are treated as server component.
- These components can perform server side tasks like data fetching, files read, database data fetching, async tasks
- Can not use react hooks, events, user interaction

### Client components

- Can use react hooks, events , user interaction
- Traditional react components
- Use the directive `use client` at the top of component file

## Routing

- File based routing
- All routes must be inside `/src/app` directory
- Every route must have `page.js` or `page.tsx` file
- page.js/page.tsx file must have a default export component

1. Simple routes

- Create a folder inside /src/app and page.js file
- Example: `/src/app/about/page.js`

2. Nested routes

- Create nested folder for nested routes
- Example: `/src/app/courses/web-design/page.js` | `/src/app/courses/api/node.js/page.js`

3. Dynamic routes

- Create a folder enclosed by []
- Example: `/src/app/products/[productId]/page.js`

4. Nested dynamic routes

- Example: `/src/app/products/[productId]/reviews/[reviewId]/page.js`

5. Catch all segments

- Example: `/src/app/blogs/[...slug]/page.js`

6. Route groups

- Example: `/src/app/(auth)/...`

7. Private folders

- Example: `/src/app/_components`

## Layouts

- UI component that is shared among dfferent pages
- `layout.js` or `layout.tsx`

## Nested layouts

- Example: `/src/app/products/layout.js`

## Files

- page.js
- layout.js
- not-found.js
- loading.js
- error.js // always client component

## Link

## Params and searchParams

- Params: dynamic route params => available on `page.js` & `layout.js`
- searchParams: query => available on `page.js`

## Additional packages

1. React hook form
2. React icons
3. React toastify
4. Tailwindcss/Flowbite
