
function galleryItem(item:any, onDeleteFavorite: any, showDeleteButton:any){
    return(  
        <div key = {item.id + 'galleryItem'} className = "gallery__item" > 
            <img src={item.image.url} alt=""/>
            {showDeleteButton && (
                <button className="gallery_btn-favorite delete-favourite svg" onClick={() => onDeleteFavorite(item.id)}></button>
            )}
        </div>
    )
}

export function MultiGallery(props:any) {
    const { galleryItems, onDeleteFavorite, showDeleteButton, showLoader, classMode } = props

    return (
        galleryItems.length ? 
            <div className={`gallery ${classMode}`}>
                <div className="gallery__items">
                    {galleryItems.map((item:any) => galleryItem(item, onDeleteFavorite, showDeleteButton))}
                </div>
            </div>
        : 
            showLoader ? 
                <div className="lds-roller roller-favorites">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            :
                <div className="info__no-found"> No item found </div>
    );
}






    
