import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import topPodcastData from '../services/topPodcastData';
import './SubscribedList.css'
import PaudioService from '../services/PaudioService';

const SubscribedList = ({subscriptions}) => {

    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        setPodcasts(subscriptions)
    }, []);

    if (!podcasts || podcasts.length === 0 )
        return "Library currently empty ...";

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