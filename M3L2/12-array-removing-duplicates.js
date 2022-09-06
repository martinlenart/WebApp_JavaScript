//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
const numbersWithDuplicates = [2, 42, 5, 42, 304, 1, 13, 2, 13];

//go from array -> set -> array, niiice
const uniqueNumbers = [...new Set(numbersWithDuplicates)];

console.log(`Changed ${numbersWithDuplicates} to ${uniqueNumbers}`);