
const getDetails = (episode) => {

    const episodeDate = new Date(episode.datePublished * 1000).toLocaleDateString();

    const episodeDuration = () => {
        const seconds = episode.duration;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    const shortTitle = () => {
        return (episode.name.split(' ').slice(0, 10).join(' ') + " ...");
    };

    const shortDescription = () => {
        if (episode.description)
            return episode.description.split(' ').slice(0, 18).join(' ')
        return "Description not available"
    }

    return {
        episodeDate: episodeDate,
        episodeDuration: episodeDuration(),
        shortTitle: shortTitle(),
        shortDescription: shortDescription()
    }

}

module.exports = getDetails;