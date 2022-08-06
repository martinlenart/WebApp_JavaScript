//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run() {
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }

}

class Rabbit extends Animal {

  constructor (name)
  {
    super(name);
    this.speed = 20;
  }
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

class Turtle extends Animal {
  constructor (name)
  {
    super(name);
    this.speed = 1;
  }
  hide() {
    console.log(`${this.name} retracts into it's shell!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

const rabbit = new Rabbit("White Rabbit");
rabbit.run(); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!

let turtle = new Turtle("Sleepy Turtle");
turtle.run();
turtle.stop();
