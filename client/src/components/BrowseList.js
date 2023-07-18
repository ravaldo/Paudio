import React, { useState, useEffect } from 'react';
import TaddyService from '../services/TaddyService';
import BrowseCard from './BrowseCard';
import { Link } from 'react-router-dom';
import topPodcastData from '../services/topPodcastData';


const BrowseList = ({podcasts}) => {

    // const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        // setPodcasts(topPodcastData)
    }, []);

    
if (podcasts.length === 0)
        return;

    const podcastsList = podcasts.map(p =>
        <Link to={`/episodes/${p.uuid}`}><BrowseCard podcastSeries={p} key={p.uuid}/> </Link>
    );


    
    return (
        <div className="browseList">
            {podcastsList}
        </div>
    )
};

export default BrowseList;