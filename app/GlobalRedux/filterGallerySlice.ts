

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

interface HeaderSearchState {
    breed: string;
    imageCount: number;
    alphaSort: string;
}

export const filterGallerySlice= createSlice({
    name: 'headerSearch',
    initialState: {
        idBreed: '',
        imageCount: 20,
        alphaSort: '',
        typeImage: 'All',
    },

    reducers:{
        textAdd: (state, action: PayloadAction<string>) =>{
            state.idBreed = action.payload;
            console.log('New State:', state);
        },
        reset: (state) => {
            state.idBreed = '';
            state.imageCount = 20;
            state.alphaSort = ''
        },
        setBreedFilter:(state, action: PayloadAction<string>) =>{
            state.idBreed = action.payload;
        }, 
        imageCount:(state, action: PayloadAction<number>) =>{
            state.imageCount = action.payload;
        },
        alphaSortFilter:(state, action: PayloadAction<string>) =>{
            state.alphaSort = action.payload;
            console.log(action.payload)
        },
        filterType:(state, action: PayloadAction<string>) =>{
            state.typeImage = action.payload;
            console.log(action.payload)
        }
    }
})

export const selectBreedFilter = (state: RootState) => state.breed.idBreed;
export const selectImageCount = (state: RootState) => state.breed.imageCount;
export const selectalphaSort = (state: RootState) => state.breed.alphaSort;
export const selectTypeImage = (state: RootState) => state.breed.typeImage;

export const { textAdd, reset,setBreedFilter, imageCount, alphaSortFilter, filterType } = filterGallerySlice.actions
export default filterGallerySlice.reducer;
