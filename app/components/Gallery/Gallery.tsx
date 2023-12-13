'use client';

import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { selectalphaSort, selectBreedFilter, selectImageCount, selectTypeImage } from '@/app/GlobalRedux/filterGallerySlice';
import { textAdd, reset, imageCount, alphaSortFilter} from '@/app/GlobalRedux/filterGallerySlice';
import { getBreeds, getImages } from '../../servises/cats-api-client'


function galleryItem(item:any){
    return(  
         <div key = {item.id + 'galleryItem'} className = "gallery__item" > 
            <img src={item.url} alt=""/>
            <button className="gallery_btn-like svg"></button>
            <div className="item-btn btn">
                <a href="">{item.breed}</a>
            </div>
        </div>)
}

export function Gallery(){
    const breedFilter = useSelector(selectBreedFilter);
    const imageCount= useSelector(selectImageCount)
    const alphaSort = useSelector(selectalphaSort)
    const typeImage = useSelector(selectTypeImage)


    const [galleryItems, setGalleryItems] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset());
    }, []);

    useEffect(() => {
        getImages().then((res:any) => {
            setGalleryItems(res);
            console.log(res)
        })
    }, []);
      
    const filtereBreeds:any = (breedFilter: any, items: any) => {    
        return items.filter((item: any) => item.idBreeds === breedFilter)
    }

    const limitedItems:any = (imageCount:any, items:any) => {
        return items.slice(0, imageCount);
    }

    const sortedItems:any = (alphaSort:any,items:any ) => { 
        alphaSort === 'Asc'
        ? items.sort((a: any, b: any) => a.breed.localeCompare(b.breed))
        : alphaSort === 'Desc'
        ? items.sort((a: any, b: any) => b.breed.localeCompare(a.breed))
        : items;
    }

    const filterType:any  = (typeImage:any,items:any) => { 
        typeImage === 'Static'
        ? items = items.filter((item:any) => item.type === 'jpg')
        : typeImage === 'Animated'
        ? items = items.filter((item:any) => item.type === 'gif')
        : items;

        return items;
    }

    const apllyFilters = (items: any) => {
        breedFilter && (items = filtereBreeds(breedFilter, items));
        imageCount && (items = limitedItems(imageCount, items));
        alphaSort &&  sortedItems(alphaSort, items);
        typeImage && (items = filterType(typeImage, items));
        return items;
    }

    const filteredItems = apllyFilters(galleryItems)

    return(
        <div className="gallery breeds__gallery">
            <div className="gallery__items">
                {filteredItems.map(galleryItem)}
            </div>
        </div>
        );
};
    