

import { configureStore } from "@reduxjs/toolkit";
import filterGallerySlice from "./filterGallerySlice";
// import filterSlice from "./filterSlice";

export const store = configureStore({
    reducer: {
        breed: filterGallerySlice,
        // filterOptions: filterSlice
        
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;