'use client';

import { useRouter } from 'next/navigation'

export function SubHeader(props:any){
    const router = useRouter();

    return(
    <div className="sub-header">
        <div className="sub-header__btn sub-header__btn-back svg" onClick={() => router.back()}>
        </div>
        <div className={`sub-header__badge ${props.tabname === 'BREEDS' ? "badge-breeds" : ""}`}>
            {props.text || props.tabname}
        </div>
    </div>
    )
}
