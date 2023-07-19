import topPodcasts from "./topPodcasts.js";
import PaudioService from "./PaudioService.js";
import TaddyService from "./TaddyService.mjs";

const fetchInOrder = async function (topPodcasts) {
    const responses = [];

    for (let i = 0; i < topPodcasts.length; i++) {
        console.log(topPodcasts[i].name)
        const response = await TaddyService.searchForEpisodes(topPodcasts[i].name)
        PaudioService.addOnePopular(response)
    }
    return responses
}


fetchInOrder(topPodcasts)