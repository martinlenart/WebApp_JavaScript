//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect


const data = ['Hello 0', 'Hello 1', 'Hello 2'];

// compute position for pop up relative hover object
function compPos(obj) {
  const rect = obj.getBoundingClientRect();
  
  const top = rect.top + rect.height + 10;
  return [rect.left, top];
}

// process return
function showWindow(idHover, message) {
  const img = document.getElementById(idHover);

  console.log(img);
  // derive location for pop up
  const loc = compPos(img);
  const left = `${loc[0]}px`;
  const top = `${loc[1]}px`;

  console.log(left, top);

  // create pop up
  const div = document.createElement('popup');
  div.id = 'popup';
  const txt = document.createTextNode(message);
  div.appendChild(txt);

  // style pop up
  div.setAttribute('class', 'popup');
  div.setAttribute('style', `position: fixed; left: ${left}; top: ${top}`);
  document.body.appendChild(div);
}

function getInfo(idHover) {
  //in this case, simply the content of a data[], but could be a more complex alorith or asynch fetch
  return data[idHover];
}

function removeWindow() {
  const popup = document.getElementById('popup');
  if (popup) popup.parentNode.removeChild(popup);
}

window.onload = () => {
  const imgs = document.querySelectorAll('img');
  imgs.forEach(img => {
    img.addEventListener(
      'mouseover',
      () => {
        const data = getInfo(img.id);
        showWindow(img.id, data);
      });

    img.addEventListener(
      'mouseout',
      () => {
        removeWindow();
      });
  });
};
