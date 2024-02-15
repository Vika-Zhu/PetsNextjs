'use client';

import { useDispatch} from 'react-redux'
import { uploadDateSort} from '@/app/GlobalRedux/filterGallerySlice';

export function UploadDataSortButtons(){
    const dispatch = useDispatch();

    const handleSort = (option: any) => {
        dispatch(uploadDateSort(option))
    }
    
    return(
        <div className='filter__buttons'>
            <button className="filter__btn-sort svg" onClick={()=> handleSort('Asc')}></button>
            <button className="filter__btn-sort svg" onClick={()=> handleSort('Desc')}></button>
        </div>
    )
}

