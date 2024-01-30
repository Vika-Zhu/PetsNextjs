'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux'
import { selectUploadDataOrder, selectBreedFilter, selectImageCount, selectTypeImage } from '@/app/GlobalRedux/filterGallerySlice';
import { reset, imageCount, uploadDateSort} from '@/app/GlobalRedux/filterGallerySlice';




export function ButtonUpdateGallery(onClick:any){

    const handlerButtons = () => {
        onClick()
    };


    return(
        <button onClick={handlerButtons} className="filter-btn filter-section"></button>
    );
};
    