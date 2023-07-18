import React from 'react'
import EpisodeCard from './EpisodeCard';
import PlayListCard from './PlayListCard';

// seems if you pass an array to a component it gets wrapped in an object??
const Playlist = ({playlist, deleteFromPlaylist}) => {

    if (playlist.length === 0) {
        return null;
    }

    const nodes = playlist.map(ep => {
        return <p> <PlayListCard episode = {ep} deleteFromPlaylist = {deleteFromPlaylist}  /></p>
   });

    return (
        <div> 
            {nodes}
        </div>
    )
}

export default Playlist