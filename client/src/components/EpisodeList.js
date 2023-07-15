import React, {useEffect, useState} from 'react'
import EpisodeCard from "./EpisodeCard";
import TaddyService from '../services/TaddyService';



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
            <p>hello from episodeslist</p>
            {episodesList}
        </>
    );
}

export default EpisodeList;