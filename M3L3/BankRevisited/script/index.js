
const bankID = document.querySelector('#bankID');
const acountList = document.querySelector('#accountList');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

let firstAccountIdx = 0;

//set EventHandler
btnNext.addEventListener('click', clickNext);
btnPrev.addEventListener('click', clickPrev);

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

function clickNext (event)  {
    firstAccountIdx += 10;

    removeAllChildNodes(acountList);
    renderAccounts(firstAccountIdx)
};

function clickPrev (event)  {
    firstAccountIdx -= 10;
    if (firstAccountIdx <= 0) firstAccountIdx = 0;

    removeAllChildNodes(acountList);
    renderAccounts(firstAccountIdx)
};
