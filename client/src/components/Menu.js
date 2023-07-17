import React from 'react';
import "./Menu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faTableCellsLarge, faIndent } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Menu = ({ lightDark }) => {
  return (
    <div className={`menu ${lightDark}`}>
      <Link to='/' ><FontAwesomeIcon icon={faHouse} size='2x'  />Your&nbsp;Library</Link>
      <Link to='/browse'><FontAwesomeIcon icon={faTableCellsLarge} size='2x' />Browse&nbsp;Podcasts</Link>
      <Link to='/search'><FontAwesomeIcon icon={faMagnifyingGlass} size='2x' />Search</Link>
      <Link to='/playlist'><FontAwesomeIcon icon={faIndent} size='2x' />Playlist</Link>
    </div>
  );
}

export default Menu;

