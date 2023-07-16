import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
        <Link to='/'><FontAwesomeIcon icon={faHouse} size='2x' /> </Link>
        <Link to='/browse'><FontAwesomeIcon icon={faGlobe} size='2x' /></Link>
        <Link to='/search'><FontAwesomeIcon icon={faMagnifyingGlass} size='2x' /></Link>
    </div>
  );
}

export default Footer;
