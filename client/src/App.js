import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import Header from "./components/Header";

import './App.css';
import 'react-h5-audio-player/lib/styles.css';


function App() {

  const audio_url = "https://pfx.vpixl.com/6qj4J/dts.podtrac.com/redirect.mp3/chtbl.com/track/8DB4DB/pdst.fm/e/nyt.simplecastaudio.com/bbbcc290-ed3b-44a2-8e5d-5513e38cfe20/episodes/c81e5dcb-fb3b-4a3d-a472-f66852a687e4/audio/128/default.mp3?awCollectionId=bbbcc290-ed3b-44a2-8e5d-5513e38cfe20&awEpisodeId=c81e5dcb-fb3b-4a3d-a472-f66852a687e4"


  return (
    <div className="App">
      <Router >
          <Header />
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>
          <h1>sfsfs</h1>

            <Routes>
              <Route path="/library" />
              <Route path="/search" />
              <Route path="/browse" />
            </Routes>
        </Router>
        <AudioPlayer
          autoPlay
          src={audio_url}
          onPlay={e => console.log("onPlay")}
        // other props here
        />
    </div>
  );
}

export default App;
