'use client';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { reset } from '@/app/GlobalRedux/filterGallerySlice';


function galleryItem(item:any, handleFavoriteToggle:any){
    return(  
        <div key = {item.id + 'galleryItem'} className = "gallery__item" > 
            <img src={item.url} alt=""/>
            <button className={`gallery_btn-favorite svg ${item.isFavorite ? 'delete-favourite' : ''}`}onClick={() => handleFavoriteToggle (item.id, item.isFavorite)}></button>
        </div>
    )
}

export function Gallery(galleryItems:any, handleFavoriteToggle: any){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset());
    }, []);


    return(
        galleryItems.length ? 
            <div className="gallery breeds__gallery">
                <div className="gallery__items">
                    {galleryItems.map((item:any) => galleryItem(item, handleFavoriteToggle))}
                </div>
            </div>
            : 
            <div className="lds-roller">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>    
    );
};
    