'use client';

import Link from 'next/link'
import {useSelector, useDispatch} from 'react-redux'
import { selectSearchText, textAdd } from '@/app/GlobalRedux/headerSearchSlice';


export function SubHeader(props:any){
    const texttest = useSelector(selectSearchText)


    return(
    <div className="sub-header">
        <div>{texttest} </div>
        <Link href="/Home" className="sub-header__btn sub-header__btn-back svg">
        </Link>
        <div className="sub-header__badge" >{props.tabname}</div>
    </div>
    )
}