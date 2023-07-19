import React, { useState, useEffect } from 'react';
import BrowseCard from './BrowseCard';
import { Link } from 'react-router-dom';

const BrowseList = ({ subscriptions, podcasts, addRemoveSubscription }) => {

    useEffect(() => {
        
    }, [subscriptions, podcasts]);

    if (!podcasts || podcasts.length === 0 )
        return "Loading...";
    
    const podcastsList = podcasts.map(p =>
        <BrowseCard podcastSeries={p} key={p.uuid} addRemoveSubscription={addRemoveSubscription} subscriptions={subscriptions} />
    );

    return (
        <>
            {podcastsList}
        </>
    )
};

export default BrowseList;