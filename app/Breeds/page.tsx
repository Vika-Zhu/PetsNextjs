'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader';
import{Gallery} from '../components/Gallery/Gallery';
import{ModalHome} from '../components/ModalHome/ModalHome';
import { FilterBreed } from '../components/FilterBreed/FilterBreed';
import { FilterImageItems } from '../components/FilterImageItems/FilterImageItems';
import { AlphaSortButtons } from '../components/AlphaSortButtons/AlphaSortButtons';


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

const breeds = [
    {breed: 'Abyssinian', id: 1},
    {breed: 'Aegean', id: 2},
    {breed: 'American Bobtail', id: 3},
    {breed: 'American Curl', id: 4},
    {breed: 'American Shorthair', id: 5},
    {breed: 'American Wirehair', id: 6},
    {breed: 'Bengal', id: 7},
    {breed: 'British Curl', id: 8},
    {breed: 'Basenji', id: 9},
]

const defaultSelectedBreed = 'All breeds';

const limitOptions = [5, 10, 15, 20];
const limitText = 'Limit: $';


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
                                {FilterBreed({breed:breeds, defaultSelectedBreed:defaultSelectedBreed})}
                            </div>
                            <div className="filter__select filter__select--limit-img">
                                {FilterImageItems({ text: limitText, options: limitOptions})}
                            </div>
                            {AlphaSortButtons()}
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