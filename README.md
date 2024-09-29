## Installation and Testing

1. `npm install`
2. `npm run dev`
3. Navigate to `http://localhost:3000/`

## Framework and Libraries

Framework: Next.js

- I can encapsulate both fontend and backend code in Next.js
- I am experienced in Next.js

Component/CSS library: Chakra-ui

- An out of the box component library to save me time on component styling and creation
- I am experienced with Chakra-ui

## The Code

The code lives in `src/app` with `page.tsx` being the landing page.

There are two folders used to organise the code. /categories and /products inside both folders there is `data.json` acting as the DB, `types.ts`, /components and /api.

I didn't implement error handling and abstracting JSON file handling due to time constraints.

I'm using the `fetch()` API in `useEffect()`, this is not the best approach. I need to integrate library to handle API requests so I can handle loading state, caching data and errors effectively.
