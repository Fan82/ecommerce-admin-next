This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Verification

1. **Type Check**
   - **Do:** Run `npx tsc --noEmit`.
   - **Expected:** TypeScript reports no type errors.

2. **Production Build**
   - **Do:** Run `npm run build`.
   - **Expected:** The Next.js production build completes successfully.

3. **Toggle Product ID 1 (Success)**
   - **Do:** Start the application and toggle the featured status of product ID `1`.
   - **Expected:** The featured status updates successfully and remains in the updated state.

4. **Toggle Product ID 2 (Failure and Rollback)**
   - **Do:** Toggle the featured status of product ID `2`.
   - **Expected:** The UI updates optimistically at first. After the API request fails, the featured status rolls back to its original state and an error message is displayed.

5. **Delete Product (Success)**
   - **Do:** Delete product ID `1`.
   - **Expected:** The product is successfully removed from the list.