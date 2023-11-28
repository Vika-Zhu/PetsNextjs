

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

interface HeaderSearchState {
    breed: string;
    imageCount: number;
}

export const filterGallerySlice= createSlice({
    name: 'headerSearch',
    initialState: {
        breed: '',
        imageCount: 20,
    },
    reducers:{
        textAdd: (state, action: PayloadAction<string>) =>{
            state.breed = action.payload;
            console.log('New State:', state);
        },
        resetText: (state) => {
            state.breed = '';
        },
        setBreedFilter:(state, action: PayloadAction<string>) =>{
            state.breed = action.payload;
            console.log(action.payload)
        }, 
        imageCount:(state, action: PayloadAction<number>) =>{
            state.imageCount = action.payload;
        }

    }
})

export const selectBreedFilter = (state: RootState) => state.breed.breed;


export const { textAdd, resetText,setBreedFilter, imageCount } = filterGallerySlice.actions
export default filterGallerySlice.reducer;
