import React from 'react'
import './BrowseCard.css'

const BrowseCard = ({ podcastSeries }) => {

    const shortDescription = podcastSeries.description.split(' ').slice(0,18).join(' ');

    if (!podcastSeries)
        return null;
    return (
        <div className='BrowseCard'>
            <h4 classname="podcastName">{podcastSeries.name}</h4>
            <img classname="podcastImage" src={podcastSeries.imageUrl} alt={`This is the cover image for ${podcastSeries.name}`} />
            <h6 classname="podcastDescription">{podcastSeries.description}</h6>
            <h6 className="pocastTotalEps">{podcastSeries.totalEpisodesCount} Episodes</h6>
        </div>
    )
}

export default BrowseCard