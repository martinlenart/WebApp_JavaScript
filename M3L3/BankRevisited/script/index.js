
const bankID = document.querySelector('#bankID');
const acountList = document.querySelector('#accountList');


//Create accounts and bank
const baccounts = new Account().createRandomMany(1000);
const bank1 = new Bank("Martins bank1", baccounts );

//set bankinformation
bankID.innerHTML = bank1.toString();

for (let index = 0; index < 10; index++) {
    const acc = baccounts[index];

    const li = document.createElement('li');
    li.innerText = acc.toString();

    acountList.appendChild(li);
}

console.log(bank1.Total());
console.log(bank1.TotalCity('Vaasa'));