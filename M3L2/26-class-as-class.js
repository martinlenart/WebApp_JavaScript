//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

console.group('using class to create a class Person and create several objects');

class Person {

    //using a static field to show how many has been created randomly
    static statNrRandomFilled = 0;

    //class contructor
    constructor({ firstName, lastName, birthDate } = { firstName: '', lastName: '', birthDate: undefined },
        { street, city, country } = { street: '', city: '', country: '' }) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;

        this.address = {};
        this.address.street = street;
        this.address.city = city;
        this.address.country = country;

        this.emails = [];
    }

    //class methods
    set email(value) {
        let pattern = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
        const regex = RegExp(pattern);

        if (!regex.test(value))
            throw new TypeError('Wrong email format');

        this.emails.push(value);
    }
    get age() {
        if (typeof this.birthDate === 'undefined') return undefined;        // Note this.birthDate, dont forget this. because a non declared variable is undefines

        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();

        // Adjust if the bithday hasn't happened yet this year
        const monthDiff = today.getMonth() - this.birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthDate.getDate())) {
            age -= 1;
        }
        return age;
    }
    toString() { return `${this.firstName} ${this.lastName} from ${this.address.city}, ${this.address.country} is ${this.age} years old.` }
    greeting() { return `Hello ${this.firstName}! You live on ${this.address.street}` }

    static #_createRandom() {
        let _firstnames = "Fred, John, Mary, Jane, Oliver, Marie, Per, Thomas, Ann, Susanne".split(',').map(s => s.trim());
        let _lastnames = "Johnsson, Pearsson, Smith, Ewans, Andersson, Svensson, Shultz, Perez".split(',').map(s => s.trim());
        let _street = "Backvägen, Ringvägen, Smith street, Graaf Recke Str, Vasagatan, Odenplan, Birger Jarlsgatan".split(',').map(s => s.trim());
        let _city = "Stockholm, Gävle, Oslo, Trondheim, Vaasa, Helsinki, Riga, Munich, Düsseldorf, Seville, Granada".split(',').map(s => s.trim());
        let _country = "Sverige, Norge, Finland, Lettland, Tyskland, Spanien".split(',').map(s => s.trim());

        let p = new Person();
        p.firstName = _firstnames[Math.floor(Math.random() * _firstnames.length)];
        p.lastName = _lastnames[Math.floor(Math.random() * _lastnames.length)];
        p.address.street = _street[Math.floor(Math.random() * _street.length)] + ' ' + (Math.floor(Math.random() * (100 + 1)))
        p.address.city = _city[Math.floor(Math.random() * _city.length)];
        p.address.country = _country[Math.floor(Math.random() * _country.length)];

        while (typeof (p.birthDate) === 'undefined') {
            try {
                //randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
                let year = Math.floor(Math.random() * (2000 - 1970 + 1)) + 1970;
                let month = Math.floor(Math.random() * 12 + 1);
                let day = Math.floor(Math.random() * 31 + 1);
                p.birthDate = new Date(year, month, day)
            }
            catch { }
        }

        Person.statNrRandomFilled++;
        return p;
    }
    static createRandom(nrOfItems = 1) {
        if (typeof (nrOfItems) !== 'number')
            throw new TypeError('nrOfItems nust me a number')

        let result = [];
        for (let i = 0; i < nrOfItems; i++) {
            result.push(this.#_createRandom());
        }

        if (result.length == 1)
            return result[0]; // return the object

        //otherwise, return the array
        return result;
    }
}

const aPerson = Person.createRandom();
console.log(aPerson)
console.log('' + aPerson);
console.log(aPerson.greeting());

let persons = Person.createRandom(10);
persons = persons.sort((first, second) => {

    if (first.address.country.toLowerCase() < second.address.country.toLowerCase())
        return -1;
    if (first.address.country.toLowerCase() > second.address.country.toLowerCase())
        return 1;
    return 0;
});

// looping through array with for..of
for (const iterator of persons) {
    console.log('' + iterator);
    console.log(iterator.greeting());
}

console.log(`\nIn total ${Person.statNrRandomFilled} instances created and filled with random data`);
console.groupEnd();


console.group('Checking the instance class (function) of an object')
console.log(aPerson instanceof Person);
console.log(aPerson instanceof Object);
console.log(aPerson instanceof Date);

//Now you can get the name of the instance
console.log(aPerson.constructor.name);
console.groupEnd();

console.group('Added an setter for email addresses')
aPerson.email = 'hello53@hotmail.se';
aPerson.email = 'hello77@gmail.com';
console.log(aPerson.emails);
console.groupEnd();

/* Exercises
1. Add a random email generator to createRandom() and print out to verify email addresses are created in random
2. Sort the persons array according to city befor eprinted out

3. Create a new class Car that
    - has properties Make, Year, Model, Licence plate, City
    - Code createRandom and createRandomMany to generate and array of 20 ranomly initiated instances of Cars
    - Sort the array according to cities and printout
*/
