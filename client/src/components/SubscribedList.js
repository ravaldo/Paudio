import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './SubscribedList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faCircleXmark, faRectangleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

import { Swipe, Position } from "react-swipe-component"

const SubscribedList = ({ subscriptions, addRemoveSubscription }) => {

    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        setPodcasts(subscriptions)
    }, [subscriptions]);

    if (!podcasts || podcasts.length === 0)
        return "Library currently empty ...";

    const podcastsList = podcasts.map(p => {
        return (
            <Swipe
                onSwipedLeft={() => addRemoveSubscription(p)}
                onSwipedRight={() => addRemoveSubscription(p)}
                >
                <div className='box' >
                    <Link to={`/episodes/${p.uuid}`}><img src={p.imageUrl} /> </Link>
                    {/* <span class="icon front"> <FontAwesomeIcon icon={faRectangleXmark} /> </span>
                    <span class="icon back"> <FontAwesomeIcon icon={faSquare} /> </span> */}
                </div>
            </Swipe >
        )
    });

    return (
        <div className='grid-container'>
            {podcastsList}
        </div>
    )
};


export default SubscribedList;