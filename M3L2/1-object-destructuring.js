//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

//destructuring into separate variables
const animal = {
    Name: 'Red Fox', Group: 'Mammalia', Order: 'Carnivora'
};

//variable names has to same as property names, but order irrelevant
const { Order, Name } = animal;
console.log(Name, Order);

//destructuring into separately declared variables, still same names
const address = {
    country: 'Australia', city: 'Sydney', streetNum: '412',
    streetName: 'Worcestire Blvd'
};

//variable names has to same as property names, but order irrelevant
let country, city;

//Note the () needed in the assignment
({ city, country } = address);
console.log(country, city);



