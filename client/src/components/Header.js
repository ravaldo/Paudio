import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = ({ toggleLightDark, lightDark }) => {
    const currentPage = useLocation();

    const getCurrentPage = () => {
        if (currentPage.pathname === '/episodes') {
            return <h3>Browse Podcast Episodes</h3>;
        }
        else if (currentPage.pathname === '/browse') {
            return <h3>Browse Podcasts</h3>
        }
        else if (currentPage.pathname === '/search') {
            return <h3>Search for Podcasts</h3>
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
                <div>
                    <p>
                        <FontAwesomeIcon
                            icon={faLightbulb} size='2x' onClick={toggleLightDark}>
                        </FontAwesomeIcon>
                    </p>
                    <p className='lightdark'>Light/Dark </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
