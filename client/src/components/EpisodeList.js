import React from 'react'
import EpisodeCard from "./EpisodeCard";


const EpisodeList = ({ episodes }) => {
    if (!episodes) return <h2>Loading</h2> // THIS SHOULD BE AN IMAGE
    const episodesList = episodes.map((PodcastEpisode) => {
        return (
            <>
                <EpisodeCard podcastEpisode={podcastEpisode} key={podcastEpisode._id} />
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