'use client';


import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader';
import{ModalHome} from '../components/ModalHome/ModalHome';


export default function Home() {
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
                        <img src="img/voting_cat.png" alt=""/>
                    </div>
                    <div className="voting__action">
                        <button className="btn-likes svg"></button>
                        <button className="btn-favourites svg"></button>
                        <button className="btn-dislikes svg"></button>
                    </div>
                    <div className="voting__logs">

                        <div className="logs__item">
                            <div className="logs__time">22:35</div>
                            <div className="logs__message">Image ID: <span className="user-id">fQSunHvl8</span> was added to Favourites</div>
                            <div className="logs__icon">
                                <img src="" alt=""/>
                            </div>
                        </div>
    
                        <div className="logs__item">
                            <div className="logs__time">22:27</div>
                            <div className="logs__message">Image ID: <span className="user-id">HJd0XecNX</span> was added to Likes</div>
                            <div className="logs__icon">
                                <img src="" alt=""/>
                            </div>
                        </div>
                        
                        <div className="logs__item">
                            <div className="logs__time">22:21</div>
                            <div className="logs__message">Image ID: <span className="user-id">BbMFS3bU-</span> was added to Dislikes</div>
                            <div className="logs__icon">
                                <img src="" alt=""/>
                            </div>
                        </div>
                     
                        <div className="logs__item">
                            <div className="logs__time">21:56</div>
                            <div className="logs__message">Image ID: <span className="user-id">fQSunHvl8</span> was removed from Favourites</div>
                            <div className="logs__icon">
                                <img src="img/svg/like-color-30.svg" alt=""/>
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