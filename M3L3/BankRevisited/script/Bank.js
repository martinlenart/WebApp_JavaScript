//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

console.group('Nu skapar vi kontot');
function Account({ accountNr, accountTotal, firstName, lastName, city } =
    { accountNr: 'xxx-xxx-xxx', accountTotal: 0, firstName: 'unknown', lastName: 'unknown', city: 'unknown' }) {

    this.accountNr = accountNr;
    this.accountTotal = accountTotal;

    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
}

Account.prototype = {

    rnd: function (min, max) { return Math.floor(Math.random() * (max - min)) + min;},

    toString: function () { return `account: ${this.accountNr} has amount ${this.accountTotal}kr, owner: ${this.firstName} ${this.lastName} from ${this.city}`},

    createRandom: function () {
        let _firstnames = "Fred, John, Mary, Jane, Oliver, Marie, Per, Thomas, Ann, Susanne".split(',').map(s => s.trim());
        let _lastnames = "Johnsson, Pearsson, Smith, Ewans, Andersson, Svensson, Shultz, Perez".split(',').map(s => s.trim());
        let _city = "Stockholm, Gävle, Oslo, Trondheim, Vaasa, Helsinki, Riga, Munich, Düsseldorf, Seville, Granada".split(',').map(s => s.trim());
    
        const a = new Account();
        a.accountNr = `${this.rnd(100,1000)}-${this.rnd(100,1000)}-${this.rnd(100,1000)}`;
        a.accountTotal = this.rnd(0,50000);

        a.firstName = _firstnames[this.rnd(0,_firstnames.length)];
        a.lastName = _lastnames[this.rnd(0,_lastnames.length)];
        a.city = _city[this.rnd(0,_city.length)];

        return a;
    },

    createRandomMany: function (nrOfItems) {
        if (typeof (nrOfItems) !== 'number')
            throw new TypeError('nrOfItems nust me a number')

        let result = [];
        for (let i = 0; i < nrOfItems; i++) {
            result.push(this.createRandom());
        }
        return result;
    }

};

/*
const a = new Account();
console.log(''+a);

const b = new Account().createRandom();
console.log(''+b);

const accounts = new Account().createRandomMany(10);
accounts.forEach(acc => console.log(''+acc));

console.log(...new Account().createRandomMany(10));
console.groupEnd();
*/

console.group('ny skapar vi banken');
class Bank {

    //class contructor
    constructor(name = 'unknown', accounts = []) {

        this.name = name;
        this.accounts = accounts;
    }

    toString() { return `Bank: ${this.name} has ${this.accounts.length} accounts with a total of ${this.Total()}kr`}

    Total() { 
        if (this.accounts.length === 0) return 0;

        const total = this.accounts.reduce( (tot, acc) => tot + acc.accountTotal, 0);
        return total}

    
    TotalCity(city) {
        const total = accounts.reduce((tot, item) => {
            if (city.trim().toLowerCase() === item.city.trim().toLowerCase())
                return tot+item.accountTotal;
            return tot;}    //felet innan lunch , 0
            , 0);
        return total;
    }

}
/*
const baccounts = new Account().createRandomMany(1000);

const moneyOnly = baccounts.map(item => item.accountTotal);
const tot = moneyOnly.reduce((tot, money)=> tot+money, 0);
console.log(tot);

const bank1 = new Bank("Martins bank1", baccounts );
console.log(bank1);
console.log(''+bank1);

console.log(bank1.Total());
console.log(bank1.TotalCity('Vaasa'));
*/
console.groupEnd()



