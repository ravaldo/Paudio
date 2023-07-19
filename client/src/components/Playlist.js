import React from 'react'
import PlayListCard from './PlayListCard';

// seems if you pass an array to a component it gets wrapped in an object??
const Playlist = ({ playlist, deleteFromPlaylist, lightDark }) => {

    if (!playlist || playlist.length === 0 )
        return "Playlist currently empty...";

    const nodes = playlist.map(ep =>
        <PlayListCard episode={ep} deleteFromPlaylist={deleteFromPlaylist} lightDark={lightDark} />
    );

    return (
        <>
            {nodes}
        </>
    )
}

export default Playlist