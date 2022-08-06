//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

console.log(`truthy and falsy - important in Javascript`)

//All values in js are either truthy or falsy, so they can be tested in an if() statement
//A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.
//all values that are not falsy are considered truthy

//https://developer.mozilla.org/en-US/docs/Glossary/Falsy


//Here are the falsy values
if (false) console.log(`show only if truthy`);
if (0) console.log(`show only if truthy`);
if (-0) console.log(`show only if truthy`);
if (0n) console.log(`show only if truthy`);
if ("") console.log(`show only if truthy`);
if ('') console.log(`show only if truthy`);
if (``) console.log(`show only if truthy`);
if (null) console.log(`show only if truthy`);
if (undefined) console.log(`show only if truthy`);
if (NaN) console.log(`show only if truthy`);

//all values that are not falsy are considered truthy
//Note that this means an empty object {} is truthy
let obj = {};
if (obj) console.log(`show only if truthy`);
