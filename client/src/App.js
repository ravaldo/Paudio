import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AudioPlayer from 'react-h5-audio-player';
import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';
// import 'react-h5-audio-player/lib/styles.css';

import Search from "./components/Search";
import Test from "./components/Test";
import EpisodeList from "./components/EpisodeList";
import Error from "./components/Error";
import BrowseList from "./components/BrowseList";
import SubscribedList from "./components/SubscribedList";
import Player from "./components/Player";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<SubscribedList />} />
            <Route path="/episodes" element={<EpisodeList podcastName="True Crime" />} />
            <Route path="/browse" element={<BrowseList />} />
            <Route path="/search" element={<Search />} />
            <Route path="/player" element={<Player />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
        <div className="player_footer">
          <Footer />
        </div>  
      </Router>
    </div>
  );
}
export default App;