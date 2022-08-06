//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
//https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors

// select all elements that have a class attribute
let elems = document.querySelectorAll('*[class]');
elems.forEach(elem => {
  console.log(`The following element has a class attribute: ${elem}`);
});

// select all elements that have the 'red' class
const reds = document.querySelectorAll('*[class="red"]');
reds.forEach(red => {
  console.log(
    `The following element has a class attribute with a red value: ${red}`
  );
});


// select <div> elements that have a class attribute
elems = document.querySelectorAll('div[class]');
elems.forEach(elem => {
  console.log(`The following <div> element has a class attribute: ${elem}`);
});
