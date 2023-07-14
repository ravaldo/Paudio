import taddy_cred from "./apikey";


const baseURL = 'https://api.taddy.org/';

const TaddyService =  {
   updateBooking(term) {
    return fetch(baseURL + booking._id, {
      method: 'POST',
      body: JSON.stringify(booking),
      headers: {
        'Content-Type': 'application/json'
        "X-USER-ID": taddy_cred["X-USER-ID"], 
        "X-API-KEY": taddy_cred["X-API-KEY"]
      }
    })
      .then(res => res.json());
  }
};

export default BookingService;