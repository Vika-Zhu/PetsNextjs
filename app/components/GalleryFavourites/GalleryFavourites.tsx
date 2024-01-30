'use client';

import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { textAdd, reset, imageCount, uploadDateSort} from '@/app/GlobalRedux/filterGallerySlice';
import { saveFavorites, deleteFavorite } from '@/app/servises/cats-api-client';



function galleryItem(item:any, onDeleteFavorite: any){
   
    // const handleDelete = () => {
    //     onDelete(item.image_id);
    // };
   

    return(  
         <div key = {item.id + 'galleryItem'} className = "gallery__item" > 
            <img src={item.image.url} alt=""/>
            <button className="gallery_btn-favorite delete-favourite svg" onClick={() => onDeleteFavorite(item.id)}></button>
        </div>)
}


export function GalleryFavorites(galleryItems:any, onDeleteFavorite:any){

    // const handleDeleteFromGallery = (favoriteId:any) => {
    //     onDeleteFavorite(favoriteId);  
    // };

    return(
         galleryItems.length ? 
            <div className="gallery favorites__gallery">
                <div className="gallery__items">
                {galleryItems.map((item:any) => galleryItem(item, onDeleteFavorite))}
                </div>
             </div>
         : 
            <div className="lds-roller roller-favorites">
                 <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
       
 );
};
    
