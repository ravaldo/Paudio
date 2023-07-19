import React, { useState, useEffect, useRef } from "react";
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
import Playlist from "./components/Playlist";
import BrowseList from "./components/BrowseList";
import EpisodeList from "./components/EpisodeList";
import Error from "./components/Error";
import Test from "./components/Test";

import TaddyService from "./services/TaddyService.mjs";
import PaudioService from "./services/PaudioService";
import topPodcastData from "./services/topPodcastData";



function App() {

  const [lightDark, setLightDark] = useState("dark");
  const [playlist, setPlayList] = useState([]);
  const [songIndex, setSongIndex] = useState(0);
  const [widescreen, setWidescreen] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [popularPodcasts, setPopularPodcasts] = useState([]);
  const [playerHeader, setPlayerHeader] = useState('');


  useEffect(() => {
    setContentHeight();
    PaudioService.getAllPopular().then(data => setPopularPodcasts(data))
    PaudioService.getAllFavourites().then(data => setSubscriptions(data))
  }, [])

  // because our header and footer are sticky that leaves us with a scrollable
  // portion in the middle of the screen. the content there should not be hidden
  // by the either the footer/header. by setting the content height exactly to 
  // the remaining pixels we can get ensure no content is hidden and the scroll
  // bar lines up nicely with the content portion
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

  const addRemoveSubscription = (podcast) => {
    if (subscriptions.filter(p => p.uuid === podcast.uuid).length == 0) {
      // if the given podcast is not in subscriptions already
      // then add it to the favourites db and update state
      PaudioService.addOneFavourite(podcast)
      setSubscriptions([...subscriptions, podcast])
    }
    else {
      // deleteit from the favourites database and remove it from subscriptions state
      PaudioService.deleteOneFavourite(podcast)
      setSubscriptions(subscriptions.filter(p => p.uuid != podcast.uuid))
    }
  };

  const audioPlayerRef = useRef(null);
  const addToPlaylist = (episode) => setPlayList([...playlist, episode])
  const handlePlay = () => { setPlayerHeader(playlist.length > 0 ? `Now playing: ${playlist[songIndex].name}` : '') };
  const handleClickNext = () => { setSongIndex(_ => songIndex < playlist.length - 1 ? songIndex + 1 : songIndex) };
  const handleClickPrev = () => { setSongIndex(_ => songIndex > 0 ? songIndex - 1 : songIndex) };
  const deleteFromPlaylist = (episode) => {
    // need to adjust songIndex
    let epIndex = 0
    for (let i = 0; i < playlist.length; i++) {
      if (playlist[i].uuid == episode.uuid)
        epIndex = i;
    }

    // if (epIndex > songIndex) //do nothing
    if (epIndex == songIndex){ // if removing current, then reset index and stop playing
      setSongIndex(0);
      audioPlayerRef.current.audio.current.pause();
      setPlayerHeader('')
      // console.log(audioPlayerRef.current)
    }
    if (epIndex < songIndex) // if removing prior song then decrement
      setSongIndex(songIndex-1)
    setPlayList(playlist.filter(e =>e.uuid !== episode.uuid));
  };
  

  return (
    <div className={`App ${lightDark}`}>
      <Router>

        <Header toggleLightDark={toggleLightDark} lightDark={lightDark} />

        <div className="content" >
          <Routes>
            <Route path="/" element={<SubscribedList subscriptions={subscriptions} addRemoveSubscription={addRemoveSubscription} />} />
            <Route path="/episodes/:uuid" element={<EpisodeList
              playTrack={playTrack}
              addToPlaylist={addToPlaylist}
              lightDark={lightDark}
            />} />
            <Route path="/browse" element={<BrowseList subscriptions={subscriptions} podcasts={popularPodcasts} lightDark={lightDark} addRemoveSubscription={addRemoveSubscription} />} />
            <Route path="/search" element={<Search subscriptions={subscriptions} lightDark={lightDark} addRemoveSubscription={addRemoveSubscription}/>} />
            <Route path="/playlist" element={<Playlist playlist={playlist} deleteFromPlaylist={deleteFromPlaylist} lightDark={lightDark} />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>

        <div className="player_footer">

          <AudioPlayer className="player"
            ref={audioPlayerRef}
            src={playlist.length > 0 ? playlist[songIndex].audioUrl : null}
            header={playerHeader}
            onPlay={handlePlay}
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
