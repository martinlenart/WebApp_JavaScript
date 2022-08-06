//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

// Object is a way to bundle data and functions 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


// Object literal with nested object
const employee = {
  employeeId: 402,
  firstName: 'Lisa',
  lastName: 'Stanecki',
  birthPlace: {country: 'Canada', city: 'Toronto'}
};

console.log (employee);                 // note how the nested object is printed
console.log(employee.birthPlace.city);  // 'Toronto'

// employee is a const, not the property this I can change
employee.firstName = 'Laban';
console.log (employee.firstName);

// You can add properties through array notation or . notation
employee.nickname = 'The Izz';
employee['adress'] = {street: 'Fulterton drive 123', zipCode: '12345', city: 'Chicago'};
console.log(employee.nickname);
console.log(employee.adress.street);

// Add a computed property name using template literal.
// Note how the property value is dynamic
const i = 10;
employee[`sequence${i}`] = 'Another new property value';
console.log(employee.sequence10);

//delete a property by using delete keyword
delete employee.employeeId;
delete employee.sequence10;
console.log(employee);