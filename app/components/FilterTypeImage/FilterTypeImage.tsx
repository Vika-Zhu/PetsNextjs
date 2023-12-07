
'use client';

import {useDispatch, useSelector} from 'react-redux'
import { reset, filterType } from '@/app/GlobalRedux/filterGallerySlice';
import { selectTypeImage } from '@/app/GlobalRedux/filterGallerySlice';

export function FilterTypeImage(){
    const dispatch = useDispatch();
    const typeImage = useSelector(selectTypeImage)

    const handleSort = (option: any) => {
        option === 'All'
        ? dispatch(reset()) && dispatch(filterType(option))
        : dispatch(filterType(option))
    }

    return(
        <div>
            {typeImage ? <div className="filter_section-option">{typeImage}</div> : <div className="filter_section-option">Static</div>}
            <div className="filter__list-wrapper">
                <ul className="filter__list-dropdown">
                    <li onClick={()=> handleSort('All')}>All</li>
                    <li onClick={()=> handleSort('Static')}>Static</li>
                    <li onClick={()=> handleSort('Animated')}>Animated</li>
                </ul>
            </div>
        </div>
   )
}