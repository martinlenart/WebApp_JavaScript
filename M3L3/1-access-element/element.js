//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
//https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes


// select the element
const demodiv = document.getElementById('demodiv');
console.log(demodiv);

// select the parent of the element
const parent = demodiv.parentNode;
console.log(parent);

// select the children
const children = demodiv.childNodes;
console.log(children);

// traverse collection of child elements
let outputString = '';

if (demodiv.hasChildNodes()) {
  children.forEach(child => {
    outputString += `has child ${child.nodeName} `;
  });
}
console.log(outputString);
