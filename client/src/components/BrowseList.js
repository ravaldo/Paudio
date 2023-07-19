import React, { useState, useEffect } from 'react';
import BrowseCard from './BrowseCard';
import { Link } from 'react-router-dom';

const BrowseList = ({ podcasts, addToSubscriptions }) => {

    if (!podcasts || podcasts.length === 0 )
        return "Loading...";
    
    const podcastsList = podcasts.map(p =>
        <BrowseCard podcastSeries={p} key={p.uuid} addToSubscriptions={addToSubscriptions} />
    );

    return (
        <>
            {podcastsList}
        </>
    )
};

export default BrowseList;