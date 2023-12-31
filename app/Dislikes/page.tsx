'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader';
import{ModalHome} from '../components/ModalHome/ModalHome';
import{Gallery} from '../components/Gallery/Gallery';

const galleryItems = [{id: 1, breed: 'Abyssinian', src:"img/Cat_gallery/1_cat_big.jpeg"},
   
]

export default function Home() {
    const tabname = "DISLIKES";
  return (

    <main className="main">
        <div className="container right-blok">
            <div className="main__row">
                {MainLeft()}
                <div className="main-right">
                    {RightHeader()}
                    <div className="right__content">
                        <div className="content__header">
                        {SubHeader({tabname})}
                        </div>
                        {/* {Gallery()} */}
                        <div className="info__no-found">
                        No item found 
                        </div>

                    </div>
                </div>
                {ModalHome()} 
            </div>

        </div>
    </main>

  )
}