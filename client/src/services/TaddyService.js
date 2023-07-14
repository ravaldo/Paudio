import dummySearch from "./dummySearch";
import taddy_cred from "./.apikey";


const baseURL = 'https://api.taddy.org/';

const returnDummyData = true;

const TaddyService = {
  search(term) {
    const query = `
      query SearchQuery($term: String!) {
        searchForTerm(term: $term, filterForTypes: PODCASTSERIES) {
          searchId
          podcastSeries {
            uuid
            name
            rssUrl
            description
            imageUrl
            totalEpisodesCount
            itunesInfo {
              uuid
              hash
              subtitle
              summary
              baseArtworkUrl
              baseArtworkUrlOf
              publisherId
              publisherName
              country
            }
                   }
        }
      }
    `;

    const variables = { term };
    // shorthand to create an object with a single property named "term"
    // and its value is taken from an existing variable with the same name

    if (returnDummyData)
      return dummySearch;
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify({
        query,
        variables
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-USER-ID': taddy_cred['X-USER-ID'],
        'X-API-KEY': taddy_cred['X-API-KEY']
      }
    })
      .then(res => res.json())
      .then(response => response.data.searchForTerm.podcastSeries);
  }
};

export default TaddyService;