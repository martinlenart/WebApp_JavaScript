//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

class Chef
{
  //private property definition, must be done here in the class
  #secret_recipe = "Bavarian knödeln";

  //alternative public property definition - here without this.
  chefName = 'Boring'; 
 
  constructor()
  {
    this.favoriteDish = 'Nothing';
  }

  toString() {return `Hello, my name is ${this.chefName}. I am ${this.age} years old and I love ${this.favoriteDish}. ` +
   `The secret_recipe is ${this.#secret_recipe}.`;}
}
class GermanChef extends Chef
{
  constructor()
  {
    super();
    this.chefName = 'Franz'; 
    this.favoriteDish = 'Wursts';
    this.age = 30;
    this.secret_recipe = "Sauer kraut";
  }
}
class ItalianChef extends Chef
{
  constructor()
  {
    super();
    this.chefName = 'Mauro'; 
    this.favoriteDish = 'Spagetti';
    this.age = 25;
  }
}

let chef = new Chef();
let germanChef = new GermanChef();
let italianChef = new ItalianChef();

console.log(''+ chef);
console.log(''+ germanChef);
console.log(''+ italianChef);

console.log(chef.secret_recipe);        //undefined
console.log(germanChef.secret_recipe);  //this is the secret_recipe declared in germanChef only

