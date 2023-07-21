import React from 'react';
import './EpisodeCard.css'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import getDetails from './episodeUtility';

const EpisodeCard = ({ episode, playTrack, addToPlaylist, lightDark }) => {

  if (!episode)
    return null;

  const details = getDetails(episode)
  const title = window.innerWidth < 768 ? details.shortTitle : episode.name;

  return (
    <>
      <div className={`EpisodeCard ${lightDark}`}>

        <Link to={"/episode"} state={{episode}} >
          <img src={episode.imageUrl} alt={`image of ${episode.name}`} />
        </Link>

        <div >
          <h4>{title}</h4>
          <div className='cardMain'>
            <div>
              <p>Duration: {details.episodeDuration}</p>
              <p>{details.episodeDate}</p>
              {/* <p>{details.shortDescription}</p> */}
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