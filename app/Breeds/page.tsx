'use client';

import { MainLeft } from '../components/MainLeft/MainLeft';
import { RightHeader } from '../components/RightHeader/RightHeader';
import { SubHeader } from '../components/SubHeader/SubHeader';
import { GalleryBreeds } from '../components/GelleryBreeds/GalleryBreeds';
import { ModalHome } from '../components/ModalHome/ModalHome';
import { FilterBreed } from '../components/FilterBreed/FilterBreed';
import { FilterImageItems } from '../components/FilterImageItems/FilterImageItems';
import { UploadDataSortButtons } from '../components/UploadDataSortButtons/UploadDataSortButtons';
import { useState, useEffect} from 'react';
import { getBreeds}  from '../servises/cats-api-client';
import {useSelector} from 'react-redux'
import { selectUploadDataOrder, selectBreedFilter, selectImageCount } from '@/app/GlobalRedux/filterGallerySlice';
import { selectIsModalHomeOpen } from '@/app/GlobalRedux/filterGallerySlice';

const defaultSelectedBreed = 'All breeds';
const limitOptions = [5, 10, 15, 20];
const limitText = 'Limit: $';


export default function Home() {
    const tabname = "BREEDS";
    const [breeds, setBreeds] = useState([]);
    const breedFilter = useSelector(selectBreedFilter);
    const imageCount= useSelector(selectImageCount);
    const uploadDataSort = useSelector(selectUploadDataOrder);
    const isModalHomeOpen = useSelector(selectIsModalHomeOpen);


    useEffect(() => {
        getBreeds(imageCount,uploadDataSort).then((res) => {
            setBreeds(res);
        });
    }, [breedFilter, imageCount, uploadDataSort]);


    const filterBreedsById:any = (breedFilter: any, items: any) => {
        return  items.filter((item:any ) => item.id === breedFilter);
    }

    const apllyFilters = (items: any) => {
        breedFilter && (items = filterBreedsById(breedFilter, items));
        return items;
    }

    const filteredItems = apllyFilters(breeds)

    return (
        <main className="main">
            <div className="container right-blok">
                 <div className="main__row">
                    {MainLeft()}
                    <div className="main-right">
                        {RightHeader()}
                        <div className="right__content breeds">
                            <div className="content__header">
                                {SubHeader({tabname})}
                                <div className="filter__select filter__select-breeds">
                                    {FilterBreed(breeds, defaultSelectedBreed)}
                                </div>
                                <div className="filter__select filter__select--limit-img">
                                    {FilterImageItems({ text: limitText, options: limitOptions })}
                                </div>
                                {UploadDataSortButtons()}
                            </div>
                                {GalleryBreeds(filteredItems)}
                        </div>   
                    </div>
                    {isModalHomeOpen && ModalHome()}
                </div> 
            </div>
        </main>
    )
}