'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader/SubHeader';
import{ModalHome} from '../components/ModalHome/ModalHome';
import { getVoted } from '../servises/cats-api-client';
import { useEffect, useState } from 'react';
import { selectIsModalHomeOpen } from '@/app/GlobalRedux/filterGallerySlice';
import { useSelector } from 'react-redux';
import { MultiGallery } from '../components/MultiGallery/MultiGallery';


export default function Home() {
    const tabname = "LIKES";
    const [votedResults, setVotedResults] = useState([]);
    const isModalHomeOpen = useSelector(selectIsModalHomeOpen);

    useEffect(() => {
        getVoted().then((res) => {
            setVotedResults(res);
        });
    }, []);

    const likedImages = votedResults.filter((item:any) => item.value === 1);

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
                            {MultiGallery({galleryItems: likedImages, showDeleteButton: false, showLoader: false, classMode: 'gallery-like-dislike'})}
                        </div>
                    </div>
                    {isModalHomeOpen && ModalHome()} 
                </div>
            </div>
        </main>
    )
}