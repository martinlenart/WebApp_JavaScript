//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

let stringTest = '42';
const numberTest = 42;
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

//But here such a test becomes wrong due to js truthy and falsy nature
stringTest = "";
console.log(!stringTest); // truthy - WRONG, because empty string is evaluated to false

stringTest = 5;
console.log(!stringTest); // falsy - WRONG is is not a string, but any number except 0, -0 is evaluated to true


console.log('\nTest for other types')
if (typeof numberTest === 'number' && !Number.isNaN(numberTest))
{
  console.log(`${numberTest} is a valid number`);
}

let test = undefined;
console.log(test, typeof (test));
if (typeof test === 'number' && !Number.isNaN(test))
  console.log(`${test} is a valid number`);

if (typeof test === 'string' && test.length > 0) {
    console.log('test is a string with text');
  }
  

/* Exercises

1. write code that: declare a variable test without assigning it; write to the console test and the typeof test, if test is an non-empty string, if test is a valid number
2. assign to test null,  {}, NaN, and Infinity;
3. assign to test various values such as 5, 5+8, 5+8+'15', 5+8+'15'+{}, '', "", ``;

*/