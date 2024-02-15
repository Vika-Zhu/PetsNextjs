'use client';

import {useDispatch, useSelector} from 'react-redux'
import { uploadDateSort } from '@/app/GlobalRedux/filterGallerySlice';
import { selectUploadDataOrder } from '@/app/GlobalRedux/filterGallerySlice';

export function UploadDataSortSelector (){
    const dispatch = useDispatch();
    const uploadDataSort = useSelector( selectUploadDataOrder)

    const handleSort = (option: any) => {
        dispatch(uploadDateSort(option))
    }

    return(
        <div>
            {uploadDataSort ? (
                <div className="filter_section-option">
                {uploadDataSort === 'DESC' ? 'Desc' : uploadDataSort === 'ASC' ? 'Asc' : 'Random'}
                </div>
            ) : (
             <div className="filter_section-option">Random</div>
            )}
            <div className="filter__list-wrapper">
                <ul className="filter__list-dropdown">
                    <li data-value="rand" onClick={()=> handleSort('RANDOM')}>Random</li>
                    <li data-value="desc" onClick={()=> handleSort('DESC')}>Desc</li>
                    <li data-value="asc" onClick={()=> handleSort('ASC')}>Asc</li>
                </ul>
            </div>
        </div>
    )}