import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import topPodcastData from '../services/topPodcastData';
import './SubscribedList.css'

const SubscribedList = ({subscriptions}) => {

    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        setPodcasts(subscriptions)
    }, [podcasts]);

    if (podcasts.length == 0)
    return null;

    const podcastsList = podcasts.map(p => {
        return (
            <div className='box' >
                <Link to={`/episodes/${p.uuid}`}><img src={p.imageUrl} /> </Link>
            </div>
        )

    });


    return (
        <div className='grid-container'>
            {podcastsList}
        </div>
    )
};


export default SubscribedList;