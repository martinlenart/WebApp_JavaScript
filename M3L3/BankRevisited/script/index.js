
const bankID = document.querySelector('#bankID');
const acountList = document.querySelector('#accountList');
const btnNext = document.querySelector('#btnNext');

let firstAccountIdx = 0;

//set EventHandler
btnNext.addEventListener('click', clickHandler);

//Create accounts and bank
const baccounts = new Account().createRandomMany(1000);
const bank1 = new Bank("Martins bank1", baccounts );

//set bankinformation
bankID.innerHTML = bank1.toString();
renderAccounts(0);


function renderAccounts(firstIdx) {
    for (let index = firstIdx; index < firstIdx + 10; index++) {
        const acc = baccounts[index];

        const li = document.createElement('li');
        li.innerText = acc.toString();

        acountList.appendChild(li);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clickHandler (event)  {
    firstAccountIdx += 10;

    //removeAllChildNodes(acountList);
    renderAccounts(firstAccountIdx)
};
