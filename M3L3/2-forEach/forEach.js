//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
const items = document.querySelectorAll('.mystyles');
const item = document.querySelector('.mystyles');

//traversing with .ForEach
items.forEach(item => {
  console.log(item.innerText);
});

//traversion with for..of
for (const item of items) {
  console.log(item.innerHTML); 
}
