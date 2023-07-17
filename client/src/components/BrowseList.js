import React, { useState, useEffect } from 'react';
import TaddyService from '../services/TaddyService';
import BrowseCard from './BrowseCard';
import topPodcastData from '../services/topPodcastData';


const BrowseList = () => {

    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        // TaddyService.searchForSeries(podcastSeries.name).then(data => setPodcasts(data))
        setPodcasts(topPodcastData)
    }, []);

    
    const podcastsList = podcasts.map(p => <BrowseCard podcastSeries={p} key={p.uuid} /> );


    if (podcasts.length === 0)
        return;
    return (
        <div className="browseList">
            {podcastsList}
        </div>
    )
};

export default BrowseList;