'use client';

export function ButtonUpdateGallery(onClick:any){
    const handlerButtons = () => {
        onClick()
    };

    return(
        <button onClick={handlerButtons} className="filter-btn filter-section"></button>
    );
};
    