interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

const showProductDetails = (product: Product) => {
  if (product.isAvailable) {
    console.log(
      `O produto ${product.name} com valor de R$${product.price}. Esta disponível em estoque!`
    );
  } else {
    console.log(`O produto ${product.name}, nao esta disponível!`);
  }
};

const shirt: Product = {
  name: "T-shirt",
  price: 29.91,
  isAvailable: true,
};

showProductDetails(shirt);

interface User {
  email: string;
  role?: string;
}

const showUserDetails = (user: User) => {
  console.log(`O usuário tem o e-mail: ${user.email}`);

  if (user.role) {
    console.log(`A função do usuário e: ${user.role}`);
  }
};

const u1: User = { email: "user.role@email.com", role: "Admin" };
const u2: User = { email: "user@email.com" };

showUserDetails(u1);
showUserDetails(u2);

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

console.log(fusca);

interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

coords.y = 15;

console.log(coords);

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const leonardo: Human = {
  name: "Leo",
  age: 28,
};

console.log(leonardo);

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genki Dama"],
};

console.log(goku);

console.log(goku.superpowers[1]);

interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);
console.log(arnold.caliber);

let myArray: ReadonlyArray<string> = ["Maca", "Laranja", "Banana"];

console.log(myArray);

myArray.forEach((item) => {
  console.log(`Fruta: ${item}`);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArray);
