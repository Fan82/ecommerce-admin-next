# Architecture

## Summary
ecommerce-admin-next is built in four layers. Routing comes from folders in app/: each folder name becomes one URL segment, and only a file named page.tsx turns a folder into a page. On Day 92, I moved product management under /dashboard, so app/dashboard/products/page.tsx and app/dashboard/products/new/page.tsx share the dashboard layout, which sends visitors without a session to /login. For data, Server Components call getProducts() from lib/mockProducts.ts and pass the list down as props. For state, hooks/useOptimisticFeatured.ts keeps products, errorMessage, and pendingIds in useState inside one Client Component. For error handling, lib/errors.ts turns any thrown value into a readable message, and ErrorNotice shows it on screen. When the featured toggle I built on Day 96 fails, only that product rolls back, and the rest of the list stays as it is.

## Routing
- `app/login/page.tsx`: public login page; it renders `LoginClient`, which passes `handleLogin` to `LoginForm` through `onSubmit`.
- `app/dashboard/layout.tsx`: wraps every `/dashboard/*` page and sends visitors without a session to `/login`.
- `app/dashboard/products/page.tsx`: product list for admins; `app/dashboard/products/new/page.tsx` adds a product.
- `lib/routes.ts`: one list of all routes, with the rendering type and whether login is required.

## Data
- `types/product.ts`: the `Product` type (`id: number`, `featured: boolean`).
- `lib/mockProducts.ts`: `getProducts()` returns the product list; Server Components call it with `await`.
- `lib/api/products.ts`: mock write API (`updateFeaturedApi`, `deleteProductApi`) with a 500 ms delay and `FAIL_IDS` for planned failures.
- `.env.local`: secrets such as `ADMIN_PASSWORD`; only `.env.example` is committed.

## State
- Server Components keep no state; they fetch data and pass it down as props (`initialProducts`).
- `components/ProductListClient.tsx`: the only `"use client"` boundary on the products page.
- `hooks/useOptimisticFeatured.ts`: keeps `products`, `errorMessage`, and `pendingIds` in `useState`.

## Error Handling
- `lib/errors.ts`: `getUserMessage(error)` turns any thrown value into a message users can read.
- `components/ErrorNotice.tsx`: shows that message on screen.
- `app/dashboard/products/loading.tsx` and `error.tsx`: loading and error screens for the route.
- A failed optimistic update rolls back only one product (see `docs/decisions/001-optimistic-featured-toggle.md`).