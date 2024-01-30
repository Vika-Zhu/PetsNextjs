'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader';
import{ModalHome} from '../components/ModalHome/ModalHome';
import { getFavorites } from '../servises/cats-api-client';
import { useState, useEffect} from 'react';
import { GalleryFavorites } from '../components/GalleryFavourites/GalleryFavourites';
import { deleteFavorite} from '../servises/cats-api-client';



export default function Home() {
    const tabname = "FAVOURITES";
    const [galleryItemsFavorites, setGalleryItems] = useState([]);

    useEffect(() => {
        getFavorites().then((res) => {
            setGalleryItems(res);
        });
    }, []);

    const handleDeleteFromFavorite = (favoriteId:any) => {
        deleteFavorite(favoriteId).then(() => {
            getFavorites().then((res) => {
                setGalleryItems(res);
            });
        })
    };
    

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
                            </div>
                            {GalleryFavorites(galleryItemsFavorites, handleDeleteFromFavorite)}
                            
                            <div className='logs'>
                                <div className="logs__item">
                                    <div className="logs__time">22:27</div>
                                    <div className="logs__message">Image ID: <span className="user-id">HJd0XecNX</span> was added to Likes</div>
                                </div>
                                <div className="logs__item">
                                    <div className="logs__time">22:27</div>
                                    <div className="logs__message">Image ID: <span className="user-id">HJd0XecNX</span> was added to Likes</div>
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
