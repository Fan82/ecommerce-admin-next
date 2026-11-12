# 002. Keep the category filter in the URL

## Status
Accepted (2026-10-28)

## Context
The products page needs a category filter. Users refresh the page and share links.

## Decision
Read `category` from `searchParams` in the Server Component.

## Alternatives considered
- `useState` in a Client Component: the filter is lost on refresh.

## Consequences
- Good: the filter survives refresh and can be shared.
- Cost: every change triggers a new server request.