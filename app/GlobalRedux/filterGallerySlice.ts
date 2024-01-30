
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

interface HeaderSearchState {
    breed: string;
    imageCount: number;
    uploadDataSort: string;
}

export const filterGallerySlice= createSlice({
    name: 'headerSearch',
    initialState: {
        idBreed: '',
        nameBreed: '',
        imageCount: 5,
        uploadDateOrder: 'ASC',
        typeImage: 'jpg,png,gif',
    },

    reducers:{
        textAdd: (state, action: PayloadAction<string>) =>{
            state.nameBreed = action.payload;
            // console.log(action.payload);
        },
        reset: (state) => {
            state.idBreed = '';
            state.imageCount = 20;
            state.uploadDateOrder = '';
        },
        setBreedFilter:(state, action: PayloadAction<string>) =>{
            state.idBreed = action.payload;
        }, 
        imageCount:(state, action: PayloadAction<number>) =>{
            state.imageCount = action.payload;
        },
        uploadDateSort:(state, action: PayloadAction<string>) =>{
            state.uploadDateOrder = action.payload;
        },
        typeImageFilter:(state, action: PayloadAction<string>) =>{
            state.typeImage = action.payload;
        }
    }
})

export const selectBreedFilter = (state: RootState) => state.breed.idBreed;
export const selectImageCount = (state: RootState) => state.breed.imageCount;
export const selectUploadDataOrder = (state: RootState) => state.breed.uploadDateOrder;
export const selectTypeImage = (state: RootState) => state.breed.typeImage;
export const selectBreedFilterByName = (state: RootState) => state.breed.nameBreed;

export const { textAdd, reset, setBreedFilter, imageCount, uploadDateSort, typeImageFilter } = filterGallerySlice.actions
export default filterGallerySlice.reducer;