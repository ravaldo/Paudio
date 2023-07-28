import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom';
import './EpisodeInfo.css'

const EpisodeInfo = () => {

    const episode = useLocation().state.episode;

    return (
        <>
            <div className="wrap">
                <div className="background" 
                    style={{ backgroundImage: `url(${episode.imageUrl})` }} >
                </div>
                <div className="text"
                    dangerouslySetInnerHTML={{ __html: episode.description }} >
                </div>
            </div>
        </>
    )
}

export default EpisodeInfo