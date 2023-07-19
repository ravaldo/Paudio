const basePopularURL = 'http://localhost:9000/api/popular/';
const baseFavouritesURL = 'http://localhost:9000/api/subscribed/';

const PaudioService = {

  getAllPopular() {
    return fetch(basePopularURL)
      .then(res => res.json());
  },

  getOnePopular(id) {
    return fetch(basePopularURL + "uuid/" + id)
      .then(res => res.json());
  },

  addOnePopular(payload) {
    return fetch(basePopularURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
  },

  deleteOnePopular(id) {
    return fetch(basePopularURL + "uuid/" + id, {
      method: 'DELETE'
    });
  },

  getAllFavourites() {
    return fetch(baseFavouritesURL)
      .then(res => res.json());
  },

  getOneFavourite(id) {
    return fetch(baseFavouritesURL + "uuid/" + id)
      .then(res => res.json());
  },

  addOneFavourite(payload) {
    return fetch(baseFavouritesURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
  },

  deleteOneFavourite(id) {
    return fetch(baseFavouritesURL + "uuid/ " + id, {
      method: 'DELETE'
    });
  },

  getPodcastSeriesImageUrl(uuid) {
    return fetch('http://localhost:9000/api/image/' + uuid)
      .then(res => res.json())
      .then(response => response.imageUrl)
  }

};

// export default PaudioService;
module.exports = PaudioService;