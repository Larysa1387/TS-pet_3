class Key {
  private signature: number = Math.floor(Math.random() * 25);
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(key: Key) {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log('Person came in.');
      return this.tenants;
    } else {
      console.log('Wrong key.');
    }
  }
  abstract openDoor(key: Key): void;
}
class MyHouse extends House {
  openDoor(key: Key) {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log('door open');
    } else {
      console.log('Invalid key.');
    }
  }
}

const key = new Key();
console.log(key);

const house = new MyHouse(key);
console.log('house', house);

const person = new Person(key);
console.log('person', person);

house.openDoor(person.getKey(key));

house.comeIn(person);
console.log('house after', house);

export {};
