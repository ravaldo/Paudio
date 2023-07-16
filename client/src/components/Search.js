import React, { useState } from 'react'
import TaddyService from '../services/TaddyService'
import "./Search.css";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const podcastCards = results.map((podcast, index) => {
        return <p key={index}>{podcast.name}</p>
    })

    const handleChange = (e) => setSearchTerm(e.target.value);
    const handleKeyPress = (e) => {
        if (e.key === 'Enter')
            handleClick();
    }

    const handleClick = () => {
        if (searchTerm.length > 2)
            TaddyService.searchForSeries(searchTerm).then(data => setResults(data))
    };

    return (
      // <div>
      //     <input type="text" placeholder="What would you like to listen to?" onChange={handleChange} onKeyPress={handleKeyPress} />
      //     {/* <button onClick={handleClick}>SEARCH</button> */}
      //     {podcastCards}
      // </div>
      <div class="searchbox">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
        <input
          aria-label=""
          autocomplete="off"
          inputmode="search"
          placeholder="What would you like to listen to?"
          type="search"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        {podcastCards}
      </div>
    );
}

export default Search;

