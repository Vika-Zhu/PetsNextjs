'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader';
import{Gallery} from '../components/Gallery/Gallery';
import{ModalHome} from '../components/ModalHome/ModalHome';
import { FilterBreed } from '../components/FilterBreed/FilterBreed';
import { FilterImageItems } from '../components/FilterImageItems/FilterImageItems';
import { AlphaSortButtons } from '../components/AlphaSortButtons/AlphaSortButtons';
import { useState, useEffect} from 'react';
import { getBreeds, getImages } from '../servises/cats-api-client';

const defaultSelectedBreed = 'All breeds';

const limitOptions = [5, 10, 15, 20];
const limitText = 'Limit: $';


export default function Home() {
    const [breeds, setBreeds] = useState([]);
    useEffect(() => {
        getBreeds().then((res:any) => {
            setBreeds(res);
        })
    }, []);

    const tabname = "BREEDS";

  return (
    <main className="main">
        <div className="container right-blok">
            {breeds.length ? (
                <div className="main__row">
                    {MainLeft()}
                    <div className="main-right">
                        {RightHeader()}
                        <div className="right__content breeds">
                        <div className="content__header">
                            {SubHeader({tabname})}
                            <div className="filter__select filter__select-breeds"> 
                                {FilterBreed(breeds, defaultSelectedBreed)}
                            </div>
                            <div className="filter__select filter__select--limit-img">
                                {FilterImageItems({ text: limitText, options: limitOptions})}
                            </div>
                            {AlphaSortButtons()}
                        </div>
                            {Gallery()}
                        </div>
                    </div>
                    {ModalHome()}
                </div> 
            ) : (
                <div className="lds-roller">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            )}
        </div>
    </main>
  )
}