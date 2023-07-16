import React, { useState, useLocation } from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import AudioPlayer from 'react-h5-audio-player'
import FooterPlayer from './FooterPlayer';

const Footer = () => {


  // const [playList, setPlayList] = useState([]);
  // const [widescreen, setWidescreen] = useState(false);

  // const AudioPlayer = () => {
  //   const {pathname} = useLocation();
  //   if (pathname === "/player")
  //   return null
  // }

  

  return (
    <div className="player_footer">
        <FooterPlayer />
        <div className='Footer'> 
          <Link to='/'><FontAwesomeIcon icon={faHouse} size='2x' /> </Link>
          <Link to='/browse'><FontAwesomeIcon icon={faGlobe} size='2x' /></Link>
          <Link to='/search'><FontAwesomeIcon icon={faMagnifyingGlass} size='2x' /></Link>
        </div>
    </div> 
  );
}

export default Footer;
