import React from 'react';
import './EpisodeCard.css'


const EpisodeCard = ({episode}) =>{

    if (!episode)
    return null;

    return (
        <div>
            <h4 className = "episodeName" >{episode.name}</h4>
            <img className = "episodeImage" src={episode.imageUrl} alt = {`this is an image of ${episode.name}`} />
            <h6 className="episodeDuration">{episode.duration}</h6>
        </div>
    )
}


export default EpisodeCard;