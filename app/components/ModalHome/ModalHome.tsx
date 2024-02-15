import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { closeHomeModal } from '@/app/GlobalRedux/filterGallerySlice';

export function ModalHome(){
    const dispatch = useDispatch();
    
    const closeModal = () => {
        dispatch(closeHomeModal());
    };

    return(   
        <div className="modal-home">
            <div className="modal-home__container">
                <button className="modal__close modal-home__close svg" onClick={closeModal}></button>
                <div className="modal-home__content">
                    <div className="block__start start">
                        <div className="start__items">
                            <div className="start__item item-start_1">
                                <div className="item__img">
                                    <img src="img/home/vote-table.png" alt=""/>
                                </div>
                                <div className="start__btn">
                                    <Link className="btn" href="/Voting" onClick={closeModal} >VOTING</Link>
                                </div>
                            </div>
                            <div className="start__item item-start_2">
                                <div className="item__img">
                                    <img src="img/home/pet-breeds.png" alt=""/>
                                </div>
                                <div className="start__btn">
                                    <Link className="btn" href="/Breeds" onClick={closeModal} >BREEDS</Link>
                                </div>
                            </div>
                            <div className="start__item item-start_3">
                                <div className="item__img">
                                    <img src="img/home/images-search.png" alt=""/>
                                </div>
                                <div className="start__btn">
                                    <Link className="btn" href="/Gallery" onClick={closeModal} >GALLERY</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
