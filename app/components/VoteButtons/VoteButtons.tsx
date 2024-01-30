'use client';

import React from 'react';
import { useState, useEffect} from 'react';
import { saveFavorites } from '@/app/servises/cats-api-client';


export function VoteButtons(handleVote:any, handleSaveFavorites:any ){


    return (
        <div className="voting__action">
          <button className="btn-likes svg" onClick={() => handleVote(1)}></button>
          <button className="btn-favourites svg" onClick={() => { handleVote(3); handleSaveFavorites(); }} ></button>
          <button className="btn-dislikes svg" onClick={() => handleVote(-1)}></button>
        </div>
      );
};
    