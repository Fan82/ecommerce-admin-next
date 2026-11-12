# 001. Optimistic update for the featured toggle

## Status
Accepted (2026-11-10)

## Context
On `/dashboard/products`, admins switch a product's `featured` flag. The API (`lib/api/products.ts`, a mock for now) takes about 500 ms and can fail. If the screen waits for the API, every click feels slow, and admins often toggle several products in a row. The change is low risk: it rarely fails and is easy to undo.

## Decision
Use an optimistic update in `hooks/useOptimisticFeatured.ts`:
1. Save the current product as `previous`.
2. Flip `featured` on screen right away.
3. Call `updateFeaturedApi(id, next)`.
4. If it fails, restore only that product and show the message with `ErrorNotice`.
5. Keep the id in `pendingIds` until the request ends, and disable that toggle so it cannot be clicked twice.

## Alternatives considered
- Wait for the API, then update the screen: always correct, but every click has a 500 ms delay with no feedback.
- Put the whole list into a loading state: clear, but it blocks every other product while one request runs.
- Refetch the whole list after each change: always matches the server, but adds one request per click and the list flickers.

## Consequences
- Good: the toggle responds instantly, and other products stay usable.
- Good: a failure rolls back one product, not the whole list.
- Cost: each optimistic action needs its own rollback code (`previous`, `catch`, `finally`).
- Cost: for about 500 ms the screen can show a value the server has not saved yet.
- Limitation: the mock API does not store data, so a page refresh resets every toggle.