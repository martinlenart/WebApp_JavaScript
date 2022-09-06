'use strict';


//assign new prototype to Object
const vehicle_proto = {
    toString: function () { return `The vehicle is ${this.age} years old` },
    rnd: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },

    cloneVehicle: function (vehicle) {
        return JSON.parse(JSON.stringify(vehicle));;
    },

    isObject: function isObject(object) {
        return object != null && typeof object === 'object';
    },

    isEqual: function (obj1) {
        var props1 = Object.keys(obj1);
        var props2 = Object.keys(this);

        if (props1.length != props2.length) {
            return false;
        }

        for (var i = 0; i < props1.length; i++) {
            let val1 = obj1[props1[i]];
            let val2 = this[props1[i]];
            let isObjects = isObject(val1) && isObject(val2);

            if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
                return false; ˇ
            }
        }
        return true;
    },

    initRandomVehicle: function () {
        const _regnumber = "NMN, ABC, KLW, SVA, PLU, BCX".split(',').map(s => s.trim());;
        const _make = "Volvo, BMW, Audi".split(',').map(s => s.trim());
        const _model = "XC70, XC90, i300, A4".split(',').map(s => s.trim());;
        const _firstnames = "Fred, John, Mary, Jane, Oliver, Marie, Per, Thomas, Ann, Susanne".split(',').map(s => s.trim());
        const _lastnames = "Johnsson, Pearsson, Smith, Ewans, Andersson, Svensson, Shultz, Perez".split(',').map(s => s.trim());
        const _emaildomains = "gmail.com, hotmail.com, icloud.com, tele2.se, telia.se".split(',').map(s => s.trim());

        this.regNumber = `${_regnumber[this.rnd(0, _regnumber.length)]} ${this.rnd(100, 1000)}`;
        this.make = _make[this.rnd(0, _make.length)];
        this.model = _model[this.rnd(0, _model.length)];
        this.year = this.rnd(2000, 2023);

        this.owner = {};
        this.owner.firstName = _firstnames[this.rnd(0, _firstnames.length)];
        this.owner.lastName = _lastnames[this.rnd(0, _lastnames.length)];
        this.owner.email = `${this.owner.firstName}.${this.owner.lastName}@${_emaildomains[this.rnd(0, _emaildomains.length)]}`;
    },

    get age() {
        const today = new Date();
        return today.getFullYear() - this.year;
    }
}

const vehicle = Object.create(vehicle_proto);


console.group('Exercise 1 and 2');

vehicle.initRandomVehicle();
console.log(vehicle);
console.groupEnd();


console.group('Exercise 3');

const all_vehicles = [];
for (let index = 0; index < 1000; index++) {

    const vehicle = Object.create(vehicle_proto);
    vehicle.initRandomVehicle();
    all_vehicles.push(vehicle);    
}
console.log(all_vehicles);
console.groupEnd();


console.group('Exercise 4');

const vClone1 = all_vehicles.filter(v => v.make == "BMW");
const vClone2 = [...vClone1];
console.log(`Number of BMW owners ${vClone1.length} (${vClone2.length})`);
console.groupEnd();


console.group('Exercise 5');

vClone1.map(v => {
    v.owner.firstName = 'Bruce';
    v.owner.lastName = 'Wayne';});

console.log(vClone1);
console.log(vClone2);
console.log(`${vClone2[0].owner.firstName} ${vClone2[0].owner.lastName}`);
console.log(`${vClone2[vClone2.length-1].owner.firstName} ${vClone2[vClone2.length-1].owner.lastName}`);
console.groupEnd();


console.group('Exercise 6');

let vClone3 = all_vehicles.filter(v => v.make == "Volvo").map(v=> v.owner.firstName);
vClone3 = [...new Set(vClone3)];
const vClone4 = [...vClone3];

vClone3 = vClone3.map(v => 'Allan');
console.log(vClone3);
console.log(vClone4);
console.groupEnd();




/* Exercises
1. Gör en Refractor på functionerna, CreateRandomVehicle, cloneVehicle, isEqual, isObject, toString så att de läggs i ett
    prototyp object - vehicle_proto.  Tänk på att man kan använda this, och att createRandomVehicle kan ta formen av att initiera ett 
    befintligt object
2. Skapa ett object, vehicle, som har prototypen vehicle_proto och sätt det till random värden. Låt alla properties vara normala object 
   properties, dvs du behöver inte använda Object.defineProperty
3. Skapa en array med 1000 vehicles, all_vehicles, alla satta med random värden
4. Använd filter och spread operator... för att skapa två shallow clones av  all_vechiles som bara innehåller BMW ägare. Hur många 
   BMW ägare finns det?
5. Ändra namnen på alla BMW ägare i en clone till Bruce Wayne. Vad händer med ägarnamnet i den andra shallow clone?
6. Skapa två shallow clone av alla Volvo ägare från, all_vehicles, MEN clonerna ska BARA innehålla unika förnamn (använd map, Set).
7. Ändra förnamnen på alla Volvo ägare i en clone till Allan. Vad händer med förnamnet i den andra shallow clone?
*/
