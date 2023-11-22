

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

interface HeaderSearchState {
    text: string;
}

export const headerSearchSlice = createSlice({
    name: 'headerSearch',
    initialState: {
        text: 'test-test'
    },
    reducers:{
        textAdd: (state, action: PayloadAction<string>) =>{
            state.text = action.payload;
            console.log('New State:', state);
        }
    }
})

export const selectSearchText = (state: RootState) => state.textSearch.text;

export const { textAdd } = headerSearchSlice.actions
export default headerSearchSlice.reducer;