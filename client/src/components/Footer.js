import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faTableCellsLarge, faIndent } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = ({ lightDark }) => {
  return (
    <div className={`Footer ${lightDark}`}>
      <Link to='/'><FontAwesomeIcon icon={faHouse} size='2x' /> </Link>
      <Link to='/browse'><FontAwesomeIcon icon={faTableCellsLarge} size='2x' /></Link>
      <Link to='/search'><FontAwesomeIcon icon={faMagnifyingGlass} size='2x' /></Link>
      <Link to='/playlist'><FontAwesomeIcon icon={faIndent} size='2x' /></Link>
    </div>
  );
}

export default Footer;

