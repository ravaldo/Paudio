import React from 'react'

const PodcastCard = ({podcast}) => {

    if (!podcast)
    return null;


    return (
        <>
            <h4 classname = "podcastName">{podcastSeries.name}</h4>
            <img classname = "podcastImage" src={podcastSeries.imageUrl} alt={`This is the cover image for ${podcastSeries.name}`}/>
            <h6 classname="podcastDescription">{podcastSeries.description}</h6>
            <h6 classname="pocastTotalEps">{podcastSeries.totalEpisodesCount}</h6>
        </>
    )
}

export default PodcastCard
