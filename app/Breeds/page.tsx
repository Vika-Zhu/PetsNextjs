'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader';
import{Gallery} from '../components/Gallery/Gallery';
import{ModalHome} from '../components/ModalHome/ModalHome';


const galleryItems = [{id: 1, breed: 'Abyssinian', src:"img/Cat_gallery/1_cat_big.jpeg", size: 'long'},
    {id: 2, breed: 'American Wirehair', src:"img/Cat_gallery/2_cat.jpeg", size: 'standard'},
    {id: 3, breed: 'American Wirehair', src:"img/Cat_gallery/3_cat_big.jpeg", size: 'standard'},
    {id: 4, breed: 'American Wirehair', src:"img/Cat_gallery/5_cat_big.jpeg", size: 'big'},
    {id: 5, breed: 'Abyssinian', src:"img/Cat_gallery/4_cat.jpeg", size: 'standard'},
    {id: 6, breed: 'Abyssinian', src:"img/Cat_gallery/6_cat.jpeg", size: 'standard'},
    {id: 7, breed: 'American Curl', src:"img/Cat_gallery/7_cat.jpeg", size: 'standard'},
    {id: 8, breed: 'Abyssinian', src:"img/Cat_gallery/8_cat_big.jpeg",size: 'long'},
    {id: 9, breed: 'American Curl', src:"img/Cat_gallery/9_cat.jpeg", size: 'standard' },
    {id: 10, breed: 'American Curl', src:"img/Cat_gallery/10_cat.jpeg",size: 'big-revers'},
    {id: 11, breed: 'Abyssinian', src:"img/Cat_gallery/1_cat_big.jpeg", size: 'long'},
    {id: 12, breed: 'American Wirehair', src:"img/Cat_gallery/2_cat.jpeg", size: 'standard'},
    {id: 13, breed: 'American Wirehair', src:"img/Cat_gallery/3_cat_big.jpeg", size: 'standard'},
    {id: 14, breed: 'American Wirehair', src:"img/Cat_gallery/5_cat_big.jpeg", size: 'big'},
    {id: 15, breed: 'Abyssinian', src:"img/Cat_gallery/4_cat.jpeg", size: 'standard'},
    {id: 16, breed: 'Abyssinian', src:"img/Cat_gallery/6_cat.jpeg", size: 'standard'},
    {id: 17, breed: 'American Curl', src:"img/Cat_gallery/7_cat.jpeg", size: 'standard'},
    {id: 18, breed: 'Abyssinian', src:"img/Cat_gallery/8_cat_big.jpeg",size: 'long'},
    {id: 19, breed: 'American Curl', src:"img/Cat_gallery/9_cat.jpeg", size: 'standard' },
    {id: 20, breed: 'American Curl', src:"img/Cat_gallery/10_cat.jpeg",size: 'big-revers'}   
]

export default function Home() {
    const tabname = "BREEDS";
  return (
    <main className="main">
        <div className="container right-blok">
            <div className="main__row">
                {MainLeft()}
                <div className="main-right">
                    {RightHeader()}
                    <div className="right__content breeds">
                        <div className="content__header">
                            {SubHeader({tabname})}
                            <div className="filter__select filter__select-breeds"> 
                                <a className="filter__select-option" href="">All breeds</a>
                                <div className="filter__list-wrapper">
                                    <ul className="filter__list-dropdown">
                                        <li className="filter__item">
                                            <a className="filter__link" href="">All breeds</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">Abyssinian</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">Aegean</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">American Bobtail</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">American Curl</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">American Shorthair</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">American Wirehair</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">...</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter__select filter__select--limit-img">
                                <div className="filter__select-option" >Limit: 5</div>
                                <div className="filter__list-wrapper">
                                    <ul className="filter__list-dropdown nav__list-dropdown-limit">
                                        <li className="filter__item">Limit: 5</li>
                                        <li className="filter__item">Limit: 10</li>
                                        <li className="filter__item">Limit: 15</li>
                                        <li className="filter__item">Limit: 20</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="filter__btn-sort filter__btn--sort-asc svg"></button>
                            <button className="filter__btn-sort filter__button--sort-desc svg"></button>
                        </div>
                        {Gallery(galleryItems)}

                    </div>
                </div>
                {ModalHome()}
            </div>
        </div>
    </main>

  )
}