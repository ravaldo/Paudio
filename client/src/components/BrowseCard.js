import React, {useState, useEffect} from 'react'
import './BrowseCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import {faStar as staricon} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import getDetails from './episodeUtility';

const BrowseCard = ({ podcastSeries, lightDark, addRemoveSubscription, subscriptions }) => {

    useEffect(() => {
        
    }, [subscriptions, podcastSeries]);

    if (!subscriptions || !podcastSeries)
        return "Loading...";

    const isSubscribed = () => subscriptions.filter(p => p.uuid === podcastSeries.uuid).length > 0;

    return (
        <>
            <div className={`BrowseCard ${lightDark}`}>

            <Link to={`/episodes/${podcastSeries.uuid}`}> <img src={podcastSeries.imageUrl} alt={`cover image for ${podcastSeries.name}`} /></Link>

                <div className='cardMain'>
                    <div>
                        <h4>{podcastSeries.name}</h4>
                        <p>{podcastSeries.totalEpisodesCount} Episodes</p>
                        <p>{getDetails(podcastSeries).shortDescription}...</p>
                    </div>

                    <div>
                        <span id="icon" onClick={() => addRemoveSubscription(podcastSeries)} >
                        {isSubscribed() ? <FontAwesomeIcon icon={staricon}/> : <FontAwesomeIcon icon={faStar}/>}
                        </span>
                    </div>
                </div>

            </div>
            <hr />
        </>
    )
}

export default BrowseCard