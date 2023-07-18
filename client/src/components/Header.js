import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './Header.css'
import Menu from './Menu';
import Toggle from './Toggle'



const Header = ({ toggleLightDark, lightDark }) => {
    const currentPage = useLocation();

    const getCurrentPage = () => {
        if (currentPage.pathname === '/episodes') {
            return <h2>Browse Podcast Episodes</h2>;
        }
        else if (currentPage.pathname === '/browse') {
            return <h2>Browse Podcasts</h2>
        }
        else if (currentPage.pathname === '/search') {
            return <h2>Search for Podcasts</h2>
        }
        else if (currentPage.pathname === '/playlist') {
            return <h2>Your Playlist</h2>
        }
        else return <h2>Welcome Home</h2>
    };

    const greeting = new Date();
    const hrs = greeting.getHours();

    let greet;

    if (hrs >= 0 && hrs < 12) {
        greet = 'Good morning';
    } else if (hrs >= 12 && hrs < 18) {
        greet = 'Good afternoon';
    } else {
        greet = 'Good evening';
    }

    

    return (
        <div className={`Header ${lightDark}`}>
            <div className='header-container'>
                <div>
                    <h1>{greet}</h1>
                    {getCurrentPage()}
                </div>
                <div className='headermenu'>
                    <Menu lightDark={lightDark}/>
                </div>
                <div className='ldswitch'>
                    
                    <Toggle onClick = {toggleLightDark}/>
                    
                    <p className='lightdark'>Dark/Light </p>
                </div>
                
            </div>
        </div>
    );
};

export default Header;
