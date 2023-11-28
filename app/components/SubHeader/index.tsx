'use client';

import Link from 'next/link' 

export function SubHeader(props:any){

    return(
    <div className="sub-header">
        <Link href="/Home" className="sub-header__btn sub-header__btn-back svg">
        </Link>
        <div className="sub-header__badge" >{props.tabname}</div>
    </div>
    )
}