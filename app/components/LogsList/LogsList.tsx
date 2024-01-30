'use client';

import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'


export function LogsList(votedResults:any){


    return (
        <div className="logs">
            {votedResults.slice().reverse().map((item: any) => {
                const date = new Date(item.created_at);
                const hours = date.getHours();
                const minutes = date.getMinutes();

                const message = 
                item.value === 1 ? 'was added to Likes' :
                item.value === -1 ? 'was added to Dislikes' :
                item.value === 3 ? 'was added to Favourites' : '';
            
                return (
                    <div className="logs__item" key={item.id}>
                        <div className="logs__time">{`${hours}:${minutes < 10 ? '0' : ''}${minutes}`}</div>
                        <div className="logs__message">Image ID: <span className="user-id">{item.image_id}</span> {message}</div>
                        <div className="logs__icon">
                            <img src={
                                item.value === 1 ? "img/svg/voting_action/like_hover.svg" :
                                item.value === -1 ? "img/svg/voting_action/dislike_hover.svg" :
                                item.value === 3 ? "img/svg/voting_action/favour_hover.svg" : ""
                            } alt=""/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
