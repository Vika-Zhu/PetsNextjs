'use client';

import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { textAdd, reset, imageCount, uploadDateSort} from '@/app/GlobalRedux/filterGallerySlice';
import { saveFavorites, deleteFavorite } from '@/app/servises/cats-api-client';



function galleryItem(item:any, onDeleteFavorite: any){
    return(  
         <div key = {item.id + 'galleryItem'} className = "gallery__item like-dislike" > 
            <img src={item.image.url} alt=""/>
        </div>)
}


export function GalleryForLikesandDislikes(galleryItems:any){

    return(
         galleryItems.length ? 
            <div className="gallery like-dislike__gallery">
                <div className="gallery__items">
                    {galleryItems.map(galleryItem)}
                </div>
             </div>
         : 
         <div className="info__no-found"> No item found </div>
 );
};
    
