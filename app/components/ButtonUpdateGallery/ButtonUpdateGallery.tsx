'use client';

import React, { useEffect, useState } from 'react';

export function ButtonUpdateGallery(onClick:any){

    const handlerButtons = () => {
        onClick()
    };

    return(
        <button onClick={handlerButtons} className="filter-btn filter-section"></button>
    );
};
    