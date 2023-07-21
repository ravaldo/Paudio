import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom';
import './EpisodeInfo.css'

const EpisodeInfo = () => {

    const episode = useLocation().state.episode;

    return (
        <>

            {/* <div className="bg"
                style={{backgroundImage: `url(${episode.imageUrl})`}}
                dangerouslySetInnerHTML={{ __html: episode.description }}
                >
            </div> */}


            {/* ////////////////////////////////// */}


            <div className="wrap">
                <img className="background-image" src={episode.imageUrl} />

                <div className="description"
                    dangerouslySetInnerHTML={{ __html: episode.description }}>
                </div>
            </div>

        </>


    )
}

export default EpisodeInfo