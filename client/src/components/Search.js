import React, { useState } from 'react'
import TaddyService from '../services/TaddyService'

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
        <div>
            <input type="text" onChange={handleChange} onKeyPress={handleKeyPress} />
            <button onClick={handleClick}>SEARCH</button>
            {podcastCards}
        </div>
    )
}

export default Search;