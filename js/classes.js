/**
 * Clases
 **********************************************
 */
class Animal {
  constructor (name) {
    this.name = name;
  }

  brincar() {
    console.log('Brincando');
  }
}

const myDog = new Animal('Rex');
myDog.brincar();