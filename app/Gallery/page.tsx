'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader/';
import{Gallery} from '../components/Gallery/Gallery';
import{ModalUpload} from '../components/ModalUpload/ModalUpload';
import { FilterBreed } from '../components/FilterBreed/FilterBreed';
import { FilterImageItems } from '../components/FilterImageItems/FilterImageItems';
import{ModalHome} from '../components/ModalHome/ModalHome';
import { AlphaSortSelector } from '../components/AlphaSortSelector/AlphaSortSelector';
import { FilterTypeImage } from '../components/FilterTypeImage/FilterTypeImage';
import { useState, useEffect} from 'react';
import { getBreeds } from '../servises/cats-api-client';


const galleryItems = [{id: 1, idBreeds: 1, breed: 'Abyssinian', src:"img/Cat_gallery/1_cat_big.jpeg", type: 'jpg'},
    {id: 2,  idBreeds: 6, breed: 'American Wirehair', src:"img/Cat_gallery/2_cat.jpeg", type: 'gif' },
    {id: 3,  idBreeds: 6, breed: 'American Wirehair', src:"img/Cat_gallery/3_cat_big.jpeg", type: 'jpg'},
    {id: 4,  idBreeds: 6, breed: 'American Wirehair', src:"img/Cat_gallery/5_cat_big.jpeg", type: 'gif'},
    {id: 5,  idBreeds: 1, breed: 'Abyssinian', src:"img/Cat_gallery/4_cat.jpeg", type: 'gif'},
    {id: 6,  idBreeds: 7, breed: 'Bengal', src:"img/Cat_gallery/6_cat.jpeg", type: 'gif'},
    {id: 7,  idBreeds: 4, breed: 'American Curl', src:"img/Cat_gallery/7_cat.jpeg", type: 'gif'},
    {id: 8,  idBreeds: 7, breed: 'Bengal', src:"img/Cat_gallery/8_cat_big.jpeg", type: 'gif'},
    {id: 9,  idBreeds: 4, breed: 'American Curl', src:"img/Cat_gallery/9_cat.jpeg", type: 'jpg'},
    {id: 10, idBreeds: 4,  breed: 'American Curl', src:"img/Cat_gallery/10_cat.jpeg", type: 'jpg'},
    {id: 11, idBreeds: 1,  breed: 'Abyssinian', src:"img/Cat_gallery/1_cat_big.jpeg", type: 'jpg'},
    {id: 12, idBreeds: 6,  breed: 'American Wirehair', src:"img/Cat_gallery/2_cat.jpeg", type: 'jpg'},
    {id: 13, idBreeds: 6,  breed: 'American Wirehair', src:"img/Cat_gallery/3_cat_big.jpeg", type: 'jpg'},
    {id: 14, idBreeds: 7,  breed: 'Bengal', src:"img/Cat_gallery/5_cat_big.jpeg", type: 'gif'},
    {id: 15, idBreeds: 1,  breed: 'Abyssinian', src:"img/Cat_gallery/4_cat.jpeg", type: 'jpg'},
    {id: 16, idBreeds: 1,  breed: 'Abyssinian', src:"img/Cat_gallery/6_cat.jpeg", type: 'gif'},
    {id: 17, idBreeds: 4,  breed: 'American Curl', src:"img/Cat_gallery/7_cat.jpeg", type: 'gif'},
    {id: 18, idBreeds: 1,  breed: 'Abyssinian', src:"img/Cat_gallery/8_cat_big.jpeg", type: 'jpg'},
    {id: 19, idBreeds: 4,  breed: 'American Curl', src:"img/Cat_gallery/9_cat.jpeg", type: 'jpg' },
    {id: 20, idBreeds: 8,  breed: 'British Curl', src:"img/Cat_gallery/10_cat.jpeg", type: 'jpg'}   
]

const limitOptions = [5, 10, 15, 20];
const limitText = '$ items per page';

const defaultSelectedBreed = 'None';

export default function Home() {
    const [breeds, setBreeds] = useState([]);
    useEffect(() => {
        getBreeds().then((res:any) => {
            setBreeds(res);
        })
    }, []);

    const tabname = "GALLERY";
  return (
    <main className="main">
    <div className="container right-blok">
        <div className="main__row">
            {MainLeft()}
            <div className="main-right">
                {RightHeader()}
                <div className="right__content gallery">
                    <div className="content__header">
                        {SubHeader({tabname})}
                        <div className="nav__btn nav__btn--upload ">UPLOAD</div>
                    </div>
                    <div className="filter-panel">
                        <div className="filter-panel_top">
                            <div className="filter-section">
                                <label className="filter-label" htmlFor="">ORDER</label>
                                {AlphaSortSelector()}
                            </div>
                            <div className="filter-section">
                                <label className="filter-label" htmlFor="">TYPE</label>
                                {FilterTypeImage()}
                            </div>
                        </div>
                        <div className="filter-panel_bottom">
                            <div className="filter-section filter-section-breed">
                                <label className="filter-label" htmlFor="">BREED</label>
                                {FilterBreed(breeds, defaultSelectedBreed)}
                            </div>
                            <div className="filter-section">
                                <label className="filter-label" htmlFor="">LIMIT</label>
                                {FilterImageItems({options:limitOptions, text:limitText})}
                            </div>
                            <button className="filter-btn filter-section"></button>
                        </div>
                    </div>
                    {/* {Gallery()} */}
                </div>
            </div>
            {ModalUpload()}
            {ModalHome()} 
        </div>
    </div>
    </main>
  )
}