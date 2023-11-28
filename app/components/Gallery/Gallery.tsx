'use client';

import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { selectBreedFilter, textAdd, resetText} from '@/app/GlobalRedux/filterGallerySlice';



function galleryItem(item:any){
    
    return(  
         <div key = {item.id + 'galleryItem'} className = "gallery__item" > 
            <img src={item.src} alt=""/>
            <button className="gallery_btn-like svg"></button>
            <div className="item-btn btn">
                <a href="">{item.breed}</a>
            </div>
        </div>)
}


export function Gallery( galleryItems :any){
   
    const breedFilter = useSelector(selectBreedFilter);

    const filteredItems = breedFilter !== ''
    ? galleryItems.filter((item: any) => {
        return (
            item.breed.toLowerCase().includes(breedFilter.toLowerCase())
        )
    })
   : galleryItems;
  

//    const filteredItems = galleryItems.filter((item: any) => {
//        return (
//             (breedFilter !== '' || item.breed.toLowerCase().includes(breedFilter.toLowerCase())) &&
//             (selectedBreed === 'All Breeds' || item.breed === selectedBreed)
//        )
//    });

    return(
        <div className="gallery breeds__gallery">
            <div className="gallery__items">
                 {filteredItems.map(galleryItem)}
                 
            </div>

        </div>
        );
};


