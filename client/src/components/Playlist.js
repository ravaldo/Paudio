import React from 'react'

// seems if you pass an array to a component it gets wrapped in an object??
const Playlist = (playlist, songIndex) => {

    if (!playlist && playlist.length === 0) {
        return null;
      }

    const nodes = playlist.playlist.map(ep => {
        return <p>{ep.name}</p>
    });

    return (
        <div>
            {nodes}
        </div>
    )
}

export default Playlist