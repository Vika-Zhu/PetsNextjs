


function galleryItem(item:any){
    
    return(  
         <div key = {item.id + 'galleryItem'} className = "gallery__item" > 
            <img src={item.src} alt=""/>
            <button className="gallery_btn-like svg"></button>
            <div className="item-btn btn">
                <a href="">{item.breed}</a>
            </div>
        </div>)
}

export function Gallery(galleryItems:any){
    return(
        <div className="gallery breeds__gallery">
            <div className="gallery__items">
                {galleryItems.map(galleryItem)}
            </div>

        </div>
        );

};



        // <div className="gallery breeds__gallery">
        //     <div className="gallery__item">
        //         {galleryItems.map((item) => (
        //             if(item.size === 'long'){
        //                 itemClasses += 'item__long';
        //             }else if(item.size === 'big'){
        //                 itemClasses += 'item__big';
        //             }else if(item.size === 'big-revers'){
        //                 itemClasses += 'item__big-reverse'
        //             }
        //             <div className="gallery__items">
        //         )
                   
        //             <div className="gallery__item " key = {item.id}>
        //                 <img src={item.src} alt=""/>
        //                 <button className="gallery_btn-like gallery_btn-like-long svg"></button>
        //                 <div className="item-btn item-btn-long btn">
        //                     <a href="">{item.breed}</a>
        //                 </div>
        //             </div>
        //         ))}
                
        //     </div>
        // </div>)

