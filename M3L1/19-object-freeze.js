'use strict';
// Remove the // comment marker above to test this example in strict mode

console.log(`Make an object readonly by using Object.freeze()`)
const customer = {
  firstName: 'Josephine',
  lastName: 'Stanecki'
};
  
console.log(customer);
console.log('Change customer name');
customer.firstName = 'Jo';
console.log(customer);

console.log('Freeze customer object');
Object.freeze(customer);

console.log('Attempt to change customer name');

// This fails silently (or throws an exception in strict mode)
//customer.firstName = 'Jose';

// Below will also fail when frozen
//customer.middleInitial = 'P';
//delete customer.lastName;
console.log(customer);


/* Exercises

1. modify Object.freeze() to Object.seal() and text with and without strict mode

*/