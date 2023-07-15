import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';
import 'react-h5-audio-player/lib/styles.css';

import TaddyService from './services/TaddyService'
import Search from "./components/Search";
import Test from "./components/Test";
import EpisodeList from "./components/EpisodeList";
import Error from "./components/Error";

function App() {

  const [playList, setPlayList] = useState ([]);
  const [widescreen, setWidescreen] = useState (false);

  window.addEventListener('resize', () => setWidescreen(window.innerWidth > 768 ));


  const audio_url = "https://pfx.vpixl.com/6qj4J/dts.podtrac.com/redirect.mp3/chtbl.com/track/8DB4DB/pdst.fm/e/nyt.simplecastaudio.com/bbbcc290-ed3b-44a2-8e5d-5513e38cfe20/episodes/c81e5dcb-fb3b-4a3d-a472-f66852a687e4/audio/128/default.mp3?awCollectionId=bbbcc290-ed3b-44a2-8e5d-5513e38cfe20&awEpisodeId=c81e5dcb-fb3b-4a3d-a472-f66852a687e4"

  return (
    <div className="App">
      <Router >
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/episodes" element={<EpisodeList podcastName="True Crime"/>} />
            <Route path="/search" element={<Search />} />
            <Route path="/*" element={<Error />} />
            
          </Routes>
        </div>
      </Router>
      <AudioPlayer
        autoPlay
        src={audio_url}
        onPlay={e => console.log("onPlay")}
        showSkipControls={playList.length > 1}
        layout={widescreen? "horizontal" : "stacked"}
      />
    </div>
  );
}

export default App;