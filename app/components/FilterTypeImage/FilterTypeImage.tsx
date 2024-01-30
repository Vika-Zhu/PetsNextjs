
'use client';

import {useDispatch, useSelector} from 'react-redux'
import { reset, typeImageFilter  } from '@/app/GlobalRedux/filterGallerySlice';
import { selectTypeImage } from '@/app/GlobalRedux/filterGallerySlice';

export function FilterTypeImage(){
    const dispatch = useDispatch();
    const typeImage = useSelector(selectTypeImage)

    const handleSort = (option: any) => {
        dispatch(typeImageFilter (option))
    }

    return(
        <div>
            {typeImage ? <div className="filter_section-option">{typeImage === 'jpg,png,gif' ? 'All' : typeImage === 'jpg,png' ? 'Static' : 'Animated'}</div> : <div className="filter_section-option">All</div>}
            <div className="filter__list-wrapper">
                <ul className="filter__list-dropdown">
                    <li onClick={()=> handleSort('jpg,png,gif')}>All</li>
                    <li onClick={()=> handleSort('jpg,png')}>Static</li>
                    <li onClick={()=> handleSort('gif')}>Animated</li>
                </ul>
            </div>
        </div>
   )
}