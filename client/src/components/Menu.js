import React from 'react';
import "./Menu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faTableCellsLarge, faIndent } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Menu = ({ lightDark }) => {
  return (
    <div className={`menu ${lightDark}`}>
      <Link to='/'><FontAwesomeIcon icon={faHouse} size='1x'/> Your Library</Link>
      <Link to='/browse'><FontAwesomeIcon icon={faTableCellsLarge} size='1x' /> Browse Podcasts</Link>
      <Link to='/search'><FontAwesomeIcon icon={faMagnifyingGlass} size='1x' /> Search</Link>
      <Link to='/playlist'><FontAwesomeIcon icon={faIndent} size='1x' /> Playlist</Link>
    </div>
  );
}

export default Menu;

