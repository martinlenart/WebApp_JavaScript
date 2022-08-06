//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

const emailValid = "abeLincoln@gmail.com";
const emailInvalid = "abeLincoln@gmail .com";
const regex = /\S+@\S+\.\S+/;

if (regex.test(emailValid)) {
  console.log(`${emailValid} is valid`);
}
else {
  console.log(`${emailValid} is not valid`);
}

if (regex.test(emailInvalid)) {
  console.log(`${emailInvalid} is valid`);
}
else {
  console.log(`${emailInvalid} is not valid`);
}


