import React from 'react'
import './BrowseCard.css'

const BrowseCard = ({ podcastSeries }) => {


    if (!podcastSeries)
        return null;

    const podcastDescription = podcastSeries.description;
    const shortDescription = podcastDescription.split(' ').slice(0,18).join(' ')

    return (
        <div className='BrowseCard'>
            <h4 className="podcastName">{podcastSeries.name}</h4>
            <img className="podcastImage" src={podcastSeries.imageUrl} alt={`This is the cover image for ${podcastSeries.name}`} />
            <h6 className="podcastDescription">{shortDescription}...</h6>
            <h6 className="pocastTotalEps">{podcastSeries.totalEpisodesCount} Episodes</h6>
        </div>
    )
}

export default BrowseCard