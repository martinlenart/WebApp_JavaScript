//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

const sentence = 'This is one sentence. This is a sentence with a list of items:' +
'cherries, oranges, apples, bananas. That was the list of items.';
const start = sentence.indexOf(':');
const end = sentence.indexOf('.', start + 1);

//slice out a substring starting at start+1
const list = sentence.slice(start + 1, end);
// list = 'cherries, oranges, apples, bananas'

let fruits = list.split(',');
// now fruits has these elements: ['cherries', ' oranges', ' apples', '
// bananas']


//using trim() to remove whitespace characters right and left
fruits = fruits.map(s => s.trim());


// now fruits has these elements: ['cherries', 'oranges', 'apples', 'bananas']
console.log(fruits);


/* Exercises

1. instead of s => s.trim() above use s => s.length. Before doing so, do you understand what fruit will contain? 

*/