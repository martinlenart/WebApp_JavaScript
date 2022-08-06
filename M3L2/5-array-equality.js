//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode


function areArraysEqual(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    // These objects are null, undeclared, or non-array objects
    return false;
  }
  else if (arrayA === arrayB) {
    // Shortcut: they're two references pointing to the same array
    return true;
  }
  else if (arrayA.length !== arrayB.length) {
    // They can't match if they have a different item count
    return false;
  }
  else {
    // Time to look closer at each item
    for (let i = 0; i < arrayA.length; ++i) {
      // We require items to have the same content and be the same type,
      // but you could use loosely typed equality depending on your task
      if (arrayA[i] !== arrayB[i]) return false;
    }
    return true;
  }
}
 
const fruitNamesA = ['apple', 'kumquat', 'grapefruit', 'kiwi'];
const fruitNamesB = ['apple', 'kumquat', 'grapefruit', 'kiwi'];
const fruitNamesC = ['avocado', 'squash', 'red pepper', 'cucumber'];
console.log(areArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(areArraysEqual(fruitNamesA, fruitNamesC)); // false
console.log(areArraysEqual(fruitNamesA.sort(), fruitNamesB.sort())); // true

/*
1. go back to example M3L1 23-object-test-equality. Write code that test if two arrays of objects are equal
*/