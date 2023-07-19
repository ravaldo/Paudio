import React, { useState, useEffect } from 'react';
import BrowseCard from './BrowseCard';
import { Link } from 'react-router-dom';

const BrowseList = ({ subscriptions, podcasts, addToSubscriptions }) => {

    if (!podcasts || podcasts.length === 0 )
        return "Loading...";
    
    const podcastsList = podcasts.map(p =>
        <BrowseCard podcastSeries={p} key={p.uuid} addToSubscriptions={addToSubscriptions} subscriptions={subscriptions} />
    );

    return (
        <>
            {podcastsList}
        </>
    )
};

export default BrowseList;