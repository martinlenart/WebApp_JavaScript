//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode


console.group('Every object has a prototype, empty object has Object as prototype')
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// https://www.w3schools.com/js/js_object_prototypes.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

let o = {prot:'hello'};
let _proto = Object.getPrototypeOf(o);
console.log(_proto);             //Object literals {} has Object as prototype, inherited properties and functions from Object
console.log(o.toString());      //Object has toString() defined for example
o.toString = function () { return `${this.prot}`; };
console.log(o);                 //o is still written out as an object
console.log('' + o);             //See the trick here, forcing o to use toString()

//I can change toString() of the prototype object without affecting the child
_proto.toString = function () { return 'string of Object as prototype'; };
console.log('' + _proto);    //Prototype
console.log('' + o);              //Child
console.groupEnd();


console.group('Properties are inherited from prototype object');
o = { oprop1: 'oprop1-value', oprop2: 'oprop2-value' };
let oChild = Object.create(o);    //oChild now has o as prototype
_proto = Object.getPrototypeOf(oChild);

console.log(oChild.oprop1, oChild.oprop2);  //And the properties are inherited
console.log(oChild);                        //But not visible when you write the object
console.log(_proto);              //Only when showing prototype

for (const props in oChild) { console.log(props); } //ofcourse, you can iterate over the proto props
console.groupEnd();


console.group('Properties inherited are readonly')
//A Key feature of js is that inheritance is only happening when reading a proto property, not when setting. 
//Unless getters and setters are used in the prototype

oChild.oChildprop1 = 'oprop1-value';            //We add a new proterty
oChild.oprop2 = 'oprop2-new-value';             //We implictly add a new property as oprop2 is from the proto

console.log(o);                                 //o props are unchanged
console.log(oChild);                            //props added to oChild
console.log(oChild.hasOwnProperty('oprop2'));   //true - hasOwnProperty() can be used to test if it is a prototype property or not
console.groupEnd();


console.group('But you can change inherited properties by accesing the prototype directly')
_proto.oprop1 = 'oprop1-new-value';   //We explicitly change the proto property
console.log(oChild);                            //prop not added to oChild
console.log(oChild.oprop1);                     //prop updated at proto
console.log(oChild.hasOwnProperty('oprop1'));   //false   
console.groupEnd();





