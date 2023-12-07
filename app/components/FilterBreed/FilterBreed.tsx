'use client';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { setBreedFilter } from '@/app/GlobalRedux/filterGallerySlice';
import { selectBreedFilter } from '@/app/GlobalRedux/filterGallerySlice';
import { reset } from '@/app/GlobalRedux/filterGallerySlice';


export function FilterBreed({breed, defaultSelectedBreed}:any){
    const dispatch = useDispatch();
    const breedFilter = useSelector(selectBreedFilter);

    let clickHandler = (breed:any) =>{
        dispatch(setBreedFilter(breed));
        console.log(breed);
    }

    const handleDefaultSelectedBreed = () => {
        dispatch(reset())
        console.log('Default Selected Breed clicked');
    };

    return(
        <div>
            {breedFilter ? <div className="filter_section-option"> {breed.find((item:any) => item.id === breedFilter)?.breed}</div> : <div className="filter_section-option">{defaultSelectedBreed}</div>}
            <div className="filter__list-wrapper">
                <ul className="filter__list-dropdown">
                <li onClick={handleDefaultSelectedBreed}>{defaultSelectedBreed}</li>
                {breed.map((item: any) => (
                    <li 
                    key={item.breed}
                    className="filter__item"
                    onClick ={()=>{clickHandler(item.id)}}>{item.breed}</li>
                ))}
                </ul> 
            </div>
        </div>
    )
}
