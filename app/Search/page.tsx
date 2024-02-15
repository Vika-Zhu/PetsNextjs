'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader/SubHeader';
import{ModalHome} from '../components/ModalHome/ModalHome';
import { GalleryBreeds } from '../components/GelleryBreeds/GalleryBreeds';
import {useSelector} from 'react-redux'
import { getBreeds } from '../servises/cats-api-client';
import React, { useState, useEffect } from 'react';
import { selectUploadDataOrder, selectImageCount, selectBreedFilterByName, selectIsModalHomeOpen } from '@/app/GlobalRedux/filterGallerySlice';


export default function Home() {
    const tabname = "SEARCH";
    const [breeds, setBreeds] = useState([]);
    const nameBreed = useSelector(selectBreedFilterByName);
    const imageCount= useSelector(selectImageCount);
    const uploadDataSort = useSelector(selectUploadDataOrder);
    const isModalHomeOpen = useSelector(selectIsModalHomeOpen);
    
    useEffect(() => {
        getBreeds(imageCount, uploadDataSort).then((res) => {
            setBreeds(res);
        });
    }, [nameBreed]);

    const filteredBreeds = nameBreed
    ? breeds.filter((item:any )=> {
        const breedNameLower = item.name.toLowerCase();
        const nameBreedLower = nameBreed.toLowerCase();
        return breedNameLower.startsWith(nameBreedLower);
      })
    : breeds;

    const formattedNameBreed = nameBreed.charAt(0).toUpperCase() + nameBreed.slice(1); 

    return (
        <main className="main">
            <div className="container right-blok">
                <div className="main__row">
                    {MainLeft()}
                    <div className="main-right">
                        {RightHeader()}
                        <div className="right__content">
                            <div className="content__header">
                            {SubHeader({tabname})}
                            </div>
                            <p className="content__description">Search results for: <span className="name__breed">{formattedNameBreed}</span></p>
                            {GalleryBreeds(filteredBreeds)}
                        </div>
                    </div>
                    {isModalHomeOpen && ModalHome()} 
                </div>
            </div>
        </main>
    )
}
