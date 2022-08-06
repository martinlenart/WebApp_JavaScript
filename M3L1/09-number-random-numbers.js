//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// General formula is:
// randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;

// Get 10 random numbers from 1-6
for (let i=0; i<10; i+=1) {
  const randomNumber = Math.floor(Math.random()*6) + 1;
  console.log(randomNumber);
}


// Exercise
const rndFirstNames = 'This is a list of first names to pick randomly: John, Mary, Hans, Thomas, José, Susanne';
const rndLastNames = 'This is a list of last names to pick randomly: Smith, Schultz, Perez, Johnsson';

/* Exercises

1. Generate 20 random full names from above list. Take the steps, exract the list of names, trim it, pick a name randomly, create a full name

*/
