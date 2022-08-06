//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

//Below I declare two parameters as needed and then the rest, numbers, is expaned into an array
function sumRounds(mustHave1, mustHave2, ...numbers) {
  let sum = mustHave1+mustHave2;

  //You should check that the parameters are of the type you expect
  if (typeof (mustHave1) !== 'number')
    throw new TypeError("alla parameters must be of type number");
  if (typeof (mustHave2) !== 'number')
    throw new TypeError("alla parameters must be of type number");
  if (numbers.length>0 && typeof (numbers[0]) !== 'number')
    throw new TypeError("alla parameters must be of type number");


  for(let i = 0; i < numbers.length; i+=1)  {
    sum += Math.round(numbers[i]);
  }
  return sum;
}

console.log(sumRounds(5, 16, 18.1));          // 39
console.log(sumRounds(2.3, 4, 5, 16, 18.1));  // 45
