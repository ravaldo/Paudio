import React from 'react'
import "./Header.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
        
        <div className='icon'>
          <Link to='library'><FontAwesomeIcon icon={faHouse} size='3x' /> Home</Link>
          <Link to='browse'><FontAwesomeIcon icon={faGlobe} size='3x' />Browse</Link>
          <Link to='search'><FontAwesomeIcon icon={faMagnifyingGlass} size='3x' />Search</Link>
        </div>
        
    </div>
  )
}

export default Footer