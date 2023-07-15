import React from 'react';

const Header = () => {
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
        <div className='Header'>
            <h1>{greet}</h1>
        </div>
    );
};

export default Header;
