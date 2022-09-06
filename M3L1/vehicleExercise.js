'use strict';


function createRandomVehicle() {
    const _regnumber = "NMN, ABC, KLW, SVA, PLU, BCX".split(',').map(s => s.trim());;
    const _make = "Volvo, BMW, Audi".split(',').map(s => s.trim());;
    const _model = "XC70, XC90, i300, A4".split(',').map(s => s.trim());;
    const _firstnames = "Fred, John, Mary, Jane, Oliver, Marie, Per, Thomas, Ann, Susanne".split(',').map(s => s.trim());
    const _lastnames = "Johnsson, Pearsson, Smith, Ewans, Andersson, Svensson, Shultz, Perez".split(',').map(s => s.trim());
    const _emaildomains = "gmail.com, hotmail.com, icloud.com, tele2.se, telia.se".split(',').map(s => s.trim());

    const vehicle = {};
    Object.defineProperty(vehicle, 'regNumber',
        { value: `${_regnumber[rnd(0, _regnumber.length)]} ${rnd(100, 1000)}`, enumerable: true });
    Object.defineProperty(vehicle, 'make', { value: _make[rnd(0, _make.length)], enumerable: true });
    Object.defineProperty(vehicle, 'model', { value: _model[rnd(0, _model.length)], enumerable: true });
    Object.defineProperty(vehicle, 'year', { value: rnd(2000, 2023), enumerable: true });

    Object.defineProperty(vehicle, 'age', {
        get() {
            const today = new Date();
            return today.getFullYear() - this.year;
        }
    });

    const owner = {
    firstName: _firstnames[rnd(0, _firstnames.length)],
    lastName: _lastnames[rnd(0, _lastnames.length)]}

    owner.email = `${owner.firstName}.${owner.lastName}@${_emaildomains[rnd(0, _emaildomains.length)]}`;

    vehicle.owner = owner;
    return vehicle;
}

//private static helper function, needs to be put at the top
//randomNumber = Math.floor(Math.random() * (max - min) ) + min;
//non inclusive max, but inclusive min
function rnd(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function cloneVehicle(vehicle) {

    return JSON.parse(JSON.stringify(vehicle));;
}

//Recursive helper to check object value equality by means of comparing properties
function isEqual(obj1, obj2) {
    var props1 = Object.keys(obj1);
    var props2 = Object.keys(obj2);

    if (props1.length != props2.length) {
        return false;
    }

    for (var i = 0; i < props1.length; i++) {
        let val1 = obj1[props1[i]];
        let val2 = obj2[props1[i]];
        let isObjects = isObject(val1) && isObject(val2);

        if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
            return false;ˇ
        }
    }
    return true;
}
function isObject(object) {
    return object != null && typeof object === 'object';
}


const v1 = createRandomVehicle();
console.log(v1);

const v2 = cloneVehicle(v1);
console.log(v2);

console.log(isEqual(v1, v2));

const v3 = createRandomVehicle();
console.log(isEqual(v1, v3));


//assign toString function only
v1.toString = function () { return `The vehicle is ${this.age} years old` };

//assign new prototype to Object
let proto = {
    toString: function () { return `The vehicle is ${this.age} years old` }
}

//now we can assign the prototype to the created objects
Object.setPrototypeOf(v3, proto);

console.log(''+v1);
console.log(''+v3);

let vehicles = [];
for (let index = 0; index < 1000; index++) {
    vehicles.push(createRandomVehicle());    
}
console.log(vehicles);

const oldvehicles = vehicles.filter(v => v.age > 5);
console.log(oldvehicles.length);

const ages = oldvehicles.map(v => v.age);
console.log(ages);

const uniqueAges = [...new Set(ages)].sort((a,b)=> b-a);
console.log(uniqueAges);

const avgAge = uniqueAges.reduce((prev, curr) => prev+curr, 0)/uniqueAges.length;
console.log(avgAge);

console.log(Math.max(...uniqueAges));



/* Exercises
1. Gör en Refractor på functionerna, CreateRandomVehicle, cloneVehicle, isEqual, isObject, toString så att de läggs i ett
    prototyp object - vehicle_proto.  Tänk på att man kan använda this, och att createRandomVehicle kan ta formen av att initiera ett 
    befintligt object
2. Skapa ett object, vehicle, som har prototypen vehicle_proto och sätt det till random värden
3. Skapa en array med 1000 vehicles, all_vehicles, alla satta med random värden
4. Använd filter och spread operator... för att skapa två shallow clones av  all_vechiles som bara innehåller BMW ägare. Hur många 
   BMW ägare finns det?
5. Ändra namnen på alla BMW ägare i en clone till Bruce Wayne. Vad händer med ägarnamnet i den andra shallow clone?
6. Skapa två shallow clone av alla Volvo ägare från, all_vehicles, MEN clonerna ska BARA innehålla unika förnamn (använd map, Set).
7. Ändra förnamnen på alla Volvo ägare i en clone till Allan. Vad händer med förnamnet i den andra shallow clone?
*/
