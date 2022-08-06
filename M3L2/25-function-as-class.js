//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

console.group('creating a simple object');
const person = {
    firstName: 'Lisa',
    lastName: 'Stanecki',
    birthDate: new Date(1996, 5, 12),
    address: {
        street: 'Worcestire Blvd 412',
        country: 'Australia', city: 'Sydney'
    },

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
    },
}

//override toString()
person.toString = function () { return `${this.firstName} ${this.lastName} from ${this.address.city}, ${this.address.country} is ${this.age} years old.` };

//Set a function property to the object
person.greeting = function () { return `Hello ${this.firstName}! You live on ${this.address.street}` }

console.log('' + person);
console.log(person.greeting());
console.groupEnd();

console.group('using function to create a class Person and create several objects');

//Step 1: create a constructor function with initiation, not I use parameter destructuring to set named parameters
//        set the class properties using this.property notation
function Person ({ firstName, lastName, birthDate } = { firstName: '', lastName: '', birthDate: undefined },
    { street, city, country } = { street: '', city: '', country: '' }) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;

    this.address = {};
    this.address.street = street;
    this.address.city = city;
    this.address.country = country;
}

//Step 2: set the methods, getters and setters as properties in a prototype object  
Person.prototype = {
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
    },
    toString: function () { return `${this.firstName} ${this.lastName} from ${this.address.city}, ${this.address.country} is ${this.age} years old.` },
    greeting: function () { return `Hello ${this.firstName}! You live on ${this.address.street}` },

    
}

//Now I can use the function as a class where every object inherits the properties and methods
const p1 = new Person();
console.log(p1)
console.log('' + p1);
console.log(p1.greeting());

const p2 = new Person({ firstName: "John", lastName: "Smith", birthDate: new Date(1990, 4, 23) }, { street: "Fullerton Ave 3", city: "Chicago", country: "USA" });
console.log(p2)
console.log('' + p2);
console.log(p2.greeting());

const p3 = new Person({ firstName: "Maria", lastName: "Perez", birthDate: new Date(1988, 5, 18) }, { street: "Juan José", city: "Seville", country: "Spain" });
console.log(p3)
console.log('' + p3);
console.log(p3.greeting());
console.groupEnd();

console.group('Generating objects which are randomly initialized');

//You know me, I love this random initialization to create many objects. Here it is in js
//I add it to the prototype - could have been done in the declaration
Person.prototype.createRandom = function () {
    let _firstnames = "Fred, John, Mary, Jane, Oliver, Marie, Per, Thomas, Ann, Susanne".split(',').map(s => s.trim());
    let _lastnames = "Johnsson, Pearsson, Smith, Ewans, Andersson, Svensson, Shultz, Perez".split(',').map(s => s.trim());
    let _street = "Backvägen, Ringvägen, Smith street, Graaf Recke Str, Vasagatan, Odenplan, Birger Jarlsgatan".split(',').map(s => s.trim());
    let _city = "Stockholm, Gävle, Oslo, Trondheim, Vaasa, Helsinki, Riga, Munich, Düsseldorf, Seville, Granada".split(',').map(s => s.trim());
    let _country = "Sverige, Norge, Finland, Lettland, Tyskland, Spanien".split(',').map(s => s.trim());

    let p = new Person();
    p.firstName = _firstnames[Math.floor(Math.random() * _firstnames.length)];
    p.lastName = _lastnames[Math.floor(Math.random() * _lastnames.length)];
    p.address.street = _street[Math.floor(Math.random() * _street.length)] + ' ' + (Math.floor(Math.random() * (100+1)))
    p.address.city = _city[Math.floor(Math.random() * _city.length)];
    p.address.country = _country[Math.floor(Math.random() * _country.length)];

    while (typeof (p.birthDate) === 'undefined')
    {
        try{
            //randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
            let year = Math.floor(Math.random() * (2000 - 1970 + 1)) + 1970;
            let month = Math.floor(Math.random() * 12+1);
            let day = Math.floor(Math.random() * 31 + 1);
            p.birthDate = new Date (year, month, day)
        }
        catch{}
    }
    return p;
},
Person.prototype.createRandomMany = function (nrOfItems) {
    if (typeof (nrOfItems) !== 'number')
        throw new TypeError('nrOfItems nust me a number')

    let result = [];
    for (let i = 0; i < nrOfItems; i++)
    {
        result.push(this.createRandom());
    }
    return result;
}

const aPerson = new Person().createRandom();
console.log(aPerson)
console.log('' + aPerson);
console.log(aPerson.greeting());

const persons = new Person().createRandomMany(10);
// looping through array with for()
for (let i=0; i<persons.length; i++) {
    console.log(persons[i].greeting());
}

// looping through array with for..of
for (const iterator of persons) {
    console.log(''+iterator);
}
console.groupEnd();


console.group('Checking the instance class (function) of an object')
console.log(aPerson instanceof Person);
console.log(aPerson instanceof Object);
console.log(aPerson instanceof Date);
console.groupEnd();
