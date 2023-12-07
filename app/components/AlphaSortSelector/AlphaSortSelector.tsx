'use client';

import {useDispatch, useSelector} from 'react-redux'
import { reset, alphaSortFilter } from '@/app/GlobalRedux/filterGallerySlice';
import { selectalphaSort } from '@/app/GlobalRedux/filterGallerySlice';

export function AlphaSortSelector (){
    const dispatch = useDispatch();
    const alphaSort = useSelector(selectalphaSort)

    const handleSort = (option: any) => {
        option === 'random'
        ? dispatch(reset())
        : dispatch(alphaSortFilter(option))
    }

    return(
        <div>
            {alphaSort ? <div className="filter_section-option">{alphaSort}</div> : <div className="filter_section-option">Random</div>}
            <div className="filter__list-wrapper">
                <ul className="filter__list-dropdown">
                    <li data-value="random" onClick={()=> handleSort('random')}>Random</li>
                    <li data-value="desc" onClick={()=> handleSort('Desc')}>Desc</li>
                    <li data-value="asc" onClick={()=> handleSort('Asc')}>Asc</li>
                </ul>
            </div>
        </div>
    )}