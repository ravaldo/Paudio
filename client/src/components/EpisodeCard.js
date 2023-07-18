import React from 'react';
import './EpisodeCard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

const EpisodeCard = ({ episode, playTrack, addToPlaylist, lightDark, defaultImgUrl }) => {



  if (!episode)
    return null;

  const episodeDate = new Date(episode.datePublished * 1000).toLocaleDateString();

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

  const title = () => {
    if (window.innerWidth < 768) {
      return ( episode.name.split(' ').slice(0,10).join(' ') + " ...");
  }
    else
      return(episode.name)
  }

  return (
    <>
      <div className={`EpisodeCard ${lightDark}`}>
        <img src={episode.imageUrl ? episode.imageUrl : defaultImgUrl} alt={`image of ${episode.name}`} />
        <div >
          <h4>{title()}</h4>
          <div className='cardMain'>
            <div>
              <p>Duration: {episodeDuration()}</p>
              <p>{episodeDate}</p>
            </div>
            <div>
              <span id="icon"><FontAwesomeIcon icon={faSquarePlus} onClick={() => addToPlaylist(episode)} /></span>
              <span id="icon"><FontAwesomeIcon icon={faCirclePlay} onClick={() => playTrack(episode)} /></span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default EpisodeCard;