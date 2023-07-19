import taddy_cred from "./apikey.js";
import dummySearch from "./dummySearch.js";
import dummyEpisodes from "./dummyEpisodes.js";

const baseURL = 'https://api.taddy.org/';

const returnDummyData = false;

const TaddyService = {
  searchForSeries(term) {
    const query = `
      query SearchQuery($term: String!) {
        searchForTerm(term: $term, filterForTypes: PODCASTSERIES, page: 1, limitPerPage: 25) {
          searchId
          podcastSeries {
            uuid
            datePublished
            name
            authorName
            description
            rssUrl
            imageUrl
            websiteUrl
            hash
            childrenHash
            totalEpisodesCount
            itunesId
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
      .then(response => response.data.searchForTerm.podcastSeries)
      .catch(error => {
        console.error('Error:', error);
      })
  },


  searchForEpisodes(term) {
    const query = `
      query SearchQuery($term: String!) {
        getPodcastSeries(name: $term) {
          uuid
          datePublished
          name
          description
          imageUrl
          itunesId
          hash
          childrenHash
          episodes(sortOrder: LATEST, page: 1, limitPerPage: 25) {
            uuid
            name
            datePublished
            description
            audioUrl
            imageUrl
            fileLength
            fileType
            duration
            podcastSeries {
              uuid
            }
          }
          totalEpisodesCount
          genres
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
          seriesType
          language
          contentType
          isExplicitContent
          copyright
          websiteUrl
          rssUrl
          rssOwnerName
          rssOwnerPublicEmail
          authorName
        }
      }
    `;

    const variables = { term };

    if (returnDummyData)
      return dummyEpisodes;
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
      .then(response => response.data.getPodcastSeries)
      .catch(error => {
        console.error('Error:', error);
      })
    }
      ,

      searchForEpisodesWithUUID(term) {
        const query = `
          query SearchQuery($term: ID!) {
            getPodcastSeries(uuid: $term) {
              uuid
              datePublished
              name
              description
              imageUrl
              itunesId
              hash
              childrenHash
              episodes(sortOrder: LATEST, page: 1, limitPerPage: 25) {
                uuid
                name
                datePublished
                description
                audioUrl
                imageUrl
                fileLength
                fileType
                duration
                podcastSeries {
                  uuid
                }
              }
              totalEpisodesCount
              genres
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
              seriesType
              language
              contentType
              isExplicitContent
              copyright
              websiteUrl
              rssUrl
              rssOwnerName
              rssOwnerPublicEmail
              authorName
            }
          }
        `;
    
        const variables = { term };
    
        if (returnDummyData)
          return dummyEpisodes;
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
          .then(response => response.data.getPodcastSeries)
          .catch(error => {
            console.error('Error:', error);
          })

  }


};

export default TaddyService;