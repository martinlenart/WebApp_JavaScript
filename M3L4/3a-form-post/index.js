
//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/FormData

const formAddServerDictory = document.getElementById('formAddServerDictory');

//Start the server by opening a terminal in /case-study-server and type node simple-with-form.js
const urlPost = 'http://localhost:3000/api/createdir';
const urlJson = './server/app-data/albums.json';


formAddServerDictory.addEventListener('submit', async event => {
  event.preventDefault();

  //Create the key/value pairs used in the form
  const formData = new FormData(formAddServerDictory);
  try {
    //send the data using post and await the reply
    const response = await fetch(urlPost, {
      method: 'post',
      body: formData
    });
    const result = await response.text();

    if (response.ok) {

      const response = await fetch(urlJson);
      const data = await response.text();

      alert(`Thank you for submitting the information. It has been recieved:\n`+
      `${data}`);

    }
    else {
      alert("Transmission error");
    }
    console.log(result);
  }
  catch {
    alert("Transmission error");
  }
});
