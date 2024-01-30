'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader';
import{ModalHome} from '../components/ModalHome/ModalHome';
import{Gallery} from '../components/Gallery/Gallery';
import { getVoted } from '../servises/cats-api-client';
import { useEffect, useState } from 'react';
import { GalleryForLikesandDislikes } from '../components/GalleryForLikeAndDislike/GalleryForLikesAndDislikes';



export default function Home() {
    const tabname = "DISLIKES";
    const [votedResults, setVotedResults] = useState([]);

    useEffect(() => {
        getVoted().then((res) => {
            setVotedResults(res);
        });
    }, []);

    const dislikedImages = votedResults.filter((item:any) => item.value === -1);


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
                            {GalleryForLikesandDislikes(dislikedImages)}
                        </div>
                    </div>
                    {ModalHome()} 
                </div>

            </div>
        </main>

  )
}