//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Glossary/IDL
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
//checked is an IDL (js only) attribute of a checkbox

const checkBox = document.getElementById('check');
const acceptButton = document.getElementById('accept');

const validate = () => {
  if (checkBox.checked) {
    acceptButton.disabled = false;
  } else {
    acceptButton.disabled = true;
  }
}

checkBox.addEventListener('click', validate);

//Using querySelector
document.getElementById('checkAll').onclick = function() {  
  var markedCheckbox = document.querySelectorAll('.checkboxes input[type="checkbox"]:checked');  
  for (var checkbox of markedCheckbox) {  
    console.log(checkbox.id + ': ' + checkbox.value);  
  }  
}  