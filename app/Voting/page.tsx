'use client';

import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader';
import{ModalHome} from '../components/ModalHome/ModalHome';
import { useEffect, useState } from 'react';
import { gatImageCat  } from '../servises/cats-api-client';
import { VoteButtons } from '../components/VoteButtons/VoteButtons';
import { submitVote, getVoted, saveFavorites } from '@/app/servises/cats-api-client';
import { LogsList } from '../components/LogsList/LogsList';


export default function Home() {
    const [imageCat, setImageCat] = useState<any>({});
    const [votedResults, setVotedResults] = useState([]);


    useEffect(() => {
        gatImageCat().then((res) => {
          setImageCat(res[0]);
      });
    }, []);

    useEffect(() => {
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


    console.log(votedResults)

  const tabname = "VOTING";
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
            {ModalHome()}
        </div>

    </div>
</main>

  )
}