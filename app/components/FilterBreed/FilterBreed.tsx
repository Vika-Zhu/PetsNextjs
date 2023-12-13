'use client';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { setBreedFilter } from '@/app/GlobalRedux/filterGallerySlice';
import { selectBreedFilter } from '@/app/GlobalRedux/filterGallerySlice';
import { reset } from '@/app/GlobalRedux/filterGallerySlice';


export function FilterBreed(breeds:any, defaultSelectedBreed:any){
    const dispatch = useDispatch();
    const breedFilter = useSelector(selectBreedFilter);

    let clickHandler = (breed:any) =>{
        dispatch(setBreedFilter(breed));
    }

    const handleDefaultSelectedBreed = () => {
        dispatch(reset())
    };

    return(
        <div>
            {breedFilter ? <div className="filter_section-option"> {breeds.find((item:any) => item.id === breedFilter)?.name}</div> : <div className="filter_section-option">{defaultSelectedBreed}</div>}
            <div className="filter__list-wrapper">
                <ul className="filter__list-dropdown">
                <li onClick={handleDefaultSelectedBreed}>{defaultSelectedBreed}</li>
                {breeds.map((item: any) => (
                    <li 
                    key={item.name}
                    className="filter__item"
                    onClick ={()=>{clickHandler(item.id)}}>{item.name}</li>
                ))}
                </ul> 
            </div>
        </div>
    )
}
