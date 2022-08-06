//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

// Concat approach
const evens = [2, 4, 6, 8];
const odds = [1, 3, 5, 7, 9];
const evensAndOdds = evens.concat(odds);
console.log(`Merged ${evens} and ${odds} to get ${evensAndOdds}`);

// Equivalent spread operator appraoch
const evensAndOdds2 = [...evens, ...odds];
console.log(`Merged ${evens} and ${odds} to get ${evensAndOdds2}`);