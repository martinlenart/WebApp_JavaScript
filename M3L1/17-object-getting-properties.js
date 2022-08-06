//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

const address = {
  country: 'Australia',
  city: 'Sydney',
  streetNum: '412',
  streetName: 'Worcestire Blvd'
};

// Check for specific properties
if ('country' in address) {
  console.log('address.country exists');
}

if (!('zipCode' in address)) {
  console.log('address.zipCode does not exist');
}

// Check how many proerties there is
const properties = Object.keys(address);
console.log(`The address object has a length of ${properties.length}`);


// Iterate over all properties
console.log('\nIterating over all properties');
console.log(`using a typical array for..of loop on the key array of ${address}`);
for (const property of properties) {
  console.log(`Property: ${property}, Value: ${address[property]}`);
}

console.log(`\nusing a for..in loop on properties of ${address} and it's prototypes`)
for (const property in address) {
  console.log(`Property: ${property}, Value: ${address[property]}`);
}

console.log(`\nusing a for loop on the key/value array of ${address}`);
const entries = Object.entries(address);
for (let i = 0; i < entries.length; i+=1) {
  console.log(`${entries[i][0]} : ${entries[i][1]}`);
}


/* Exercises

1. create an object with 10 dynamically, prop1..prop10, with values 1..10. Iterate over the properties and pront them out.

*/
