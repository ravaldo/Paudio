import React, { useState } from 'react'
import TaddyService from '../services/TaddyService'

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const podcastCards = results.map( (podcast, index) => {
        return <p key={index}>{podcast.name}</p>
    })

    const handleChange = (e) => setSearchTerm(e.target.value);

    const handleClick = () => {
        if(searchTerm.length > 2)
            setResults(TaddyService.search(searchTerm));
    };

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>SEARCH</button>
            {podcastCards}
        </div>
    )
}

export default Search