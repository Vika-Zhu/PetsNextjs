'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader';
import{ModalHome} from '../components/ModalHome/ModalHome';

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
                            {SubHeader(tabname)}
                            <div className="header__badge-id">28</div>
                        </div>
                        <div className="breed-foto">
                            <div className="breeds-foto__slide">
                                <img src="img/Cat_gallery/5_cat_big.jpeg" alt="cat-foto"/>
                            </div>
                            <div className="slide-indicator">
                                <a className="dot" href=""></a>
                                <a className="dot dot-active" href=""></a>
                                <a className="dot" href=""></a>
                                <a className="dot" href=""></a>
                                <a className="dot" href=""></a>
                            </div>
                        </div>
                        <div className="breed-info">
                            <h2 className="breed-info__name">Basenji</h2>
                            <div className="breed-info__description">Family companion cat</div>
                            <div className="breed-traits">
                                <div className="breed-traits__item">
                                    <div className="breed-traits__title">Temperament:</div>
                                    <p className="breed-traits__list">Active, Energetic, Independent, Intelligent, Gentle</p>
                                </div>
                                <div className="breed-traits__item">
                                    <div className="info-item">
                                        <div className="breed-traits__title">Origin: </div>
                                        <p className="breed-traits__list">United States</p>
                                    </div>
                                    <div className="info-item">
                                        <div className="breed-traits__title">Weight: </div>
                                        <p className="breed-traits__list">3 - 5 kgs</p>
                                    </div>
                                    <div className="info-item">
                                        <div className="breed-traits__title">Life span: </div>
                                        <p className="breed-traits__list">14 - 15 years</p>
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
