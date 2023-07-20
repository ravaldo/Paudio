import React, {Fragment} from 'react'
import { useLocation } from 'react-router-dom';

const EpisodeInfo = () => {

    const episode  = useLocation().state.episode;
  
    return (

        <div dangerouslySetInnerHTML={{__html: episode.description}}>
            
        </div>
        
    )
}

export default EpisodeInfo