import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
// import styled from "styled-components";
import topPodcastData from '../services/topPodcastData';
import './SubscribedList.css'

const SubscribedList = () => {

    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        setPodcasts(topPodcastData)
    }, []);

    
    const podcastsList = podcasts.map(p => {
        return (
            <div className='box' >
                <Link to='/episodes'><img style="border-radius: 5px" src={p.imageUrl}/> </Link>
            </div>
        )

    });


    if (podcasts.length === 0)
        return;
    return (
        <div className='grid-container'>
            {podcastsList}
        </div>
    )
};


export default SubscribedList;