let stringTest = '42';
let numberTest = 42;
const blankTest = '';
const nullTest = null;
const wrappedTest = new String('42');


console.log('\nBasic string test');
if (typeof stringTest === 'string') {
  console.log('stringTest is a string');
}
if (typeof numberTest === 'string') {
  console.log('numberTest is a string');
}
if (typeof blankTest === 'string') {
  console.log('blankTest is a string');
}
if (typeof nullTest === 'string') {
  console.log('nullTest is a string');
}
if (typeof wrappedTest === 'string') {
  console.log('wrappedTest is a string');
}

console.log('\nTest for content in a string');
if (typeof stringTest === 'string' && stringTest.length > 0) {
  console.log('stringTest is a string with text');
}
if (typeof blankTest === 'string' && blankTest.length > 0) {
  console.log('blankTest is a string with text');
}
if (typeof nullTest === 'string' && nullTest.length > 0) {
  console.log('nullTest');
}
if (typeof wrappedTest === 'string' && wrappedTest.length > 0) {
  console.log('wrappedTest');
}

console.log('\nFind even an object where String is a prototype, a wrapped string');
if (typeof wrappedTest === 'string' ||
  String.prototype.isPrototypeOf(wrappedTest)) {
  console.log(`wrappedTest is a string, however, wrappedTest is of type ${typeof wrappedTest}`)
}


console.log('\nDANGER zone because of truthy and falsy');
//Do not use sloppy js coding using truthy and falsy to test
stringTest = undefined;
console.log(!stringTest); // truthy - Correct, it is not a string

stringTest = null;
console.log(!stringTest); // truthy - Correct, it is not a string

stringTest = "a string";
console.log(!stringTest); // falsy - Correct, it is a string

//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

//But here such a test becomes wrong due to js truthy and falsy nature
stringTest = "";
console.log(!stringTest); // truthy - WRONG, because empty string is evaluated to false

stringTest = 5;
console.log(!stringTest); // falsy - WRONG is is not a string, but any number except 0, -0 is evaluated to true


console.log('\nTest for other types')
numberTest = Number.POSITIVE_INFINITY;
if (typeof numberTest === 'number' && !Number.isNaN(numberTest)) {
  console.log(`${numberTest} is a valid number`);
}

function myFunc(myVar) {

  if (typeof myVar !== 'string') {
    console.log("\nwrong type - cannot run the algorithm");
    return;
  }

  if (myVar.length !== 0) {
    //Non empty string - do the algorithm
    console.log("\nNon empty string - do the algorithm");
  }
  else {
    //if the string is empty, set some default values and do the algorithm
    console.log("\nempty string, set some default values and do the algorithm");
  }
}

myFunc("Martin");
myFunc("");
myFunc(5);
myFunc(0);

/* Exercises

1. write code that: declare a variable myVar without assigning it; 
   write to the console myVar and the typeof myVar, 
2. assign and check if myVar is an non-empty string or if myVar is a valid number
3. assign to myVar null,  {}, NaN, and Infinity and write checks


*/