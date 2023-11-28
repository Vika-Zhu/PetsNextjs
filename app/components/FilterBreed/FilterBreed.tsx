'use client';

import React, { useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { selectBreedFilter } from '@/app/GlobalRedux/filterGallerySlice';
import { setBreedFilter } from '@/app/GlobalRedux/filterGallerySlice';

export function FilterBreed(breed:any){
    const liRef: React.MutableRefObject<HTMLLIElement | null>[] = breed.map(() => useRef(null));
    const dispatch = useDispatch();

    let clickHandler = (event:any) =>{
        event.preventDefault() 
        const selectedBreed = event.currentTarget.getAttribute('data-key') || '';
        dispatch(setBreedFilter(selectedBreed));
        console.log('Data Key:', selectedBreed);
    }


    return(
        <div className="filter__list-wrapper">
        <ul className="filter__list-dropdown">
          {breed.map((item: any) => (
            <li 
            key={item.breed}
            data-key={item.breed} 
            className="filter__item"
            onClick={clickHandler}> {item.breed} </li>
          ))}
        </ul>
      </div>
    )
}


// return(
//     <div className="gallery breeds__gallery">
//         <div className="gallery__items">
//              {filteredItems.map(galleryItem)}
//         </div>

//     </div>
//     );