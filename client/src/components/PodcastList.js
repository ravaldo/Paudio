import React, {useState, useEffect} from 'react';
import TaddyService from '../services/TaddyService';
import PodcastCard from './PodcastCard';

const PodcastList = ({podcastSeries}) => {

    const [podcasts, setPodcasts] = useState([]);

    useEffect( () => {
        TaddyService.searchForSeries(podcastSeries.name)
        .then(data => setPodcasts(data))
    }, []);


    if (podcasts.length === 0)
    return ;
    
    const podcastsList = podcasts.podcastSeries.map ( p => {
        return (
            <>
            <PodcastCard podcast={p} key={p.uuid} />
            </>
        )
    });

    return (
        <>
        <p>this is where a list of podcasts will be</p>
        </>
    )
};

export default PodcastList