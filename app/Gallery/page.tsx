'use client';

import { MainLeft } from '../components/MainLeft/MainLeft';
import { RightHeader } from '../components/RightHeader/RightHeader';
import { SubHeader } from '../components/SubHeader/';
import { Gallery } from '../components/Gallery/Gallery';
import { ModalUpload } from '../components/ModalUpload/ModalUpload';
import { FilterBreed } from '../components/FilterBreed/FilterBreed';
import { FilterImageItems } from '../components/FilterImageItems/FilterImageItems';
import { ButtonUpdateGallery } from '../components/ButtonUpdateGallery/ButtonUpdateGallery';
import { ModalHome } from '../components/ModalHome/ModalHome';
import { UploadDataSortSelector } from '../components/UploadDataSortSelector/UploadDataSortSelector';
import { FilterTypeImage } from '../components/FilterTypeImage/FilterTypeImage';
import { useState, useEffect} from 'react';
import { getBreeds, getImages, getFavorites, deleteFavorite, saveFavorites, uploadImage } from '../servises/cats-api-client';
import { useSelector, useDispatch} from 'react-redux'
import { reset } from '@/app/GlobalRedux/filterGallerySlice';
import { selectUploadDataOrder, selectBreedFilter, selectImageCount, selectTypeImage, selectBreedFilterByName  } from '@/app/GlobalRedux/filterGallerySlice';
import { Console } from 'console';
import Link from 'next/link'


const limitOptions = [5, 10, 15, 20];
const limitText = '$ items per page';

const defaultSelectedBreed = 'None';

export default function Home() {
    const tabname = "GALLERY";

    const [galleryItems, setGalleryItems] = useState<any>([]);
    const [breeds, setBreeds] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState<any>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<any>(false);
    const [dragActive, setDraagActive] = useState(false)
    const [previewImage, setPreviewImage] = useState<any>(null);
    const [uploadStatus, setUploadStatus] = useState<any>(null);

    const breedFilter = useSelector(selectBreedFilter);
    const imageCount= useSelector(selectImageCount)
    const uploadDataSort = useSelector(selectUploadDataOrder)
    const typeImage = useSelector(selectTypeImage)
    const nameBreed = useSelector(selectBreedFilterByName)

// ------------------UPLOAD--------------------------------

    const handleFileChange = (e:any) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            setSelectedFile([file]);
        }
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    };

    const hendlerDrag = (e:any) =>{
        e.preventDefault();
        setDraagActive(true)
    }

    const hendlerLeave = (e:any) =>{
        e.preventDefault();
        setDraagActive(false)
    }

    const hendlerDrop = (e:any) =>{
        e.preventDefault();
        setDraagActive(false)
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const file = files[0];
            setSelectedFile([file]);
    
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    }


    // const handleUploadStatus = (status:any) => {
    //     setUploadStatus(status);
    //     console.log(uploadStatus)
    //     if (status === 'success') {
    //         setSelectedFile(false);
    //     }
    // };

    const hendlerSubmit = (e:any) =>{
        e.preventDefault();

        
        const test = uploadImage(selectedFile[0]);
        test.then(response => {
                console.log('Response:', response)
                setUploadStatus('success');
                setSelectedFile(false);
            })
            .catch((error) => {
                console.log('error', error);
                setUploadStatus('error');
            });
    }
    
    useEffect(() => {
        if (selectedFile === false) {
            setPreviewImage(null);
        }
        if (uploadStatus === 'error') {

        }
    }, [selectedFile, uploadStatus]);


    
    // ---------------------------------------------------------------

    const fetchDataFromApi = async () =>{
        const queryParams = {
            breedFilter: breedFilter,
            imageCount: imageCount,
            uploadDataSort: uploadDataSort,
            typeImage: typeImage
        };
    
        const [resImages, resFavorites] = await Promise.all([
            getImages(queryParams),
            getFavorites()
        ]);
        const updatedGalleryItems = resImages.map((item:any) => {
            const favorite = resFavorites.find((favorite:any) => favorite.image_id === item.id);
            return {
                ...item,
                isFavorite: !!favorite,
            };
        });
        setGalleryItems(updatedGalleryItems);
        setFavoriteItems(resFavorites);
    };   

    useEffect(() => {
        const queryParams = {
            breedFilter: breedFilter,
            imageCount: imageCount,
            uploadDataSort: uploadDataSort,
        };

        getBreeds(queryParams).then((res) => {
            setBreeds(res);
        });

        fetchDataFromApi();
    },[]);

    useEffect(() => {
        fetchDataFromApi();
    }, [breedFilter, imageCount, uploadDataSort, typeImage, nameBreed]);


    const handleFavoriteToggle = (id: string, isFavorite: boolean) => {
            const favoriteObj = favoriteItems.find((favorite: any) => favorite.image_id === id);
            if (isFavorite) {
                deleteFavorite(favoriteObj.id).then(() => {
                    fetchDataFromApi()
                    const test = galleryItems.map((item:any) => item.id === id ? { ...item, isFavorite: false } : item)
                    setGalleryItems(test)
                })
            } else {
                saveFavorites(id).then(() => {
                    fetchDataFromApi()
                    const test = galleryItems.map((item:any) => item.id === id ? { ...item, isFavorite: true } : item)
                    setGalleryItems(test)
                })
            }
    };

    const onRefreshButtonClicked = () =>{
        const queryParams = {
            breedFilter: breedFilter,
            imageCount: imageCount,
            uploadDataSort: uploadDataSort,
          };
        getImages(queryParams).then((res) => {
        setGalleryItems(res);
      })
    }

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

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
                                <div className="nav__btn nav__btn--upload" onClick={handleModalToggle} >UPLOAD</div>
                            </div>
                            <div className="filter-panel">
                                <div className="filter-panel_top">
                                    <div className="filter-section">
                                        <label className="filter-label" htmlFor="">ORDER</label>
                                        {UploadDataSortSelector()}
                                    </div>
                                    <div className="filter-section">
                                        <label className="filter-label" htmlFor="">TYPE</label>
                                        {FilterTypeImage()}
                                    </div>
                                </div>
                                <div className="filter-panel_bottom">
                                    <div className="filter-section filter-section-breed">
                                        <label className="filter-label" htmlFor="">BREED</label>
                                        {FilterBreed(breeds, defaultSelectedBreed)}
                                    </div>
                                    <div className="filter-section">
                                        <label className="filter-label" htmlFor="">LIMIT</label>
                                        {FilterImageItems({options:limitOptions, text:limitText})}
                                    </div>
                                    {ButtonUpdateGallery(onRefreshButtonClicked)}
                                </div>
                            </div>
                            {Gallery(galleryItems, handleFavoriteToggle)}
                        </div>
                    </div>
                    {isModalOpen && ModalUpload(handleFileChange, selectedFile, hendlerDrop, hendlerDrag, hendlerLeave, dragActive, previewImage, hendlerSubmit, handleModalToggle, uploadStatus)}
                    {ModalHome()} 
                </div>
            </div>
        </main>
    )
}

// const updatedGalleryItems = galleryItems.find((item:any) => item.id === favoriteObj.id)
//                     return{
                        
//                     }