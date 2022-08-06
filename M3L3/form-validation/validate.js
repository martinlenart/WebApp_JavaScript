//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//Install node package validator for client side usage
//https://validatejs.org
//https://javascript.plainenglish.io/how-to-use-npm-and-import-export-modules-in-javascript-31a7f66a2064
//in your local server directory (typcially directory of this file) open a terminal
//install package.json using 'npm init -y'
//install validator using npm install validator
//Now you should have two json files, and a node modules directory: node_modules, package-lock.json, package.json

// use it on the client side by adding to the html file
//<script type="text/javascript" src="validator.min.js"></script>

//js function of interest
//https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
//https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext


const legend = document.querySelector('#example legend');
const inputs = document.querySelectorAll('#example input');


//set new legend text5
legend.textContent = `Let's try som validation`;

inputs.forEach(input => {
  // fire an event each time an input value changes
  input.addEventListener('input', () => {
    // pass the input value to the validation function
    const valid = inputValidator(input.id, input.value);

    // if not valid set the aria-invalid attribute to true
    if (input.value.length > 0) {
      if (valid) {
        input.removeAttribute('aria-invalid');
      }
      else {
        input.setAttribute('aria-invalid', 'true');
      }
    }
  });
});

function inputValidator(id, value) {
  // check email validity
  if (id === 'email') {
    return validator.isEmail(value);
  }

  // check US postal code validity
  if (id === 'postal') {
    return validator.isPostalCode(value, 'SE');
  }

  return false;
}

const submitHandler = event => {
  event.preventDefault();

  const submitMessage = document.querySelector('#submitMessage');
  submitMessage.textContent = `Submitting`;
}