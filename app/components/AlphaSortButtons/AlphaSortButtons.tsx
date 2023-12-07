'use client';

import {useSelector, useDispatch} from 'react-redux'
import { selectalphaSort } from '@/app/GlobalRedux/filterGallerySlice';
import { reset, alphaSortFilter } from '@/app/GlobalRedux/filterGallerySlice';

export function AlphaSortButtons (){
    const dispatch = useDispatch();

    const handleSort = (option: any) => {
        dispatch(alphaSortFilter(option))
    }

    return(
        <div className='filter__buttons'>
            <button className="filter__btn-sort svg" onClick={()=> handleSort('asc')}></button>
            <button className="filter__btn-sort svg" onClick={()=> handleSort('desc')}></button>
        </div>
    )
}

