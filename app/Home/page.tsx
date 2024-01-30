'use client';

import Image from 'next/image'

import{MainLeft} from '../components/MainLeft/MainLeft';

export default function Home() {
  return (
    <main className="main home">
    <div className="container">
        <div className="main__row">
            {MainLeft()}
            <div className="main-right">
                <div className="home__img">
                    <img src="img/home/girl-and-pet 1 (1).png" alt="Image"/>
                </div>
            </div>
        </div>
    </div>
</main>

  )
}
