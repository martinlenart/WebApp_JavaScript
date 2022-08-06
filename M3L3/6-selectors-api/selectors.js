//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

const imgs = document.querySelectorAll('article img');
imgs.forEach(img => {
  console.log(img.getAttribute('src'));
});
