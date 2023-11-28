'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader';
import{Gallery} from '../components/Gallery/Gallery';
import{ModalHome} from '../components/ModalHome/ModalHome';
import { FilterBreed } from '../components/FilterBreed/FilterBreed';


const galleryItems = [{id: 1, breed: 'Abyssinian', src:"img/Cat_gallery/1_cat_big.jpeg"},
    {id: 2, breed: 'American Wirehair', src:"img/Cat_gallery/2_cat.jpeg" },
    {id: 3, breed: 'American Wirehair', src:"img/Cat_gallery/3_cat_big.jpeg"},
    {id: 4, breed: 'American Wirehair', src:"img/Cat_gallery/5_cat_big.jpeg"},
    {id: 5, breed: 'Abyssinian', src:"img/Cat_gallery/4_cat.jpeg"},
    {id: 6, breed: 'Bengal', src:"img/Cat_gallery/6_cat.jpeg"},
    {id: 7, breed: 'American Curl', src:"img/Cat_gallery/7_cat.jpeg"},
    {id: 8, breed: 'Bengal', src:"img/Cat_gallery/8_cat_big.jpeg"},
    {id: 9, breed: 'American Curl', src:"img/Cat_gallery/9_cat.jpeg" },
    {id: 10, breed: 'American Curl', src:"img/Cat_gallery/10_cat.jpeg"},
    {id: 11, breed: 'Abyssinian', src:"img/Cat_gallery/1_cat_big.jpeg",},
    {id: 12, breed: 'American Wirehair', src:"img/Cat_gallery/2_cat.jpeg"},
    {id: 13, breed: 'American Wirehair', src:"img/Cat_gallery/3_cat_big.jpeg"},
    {id: 14, breed: 'Bengal', src:"img/Cat_gallery/5_cat_big.jpeg"},
    {id: 15, breed: 'Abyssinian', src:"img/Cat_gallery/4_cat.jpeg"},
    {id: 16, breed: 'Abyssinian', src:"img/Cat_gallery/6_cat.jpeg"},
    {id: 17, breed: 'American Curl', src:"img/Cat_gallery/7_cat.jpeg"},
    {id: 18, breed: 'Abyssinian', src:"img/Cat_gallery/8_cat_big.jpeg"},
    {id: 19, breed: 'American Curl', src:"img/Cat_gallery/9_cat.jpeg" },
    {id: 20, breed: 'British Curl', src:"img/Cat_gallery/10_cat.jpeg"}   
]

const breeds = [{breed: 'All Breeds'},
    {breed: 'Abyssinian'},
    {breed: 'Aegean'},
    {breed: 'American Bobtail'},
    {breed: 'American Curl'},
    {breed: 'American Shorthair'},
    {breed: 'American Wirehair'},
    {breed: 'Bengal'},
    {breed: 'British Curl'},
    {breed: 'Basenji'},
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
                                <div className="filter__select-option">All breeds</div>
                                {FilterBreed(breeds)}
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