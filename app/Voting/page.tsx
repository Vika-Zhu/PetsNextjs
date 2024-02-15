'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader/SubHeader';
import{ModalHome} from '../components/ModalHome/ModalHome';
import { useEffect, useState } from 'react';
import { gatImageCat  } from '../servises/cats-api-client';
import { VoteButtons } from '../components/VoteButtons/VoteButtons';
import { submitVote, getVoted, saveFavorites } from '@/app/servises/cats-api-client';
import { LogsList } from '../components/LogsList/LogsList';
import { selectIsModalHomeOpen } from '../GlobalRedux/filterGallerySlice';
import { useSelector } from 'react-redux';


export default function Home() {
    const tabname = "VOTING";
    const [imageCat, setImageCat] = useState<any>({});
    const [votedResults, setVotedResults] = useState([]);
    const isModalHomeOpen = useSelector(selectIsModalHomeOpen);

    useEffect(() => {
        gatImageCat().then((res) => {
          setImageCat(res[0]);
        });
        getVoted().then((res) => {
            setVotedResults(res);
        });
    }, []);

    const handleVote = (voteValue: number) => {
        submitVote(imageCat.id, voteValue).then(() => {
            getVoted().then((res) => {
                setVotedResults(res);
                gatImageCat().then((newImage) => {
                    setImageCat(newImage[0]);
                });
            });
        })
    };

    const handleSaveFavorites = () => {
        saveFavorites(imageCat.id)
    };

    return (
        <main className="main">
            <div className="container right-blok">
                <div className="main__row">
                    {MainLeft()}
                    <div className="main-right">
                        {RightHeader()}
                        <div className="right__content voting">
                            <div className="content__header">
                            {SubHeader({tabname})}
                            </div>
                            <div className="voting__foto">
                                <img src={imageCat.url} alt=""/>
                            </div>
                            {VoteButtons(handleVote, handleSaveFavorites)}
                            {LogsList(votedResults)}
                        </div>
                    </div>
                    {isModalHomeOpen && ModalHome()}
                </div>
            </div>
        </main>
    )
}