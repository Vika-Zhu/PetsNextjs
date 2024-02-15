'use client';

import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux'
import { reset} from '@/app/GlobalRedux/filterGallerySlice';


function galleryItem(item:any){
    return(  
         <div key = {item.id + 'galleryItem'} className = "gallery__item" > 
            <img src={item.image.url} alt=""/>
            <Link href={`/InfoBreeds?breed_id=${item.id}`}>
                <div className="item-btn btn">
                    <div>{item.name}</div>
                </div>
            </Link>
        </div>)
}

export function GalleryBreeds(galleryItems:any){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset());
    }, []);

    return(
         galleryItems.length ? 
            <div className="gallery breeds__gallery">
                <div className="gallery__items">
                    {galleryItems.map(galleryItem)}
                </div>
             </div>
         : 
            <div className="lds-roller">
                 <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
    );
};
    