import React, {useState, useEffect} from 'react'

const PodcastList = ({podcasts}) => {

    const [podcasts, setPodcasts] = useState([]);

    useEffect( () => {
        TaddyService.searchForSeries(podcasts)
        .then(data => setPodcasts(data))
    }, []);


    if (podcasts.length === 0)
    return ;
    
    const podcastsList = podcasts.series.map ( p => {
        return (
            <>
            <p>this is where the podcast series info will go</p>
            </>
        )
    });

    return (
        <>
        <p>this is where a list of podcasts will be</p>
        </>
    )
};

export default PodcastList