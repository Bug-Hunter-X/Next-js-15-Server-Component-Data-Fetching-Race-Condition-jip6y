# Next.js 15 Server Component Data Fetching Race Condition

This repository demonstrates a potential race condition in Next.js 15 server components when dealing with nested data fetching.  The problem arises when a server component fetches data, and a nested component also attempts to fetch data that depends on the initial fetch's result. If the initial fetch is slow, the nested component might try to access data before it's available, leading to errors.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the potential error in the browser console or the unexpected behavior during rendering.

## Solution

The solution involves using promises and ensuring that data is available before the nested component attempts to access it.