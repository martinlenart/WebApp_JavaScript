//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//Note: there is an error in the book. property is visibility, not hidden

// get the target div
const pToHide = document.getElementById('toHide');

//Toggle visibility using the two different properties
document.getElementById('useHidden').addEventListener('click', () => {
  pToHide.style.visibility = (pToHide.style.visibility !== 'hidden')? 'hidden' : 'visible';
});

document.getElementById('useDisplay').addEventListener('click', () => {
  pToHide.style.display = (pToHide.style.display !== 'none')? 'none' : 'block';
});
