//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/Response/json

//get json from nasa
const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

//https://openweathermap.org/current
//const apiKeyOW = "eee86395bdce14b3d962d5956193d800";
//const city = "Stockholm";
//const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${apiKeyOW}`;

//https://newsapi.org/docs/endpoints/top-headlines
//Example where News do not allow cors on developer license
//const apiKeyNews = "d318329c40734776a014f9d9513e14ae";
//const apiKeyNews = "6a2aa4837b194bbdb423edf71b380e8b"
//const url = `https://newsapi.org/v2/top-headlines?country=se&category=technology&apiKey=${apiKeyNews}`;

//const url = "https://ws6.seido.se/api/Customers";  //my WebApi generating random customers and orders
//for api info see https://ws6.seido.se/swagger

// basic fetch error handling
async function fetchRequest() {
  try {
    const response = await fetch(url);
    if (response.status >= 200 && response.status < 400) {
      const data = await response.json();
      console.log(data);
    } else {
      // Handle server error
      // example: INTERNAL SERVER ERROR: 500 error
      console.log(`${response.statusText}: ${response.status} error`);
    }
  } catch (error) {

    alert('Failed to recieved data from server');
    console.log('Failed to recieved data from server');
  }
}

// demonstrate options
async function fetchRequestOptions() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    });
    // log response to demonstrate the full response
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {

    alert('Failed to recieved data from server');
    console.log('Failed to recieved data from server');
  }
}

fetchRequest();
fetchRequestOptions();
