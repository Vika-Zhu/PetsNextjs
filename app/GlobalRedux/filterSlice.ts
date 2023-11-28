

// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from './store';

// interface HeaderSearchState {
//     breed: string;
//     imageCount: number;
// }

// export const filterSlice = createSlice({
//     name: 'filterOptions',
//     initialState: {
//         breed: '',
//         imageCount: 20,
//     },
//     reducers:{
//         setBreedFilter:(state, action: PayloadAction<string>) =>{
//             state.breed = action.payload;
//             console.log(action.payload)
//         },
//         imageCount:(state, action: PayloadAction<number>) =>{
//             state.imageCount = action.payload;
//         }
//     }
// })

// export const selectBreedFilter = (state: RootState) => state.filterOptions.breed;

// export const { setBreedFilter, imageCount } = filterSlice.actions
// export default filterSlice.reducer;