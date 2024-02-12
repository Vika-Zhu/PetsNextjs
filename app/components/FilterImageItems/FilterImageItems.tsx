'use client';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { imageCount } from '@/app/GlobalRedux/filterGallerySlice';
import { selectImageCount } from '@/app/GlobalRedux/filterGallerySlice'; 


export function FilterImageItems({ options, text }:any){
    const dispatch = useDispatch();
    const selectedOption = useSelector(selectImageCount)

    let clickHandler = (count:any) =>{
        dispatch(imageCount(count));
    }

    const optionText =( option:any, text:any) => {
        return text.replace('$', option);
    } 

    return (
        <div>
            <div className="filter_section-option" >{optionText(selectedOption, text)}</div>
            <div className="filter__list-wrapper">
                <ul className="filter__list-dropdown">
                    {options.map((option: any) => (
                        <li key={option} className="filter__item" onClick= {()=>{clickHandler(option)}}>
                        {optionText(option, text)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

