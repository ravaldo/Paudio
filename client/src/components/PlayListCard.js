import React from 'react'

const PlayListCard = ({ episode, deleteFromPlaylist }) => {
    const handleClick = () => {
        deleteFromPlaylist(episode)
    }


    return (
        <div>
            <h1> {episode.name} </h1>
            <button onClick={handleClick}> delete </button>
        </div>
    )
}

export default PlayListCard