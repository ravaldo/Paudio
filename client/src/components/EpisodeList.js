import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";
import TaddyService from '../services/TaddyService';
import topPodcastData from '../services/topPodcastData';
import './EpisodeList.css'



const EpisodeList = ({ podcastName, playTrack, addToPlaylist, lightDark }) => {

    const [podcast, setPodcast] = useState(null);
    const { uuid } = useParams();

    useEffect(() => {
        // TaddyService.searchForEpisodes(podcastName).then(data => setPodcast(data))
        setPodcast(topPodcastData.find(p => p.uuid === uuid))
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


    return (
        <>
            {episodesList}

        </>
    );
}

export default EpisodeList;