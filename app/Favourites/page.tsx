'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader/SubHeader';
import{ModalHome} from '../components/ModalHome/ModalHome';
import { getFavorites } from '../servises/cats-api-client';
import { useState, useEffect} from 'react';
import { deleteFavorite} from '../servises/cats-api-client';
import { useSelector } from 'react-redux';
import { getVoted } from '../servises/cats-api-client';
import { selectIsModalHomeOpen } from '../GlobalRedux/filterGallerySlice';
import { MultiGallery } from '../components/MultiGallery/MultiGallery';
import { LogsList } from '../components/LogsList/LogsList';

export default function Home() {
    const tabname = "FAVOURITES";
    const [galleryItemsFavorites, setGalleryItems] = useState([]);
    const [favoriteLogs, setFavoriteLogs] = useState([]);
    const isModalHomeOpen = useSelector(selectIsModalHomeOpen);

    useEffect(() => {
        getFavorites().then((res) => {
            setGalleryItems(res);
        });
        
        getVoted().then((res) => {
            const favoriteLogs = res.filter((item:any) => item.value === 3);
            setFavoriteLogs(favoriteLogs);
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
                        <div className="right__content">
                            <div className="content__header">
                            {SubHeader({tabname})}
                            </div>
                            {MultiGallery({galleryItems: galleryItemsFavorites, onDeleteFavorite:handleDeleteFromFavorite, showDeleteButton: true, showLoader: true, classMode: "gallery-favorite"})}
                            {LogsList(favoriteLogs)}
                        </div>
                    </div>
                    {isModalHomeOpen && ModalHome()} 
                </div>
            </div>
        </main>
    )
}
