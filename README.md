# React-Redux


## Technologies that I used
-   Tailwindcss
-   Vite
-   Github Pages
-   ReactJS
-   Redux


## Notes
When creating redux. There step that you must follow.
1. Install `@reduxjs/toolkit` and `react-redux` via `npm`
2. You must create a `store` first, and later `slice`
    -   a. configureStore: `src/state/store.ts`
    -   b. createSlice: `src/state/count.slice.ts`
    -   c. export your slice actions, reducers
    -   d. provide store
    -   e. consume it with `useSelector` and `dispatch` function
