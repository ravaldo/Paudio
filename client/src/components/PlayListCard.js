import React, { useState, useEffect } from 'react'
import PaudioService from "../services/PaudioService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import './PlayListCard.css'
import getDetails from './episodeUtility';



const PlayListCard = ({ episode, deleteFromPlaylist, lightDark }) => {

    const [image, setImage] = useState('')

    useEffect(() => {
        if (!episode.imageUrl) {
            PaudioService.getPodcastSeriesImageUrl(episode.podcastSeries.uuid)
                .then(res => setImage(res))
        }
        else
            setImage(episode.imageUrl)
    }, []);

    const details = getDetails(episode)
    const title = window.innerWidth < 768 ? details.shortTitle : episode.name;

    return (
        <>
            <div className={`PlaylistCard ${lightDark}`}>


                <img src={image} alt={`image of ${episode.name}`} />
                <div>
                    <h4>{title}</h4>
                    <div className='cardMain'>
                        <div>
                            <p>Duration: {details.episodeDuration}</p>
                            <p>{details.episodeDate}</p>
                        </div>

                        <div>
                            <span id="icon"><FontAwesomeIcon icon={faCircleXmark} onClick={() => deleteFromPlaylist(episode)} /></span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>)
}

export default PlayListCard