const url = 'http://localhost:3000/ingredients';

async function myFetch(url, method = null, body = null) {
  try {

    let res = await fetch(url, {
      method: method ?? 'GET',
      headers: { 'content-type': 'application/json' },
      body: body ? JSON.stringify(body) : null
    });

    if (res.ok) {

      console.log("Request successful");

      //get the data from server
      let data = await res.json();
      return data;
    }
    else {

      //typcially you would log an error instead
      console.log(`Failed to recieved data from server: ${res.status}`);
      alert(`Failed to recieved data from server: ${res.status}`);
    }
  }
  catch (err) {

    //typcially you would log an error instead
    console.log(`Failed to recieved data from server: ${err.message}`);
    alert(`Failed to recieved data from server: ${err.message}`);
  }
}

//Lets use myFetch. As it is an async method and I cannot have await at top level, I need to make trick.
//See analogy on making in C# main async
//I make main as an asych arrow function with immediate execution of syntax, (async() => {})();

(async () => {

  //read a url, get an object convert it to an object from url
  const jsonObj = await myFetch(url);
  console.log(jsonObj);

  //write the object to the url
  data = await myFetch(url, 'POST', jsonObj);
  if (data) {
    console.log(data);
  }

  //read the updates json file

})();