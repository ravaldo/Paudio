import React from 'react';


const EpisodeCard = ({episode}) =>{

    if (!episode)
    return null;

    return (
        <>
            <p>{episode.name}</p>
            {/* <h4 className = "episodeName" >{podcastEpisode.name}</h4>
            <img className = "episodeImage" src= {podcastEpisode.imageURL} alt = {`this is an image of ${podcastEpisode.name}`}> </img>
            <h6 className="episodeDuration">{podcastEpisode.duration}</h6> */}
            {/* <button onClick = {dummy}> ▶️ </button> */}
        </>
    )
}


export default EpisodeCard;