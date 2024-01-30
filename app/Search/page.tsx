'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader';
import{ModalHome} from '../components/ModalHome/ModalHome';
import { GalleryBreeds } from '../components/GelleryBreeds/GalleryBreeds';
import {useSelector} from 'react-redux'
import { getBreeds } from '../servises/cats-api-client';
import React, { useState, useEffect } from 'react';
import { selectUploadDataOrder, selectBreedFilter, selectImageCount, selectBreedFilterByName } from '@/app/GlobalRedux/filterGallerySlice';

// const galleryItems = [{id: 1, breed: 'Abyssinian', src:"img/Cat_gallery/1_cat_big.jpeg"},
//     {id: 2, breed: 'American Wirehair', src:"img/Cat_gallery/2_cat.jpeg" },
//     {id: 3, breed: 'American Wirehair', src:"img/Cat_gallery/3_cat_big.jpeg"},
// ]

export default function Home() {
    const nameBreed = useSelector(selectBreedFilterByName)
    const [breeds, setBreeds] = useState([]);

    const tabname = "SEARCH";

    const imageCount= useSelector(selectImageCount)
    const uploadDataSort = useSelector(selectUploadDataOrder)
    
    useEffect(() => {
        const queryParams = {
            imageCount: imageCount,
            uploadDataSort: uploadDataSort,
          };

        getBreeds(queryParams).then((res) => {
            setBreeds(res);
        });
    }, [nameBreed]);


    // const filteredBreeds = nameBreed
    //     ? breeds.filter((item:any) => item.name.toLowerCase().includes(nameBreed.toLowerCase()))
    //     : breeds;

    const filteredBreeds = nameBreed
    ? breeds.filter((item:any )=> {
        const breedNameLower = item.name.toLowerCase();
        const nameBreedLower = nameBreed.toLowerCase();
        return breedNameLower.startsWith(nameBreedLower);
      })
    : breeds;

    const formattedNameBreed = nameBreed.charAt(0).toUpperCase() + nameBreed.slice(1); 

     console.log(filteredBreeds)   
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
                    {ModalHome()} 
                </div>

            </div>
        </main>

    )
}
