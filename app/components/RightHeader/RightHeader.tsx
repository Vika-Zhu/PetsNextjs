'use client';

import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { textAdd } from '../../GlobalRedux/filterGallerySlice';

export function RightHeader(){
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event:any) => {
        const newText = inputRef.current?.value || '';
        dispatch(textAdd(newText));

        console.log(newText);
      };



    return ( <div className="right-header header">
    <div className="header__burger">
        <span></span>
    </div>
    <div className="header_search">
        <div  className="search-form">
            <input ref={inputRef} className="search-input"  type="text" placeholder="Search for breeds by name"  onInput={handleInputChange} />
            <button className="search-btn"></button>
        </div>
    </div>
    <div className="header_links">
        <a className="link link-likes svg" href=""></a>
        <a className="link link-favourites svg" href=""></a>
        <a className="link link-dislikes svg" href=""></a>
    </div>
</div>)
}