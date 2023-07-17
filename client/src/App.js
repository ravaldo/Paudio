import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLight } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import 'react-h5-audio-player/lib/styles.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import SubscribedList from "./components/SubscribedList";
import BrowseList from "./components/BrowseList";
import EpisodeList from "./components/EpisodeList";
import Error from "./components/Error";
import Test from "./components/Test";
import Playlist from "./components/Playlist";

function App() {

  const [lightDark, setLightDark] = useState("dark");
  const [playlist, setPlayList] = useState([]);
  const [songIndex, setSongIndex] = useState(0);
  const [widescreen, setWidescreen] = useState(false);

  useEffect(() => {
    setContentHeight();
  })

  const setContentHeight = () => {
    const footerHeight = document.querySelector(".player_footer").offsetHeight;
    const headerHeight = document.querySelector(".Header").offsetHeight;
    const contentHeight = window.innerHeight - headerHeight - footerHeight;
    document.querySelector(".content").style.height = `${contentHeight}px`;
  };

  window.addEventListener('resize', setContentHeight);
  window.addEventListener('resize', () => setWidescreen(window.innerWidth > 768));

  const toggleLightDark = () => setLightDark(lightDark == "dark" ? "light" : "dark");
  const playTrack = (episode) => {
    addToPlaylist(episode);
    setSongIndex(playlist.length);
  }
  const addToPlaylist = (episode) => setPlayList([...playlist, episode])
  const handleClickNext = () => { setSongIndex( _ => songIndex < playlist.length - 1 ? songIndex+1 : songIndex )};
  const handleClickPrev = () => { setSongIndex( _ => songIndex > 0 ? songIndex-1 : songIndex )};
  

  return (
    <div className={`App ${lightDark}`}>
      <Router>
        
        <Header toggleLightDark={toggleLightDark} />
        
        <div className="content" >
          <Routes>
            <Route path="/" element={<SubscribedList />} />
            <Route path="/episodes/:uuid" element={<EpisodeList
              playTrack={playTrack}
              addToPlaylist={addToPlaylist}
              lightDark={lightDark}
            />} />
            <Route path="/browse" element={<BrowseList lightDark={lightDark}/>} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlist" element={<Playlist playlist={playlist} />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
       
        <div className="player_footer">
          <AudioPlayer
            src={playlist.length>0? playlist[songIndex].audioUrl: null}
            onPlay={e => console.log("onPlay")}
            onClickPrevious={handleClickPrev}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
            showSkipControls={playlist.length > 1}
            layout={widescreen ? "horizontal" : "stacked"}
          />
          <Footer lightDark={lightDark} />
        </div>
      </Router>
    </div>
  );
}

export default App;
