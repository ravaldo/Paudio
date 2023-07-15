import React, {useEffect, useState} from 'react'
import EpisodeCard from "./EpisodeCard";
import TaddyService from '../services/TaddyService';
import './EpisodeList.css'



const EpisodeList = ({ podcastName }) => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        TaddyService.searchForEpisodes(podcastName).then(data => setEpisodes(data) )
    }, []);

    if (episodes.length === 0)
        return ;

    const episodesList = episodes.episodes.map( e => {
        return (
            <>
                <EpisodeCard episode={e} key={e.uuid} />
                <hr />
            </>
        )
    });


    return (
        <>  
            {episodesList}
        </>
    );
}

export default EpisodeList;