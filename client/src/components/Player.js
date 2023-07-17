import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'

const Player = () => {

    const [playList, setPlayList] = useState([]);
    const [widescreen, setWidescreen] = useState(false);
    const audio_url = "https://pfx.vpixl.com/6qj4J/dts.podtrac.com/redirect.mp3/chtbl.com/track/8DB4DB/pdst.fm/e/nyt.simplecastaudio.com/bbbcc290-ed3b-44a2-8e5d-5513e38cfe20/episodes/c81e5dcb-fb3b-4a3d-a472-f66852a687e4/audio/128/default.mp3?awCollectionId=bbbcc290-ed3b-44a2-8e5d-5513e38cfe20&awEpisodeId=c81e5dcb-fb3b-4a3d-a472-f66852a687e4"

    window.addEventListener('resize', () => setWidescreen(window.innerWidth > 768));


    return (
        <>
        <AudioPlayer
            // autoPlay
            src={audio_url}
            onPlay={e => console.log("onPlay")}
            showSkipControls={playList.length > 1}
            layout={widescreen ? "horizontal" : "stacked"}
        />
        </>
    )
}

export default Player;