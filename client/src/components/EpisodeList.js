import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";
import TaddyService from '../services/TaddyService.mjs';
import topPodcastData from '../services/topPodcastData';
import PaudioService from '../services/PaudioService';



const EpisodeList = ({ playTrack, addToPlaylist, lightDark }) => {

    const [podcast, setPodcast] = useState(null);
    const { uuid } = useParams();

    useEffect(() => {
        PaudioService.getOnePopular(uuid).then(result => {
            if(!result)
                TaddyService.searchForEpisodesWithUUID(uuid).then(data => {
                    setPodcast(data)
                    // PaudioService.addOnePopular(data)
                })
            else
                setPodcast(result);
        });
        
    }, []);

    if (!podcast)
        return;

    const episodesList = podcast.episodes.map(e =>
        <EpisodeCard
            key={e.uuid}
            episode={e}
            playTrack={playTrack}
            addToPlaylist={addToPlaylist}
            lightDark={lightDark}
            defaultImgUrl={podcast.imageUrl} />
    );



    // const episodesList = () => {
    //     if (!podcast.episodes) {
    //         console.log("grabbing")
    //         TaddyService.searchForEpisodes(podcast.name).then(data => setPodcast(data))
    //     }
    //     else {
    //         return podcast.episodes.map(e => {
    //             <EpisodeCard
    //                 key={e.uuid}
    //                 episode={e}
    //                 playTrack={playTrack}
    //                 addToPlaylist={addToPlaylist}
    //                 lightDark={lightDark}
    //                 defaultImgUrl={podcast.imageUrl} />
    //         })
    //     }
    // };



    return (
        <>
            {episodesList}
        </>
    );
}

export default EpisodeList;