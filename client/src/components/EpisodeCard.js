import React from 'react';
import './EpisodeCard.css'


const EpisodeCard = ({ episode }) => {

    if (!episode)
        return null;

    const episodeDate = new Date(episode.datePublished * 1000).toLocaleString();
    
    const episodeDuration = () => {
        const seconds = episode.duration;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }


    return (
        <div className="EpisodeCard">
          <div className="episodeImageWrapper">
            <img className="episodeImage" src={episode.imageUrl} alt={`this is an image of ${episode.name}`} />
          </div>
          <div className="episodeInfo">
            <h4 className="episodeName">{episode.name}</h4>
            <p className="episodeDuration">Duration: {episodeDuration()}</p>
            <p>{episodeDate}</p>
            
          </div>
        </div>
      );
    };

export default EpisodeCard;