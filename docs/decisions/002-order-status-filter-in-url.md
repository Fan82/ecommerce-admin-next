# 002. Keep the order status filter in the URL

## Status
Accepted (2026-11-18)

## Context
`/dashboard/orders` needs a status filter. Admins refresh the page and send links to teammates in other offices, so the filter should not disappear. A value in the URL is always a string, and anyone can type `?status=abc`.

## Decision
1. `app/dashboard/orders/page.tsx` (a Server Component) reads `status` from `searchParams`.
2. `isOrderStatus` in `lib/orderUtils.ts` checks the value against `ORDER_STATUSES`.
3. An invalid value means no filter, so the page shows all orders.
4. `components/OrderStatusFilter.tsx` changes the filter with `Link`, so it needs no `"use client"`.

## Alternatives considered
- Keep the filter in `useState` in a Client Component: the filter is lost on refresh and cannot be shared as a link, and the whole list would need to be a Client Component.
- Cast with `status as OrderStatus`: tsc stops complaining, but `?status=abc` still reaches the API and the table looks empty, as if there were no orders.
- Show a 404 page for an invalid status: strict, but a small typo in a shared link would block the whole page.

## Consequences
- Good: the filter survives refresh and works as a shared link.
- Good: invalid values are checked at runtime, and tsc knows the type after the check.
- Good: the filter links stay on the server, so the browser downloads less JavaScript.
- Cost: every filter change is a new server request.
- Cost: an invalid value is ignored without a message, so the user may not notice the typo.