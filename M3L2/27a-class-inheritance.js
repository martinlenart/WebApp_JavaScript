//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
class mySuper {

  constructor() {
    this.superProp1 = 'superProp1';
  }

  superMethod1() {
    console.log(`superMethod1 says superProp1=${this.superProp1}`);
  }
  methodA() {
    console.log(`methodA in super`);
  }
}

class myChild extends mySuper {

  constructor ()
  {
    super();
    this.superProp1 = 'childProp1';
  }
  childMethod1() {
    console.log(`childMethod1 says superProp1=${this.superProp1}`);     //note you will get this.superPropt
    console.log(`childMethod1 says superProp1=${super.superProp1}`);    //note will not work -> undefined
  }
  methodA() {
    console.log(`methodA in child`);
    super.methodA();
  }
}

const s = new mySuper();
s.superMethod1();

const c = new myChild();
c.childMethod1();
c.superMethod1();       //super-duper polymorfism

c.methodA();