'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader';
import{ModalHome} from '../components/ModalHome/ModalHome';
import { getBreedsInfo, getInfoBreedGallery} from '../servises/cats-api-client';
import { useEffect, useState } from 'react';
import { SliderInfoBreed } from '../components/SliderInfoBreed/SliderInfoBreed';
import { useSearchParams } from 'next/navigation';

export default function Home() {
    const tabname = "BREEDS";
    const searchParams = useSearchParams()
    const prmstr = searchParams.get('breed_id')

    const [breed, setBreeds] = useState<any>({});
    const [breedImages, setGalleryItems] = useState([]);



    useEffect(() => {
        const queryParams = {
            breedName: prmstr
          };

        getInfoBreedGallery(queryParams).then((res) => {
        setGalleryItems(res);
      });

        getBreedsInfo(prmstr).then((res) => {
            setBreeds(res);
        });
    }, []);

    console.log(breed)

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
                            <div className="header__badge-id">28</div>
                        </div>
                        {SliderInfoBreed(breedImages)}
                        <div className="breed-info">
                            <h2 className="breed-info__name">{breed?.name || 'N/A'}</h2>
                            <div className="breed-info__description">{breed?.description || 'N/A'}</div>
                            <div className="breed-traits">
                                <div className="breed-traits__item">
                                    <div className="breed-traits__title">Temperament:</div>
                                    <p className="breed-traits__list">{breed?.temperament || 'N/A'}</p>
                                </div>
                                <div className="breed-traits__item">
                                    <div className="info-item">
                                        <div className="breed-traits__title">Origin: </div>
                                        <p className="breed-traits__list">{breed?.origin || 'N/A'}</p>
                                    </div>
                                    <div className="info-item">
                                        <div className="breed-traits__title">Weight: </div>
                                        <p className="breed-traits__list">{breed?.weight?.metric || 'N/A'} kgs</p>
                                    </div>
                                    <div className="info-item">
                                        <div className="breed-traits__title">Life span: </div>
                                        <p className="breed-traits__list">{breed?.life_span || 'N/A'}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                   
                </div>
                {ModalHome()}
            </div>
        </div>
    </main>
  

  )
}
