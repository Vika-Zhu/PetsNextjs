'use client';

import Link from 'next/link'
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { textAdd } from '../../GlobalRedux/filterGallerySlice';

export function RightHeader(){
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event:any) => {
        const newText = inputRef.current?.value || '';
        dispatch(textAdd(newText));
    };

    return ( 
            <div className="right-header header">
                <div className="header__burger">
                    <span></span>
                </div>
                <div className="header_search">
                    <div  className="search-form">
                        <input ref={inputRef} className="search-input"  type="text" placeholder="Search for breeds by name"  onInput={handleInputChange} />
                        <Link href="/Search">
                            <div className="search-btn"></div>
                        </Link>
                    </div>
                </div>
                <div className="header_links">
                    <Link href="/Like">
                        <div className="link link-likes svg"></div>
                    </Link>
                    <Link href="/Favourites">
                        <div className="link link-favourites svg"></div>
                    </Link>
                    <Link href="/Dislikes">
                        <div className="link link-dislikes svg"></div>
                    </Link>
                </div>
            </div>
)}