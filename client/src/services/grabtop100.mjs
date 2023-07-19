import topPodcasts from "./topPodcasts.js";
import PaudioService from "./PaudioService.js";
import TaddyService from "./TaddyService.mjs";

const fetchInOrder = async function (topPodcasts) {
    for (let i = 0; i < topPodcasts.length; i++) {
        console.log(topPodcasts[i].name)
        const response = await TaddyService.searchForEpisodes(topPodcasts[i].name)
        await PaudioService.addOnePopular(response)
    }
}

fetchInOrder(topPodcasts)
