

import { configureStore } from "@reduxjs/toolkit";
import filterGallerySlice from "./filterGallerySlice";


export const store = configureStore({
    reducer: {
        breed: filterGallerySlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;