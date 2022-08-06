//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//{discardTime, discardYears, precision} must be named exactly the same in the caller argument object
//notice default value on precision, but not on the other

function dateDifferenceInSeconds(newerDate, olderDate, {discardTime, discardYears, precision} = {precision:2}) {
  
  // Note: typechecking omitted for brevity


  if (discardTime) {
    newerDate = newerDate.setHours(0,0,0,0);
    olderDate = newerDate.setHours(0,0,0,0);
  }
  if (discardYears) {
    newerDate.setYear(0);
    olderDate.setYear(0);
  }
    
  const differenceInSeconds = (newerDate.getTime() - olderDate.getTime())/1000;  
  return differenceInSeconds.toFixed(precision);
}

// Compare the current date to an older date
const newDate = new Date();
const oldDate = new Date(2010, 1, 10);

// Call the function without an object literal
let difference = dateDifferenceInSeconds(newDate, oldDate);
console.log(difference);

// Call the function with an object literal, and specify two properties
difference = dateDifferenceInSeconds(newDate, oldDate, {discardYears:true, precision:3});
console.log(difference);
