
import{MainLeft} from '../components/MainLeft/MainLeft';
import{RightHeader} from '../components/RightHeader/RightHeader';
import{SubHeader} from '../components/SubHeader/';
import{Gallery} from '../components/Gallery/Gallery';
import{ModalUpload} from '../components/ModalUpload/ModalUpload';
'use client';
import{ModalHome} from '../components/ModalHome/ModalHome';




const galleryItems = [{id: 1, breed: 'Abyssinian', src:"img/Cat_gallery/1_cat_big.jpeg"},
    {id: 2, breed: 'American Wirehair', src:"img/Cat_gallery/2_cat.jpeg" },
    {id: 3, breed: 'American Wirehair', src:"img/Cat_gallery/3_cat_big.jpeg"},
    {id: 4, breed: 'American Wirehair', src:"img/Cat_gallery/5_cat_big.jpeg"},
    {id: 5, breed: 'Abyssinian', src:"img/Cat_gallery/4_cat.jpeg"},
    {id: 6, breed: 'Abyssinian', src:"img/Cat_gallery/6_cat.jpeg"},
    {id: 7, breed: 'American Curl', src:"img/Cat_gallery/7_cat.jpeg"},
    {id: 8, breed: 'Abyssinian', src:"img/Cat_gallery/8_cat_big.jpeg"},
    {id: 9, breed: 'American Curl', src:"img/Cat_gallery/9_cat.jpeg" },
    {id: 10, breed: 'American Curl', src:"img/Cat_gallery/10_cat.jpeg"},
    {id: 1, breed: 'Abyssinian', src:"img/Cat_gallery/1_cat_big.jpeg",},
    {id: 2, breed: 'American Wirehair', src:"img/Cat_gallery/2_cat.jpeg"},
    {id: 3, breed: 'American Wirehair', src:"img/Cat_gallery/3_cat_big.jpeg"},
    {id: 4, breed: 'American Wirehair', src:"img/Cat_gallery/5_cat_big.jpeg"},
    {id: 5, breed: 'Abyssinian', src:"img/Cat_gallery/4_cat.jpeg"},
    {id: 6, breed: 'Abyssinian', src:"img/Cat_gallery/6_cat.jpeg"},
    {id: 7, breed: 'American Curl', src:"img/Cat_gallery/7_cat.jpeg"},
    {id: 8, breed: 'Abyssinian', src:"img/Cat_gallery/8_cat_big.jpeg"},
    {id: 9, breed: 'American Curl', src:"img/Cat_gallery/9_cat.jpeg" },
    {id: 10, breed: 'American Curl', src:"img/Cat_gallery/10_cat.jpeg"}   
]

export default function Home() {
    const tabname = "GALLERY";
  return (
    <main className="main">
    <div className="container right-blok">
        <div className="main__row">
            {MainLeft()}
            <div className="main-right">
                {RightHeader()}
                <div className="right__content gallery">
                    <div className="content__header">
                        {SubHeader({tabname})}
                        <div className="nav__btn nav__btn--upload ">UPLOAD</div>
                    </div>
                    <div className="filter-panel">
                        <div className="filter-panel_top">
                            <div className="filter-section">
                                <label className="filter-label" htmlFor="">ORDER</label>
                                <div className="filter_section-option">Random</div>
                                <ul className="filter__list-dropdown filter_list-dropdown">
                                    <li data-value="random">Random</li>
                                    <li data-value="desc">Desc</li>
                                    <li data-value="asc">Asc</li>
                                </ul>
                            </div>
                            <div className="filter-section">
                                <label className="filter-label" htmlFor="">TYPE</label>
                                <div className="filter_section-option">Static</div>
                                <ul className="filter__list-dropdown filter_list-dropdown ">
                                    <li data-value="all">All</li>
                                    <li data-value="static">Static</li>
                                    <li data-value="animated">Animated</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-panel_bottom">
                            <div className="filter-section filter-section-breed">
                                <label className="filter-label" htmlFor="">BREED</label>
                                <input className="filter_section-option breed-select" type="text" placeholder="None"/>
                                <div className="filter__list-wrapper">
                                    <ul className="filter__list-dropdown filter_list-dropdown">
                                        <li className="filter__item">
                                            <a className="filter__link" href="">Abyssinian</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">Aegean</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">American Bobtail</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">American Curl</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">American Shorthair</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">American Wirehair</a>
                                        </li>
                                        <li className="filter__item">
                                            <a className="filter__link" href="">...</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-section">
                                <label className="filter-label" htmlFor="">LIMIT</label>
                                <div className="filter_section-option">5 items per page</div>
                                <ul className="filter__list-dropdown filter_list-dropdown">
                                    <li data-value="5 items per page">5 items per page</li>
                                    <li data-value="10 items per page">10 items per page</li>
                                    <li data-value="15 items per page">15 items per page</li>
                                    <li data-value="20 items per page">20 items per page</li>
                                </ul>
                            </div>
                            <button className="filter-btn filter-section"></button>
                        </div>
                    </div>
                    {Gallery(galleryItems)}

                </div>
            </div>
            {ModalUpload()}
            {ModalHome()} 
        </div>
    </div>
    </main>


  )
}