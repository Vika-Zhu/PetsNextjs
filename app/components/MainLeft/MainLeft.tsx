'use client';

import Link from 'next/link'

export function MainLeft() {
    return( <div className="main-left">
    <div className="logo">
        <Link href="/Home" >
            <img src="img/Logo.svg" alt=""/>
        </Link>
    </div>
    <div className="greeting">
        <h2 className="greeting__title">Hi!👋</h2>
        <p className="greeting__text">Welcome to MacPaw Bootcamp 2023</p>
    </div>
    <div className="block__start start">
        <div className="start__text">Lets start using The Cat API</div>
        <div className="start__items">
            <div className="start__item item-start_1">
                <Link href="/Voting">
                    <div className="item__img">
                        <img src="img/home/vote-table.png" alt=""/>
                    </div>
                    <div className="start__btn">
                        <div className="btn" >VOTING</div> 
                    </div>
                </Link>
            </div>
            <div className="start__item item-start_2">
                <Link href="/Breeds">
                    <div className="item__img">
                        <img src="img/home/pet-breeds.png" alt=""/>
                    </div>
                    <div className="start__btn">
                        <div className="btn" >BREEDS</div> 
                    </div>
                </Link> 
            </div>
            <div className="start__item item-start_3">
                <Link href="/Gallery">
                    <div className="item__img">
                        <img src="img/home/images-search.png" alt=""/>
                    </div>
                    <div className="start__btn">
                        <div className="btn" >GALLERY</div> 
                    </div>
                </Link> 
            </div>
        </div>
    </div>
</div>) 
}