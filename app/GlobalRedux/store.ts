

import { configureStore } from "@reduxjs/toolkit";
import headerSearchSlice from "./headerSearchSlice";

export const store = configureStore({
    reducer: {
        textSearch: headerSearchSlice
        
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



export default store;