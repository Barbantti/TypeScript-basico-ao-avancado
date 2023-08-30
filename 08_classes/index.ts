// const User {
//   name!: string
//   age!: number
// }

// const leonardo = new User();

// console.log(leonardo);

// leonardo.name = 'Leonardo'
// leonardo.age = 28

// console.log(leonardo);

class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const heitor = new NewUser("Heitor", 5);

console.log(heitor);

class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("Fusca");

console.log(fusca);
