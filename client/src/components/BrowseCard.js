import React from 'react'
import './BrowseCard.css'

const BrowseCard = ({ podcastSeries, lightDark }) => {

    const shortDescription = podcastSeries.description.split(' ').slice(0,18).join(' ');

    if (!podcastSeries)
        return null;
    return (
        <div className={`BrowseCard ${lightDark}`}>
            <img classame="podcastImage" src={podcastSeries.imageUrl} alt={`This is the cover image for ${podcastSeries.name}`} />
            <div classname ="podcastDetails">
                <h4 classname="podcastName">{podcastSeries.name}</h4>
                <h6 className="pocastTotalEps">{podcastSeries.totalEpisodesCount} Episodes</h6>
                <h6 classname="podcastDescription">{shortDescription}...</h6>
            </div>
        </div>
    )
}

export default BrowseCard