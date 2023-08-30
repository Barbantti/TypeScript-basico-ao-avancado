const sum = (a: number | string, b: number | string) => {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossível realizar a soma!");
  }
};

sum("4", "59");
sum(12, 42.3);
sum("21", 22);

const operations = (arr: number[], operation?: string | undefined) => {
  if (operation) {
    try {
      if (operation === "sum") {
        const sum = arr.reduce((i, total) => i + total);
        console.log(sum);
      } else if (operation === "multiply") {
        const multiply = arr.reduce((i, total) => i * total);
        console.log(multiply);
      }
    } catch (error) {
      console.log("Por favor, defina uma operação!", error);
    }
  }
};

operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");

class User {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const anna = new User("Anna");
const paul = new SuperUser("Paul");

console.log(anna);
console.log(paul);

const userGreeting = (user: object) => {
  if (user instanceof SuperUser) {
    console.log(`Ola ${user.name}, deseja ver os dados do sistema?`);
  } else if (user instanceof User) {
    console.log(`Ola ${user.name}`);
  }
};

userGreeting(anna);
userGreeting(paul);

class Dog {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}

const jully = new Dog("Jully");
const biscoito = new Dog("Biscoito", "Vira lata");
const bolacha = new Dog("Bolacha");

const showDogDetails = (dog: Dog) => {
  if ("breed" in dog) {
    console.log(`O cachorro e da raca: ${dog.breed}`);
  } else {
    console.log("O cachorro e um SRD");
  }
};

console.log(jully);
console.log(biscoito);
console.log(bolacha);

type Review = number | boolean;

const getReviewMessage = (review: Review) => {
  if (!review) {
    return console.log("Voce nao avaliou o produto!");
  }
  console.log(
    `Voce deixou uma review de ${review} estrela${
      review !== 1 ? "s" : ""
    }. Obrigado!`
  );
};

getReviewMessage(false);
getReviewMessage(2);
getReviewMessage(5);
