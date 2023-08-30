const withoutReturn = (): void => {
  console.log("Função sem retorno!");
};

withoutReturn();

const greeting = (name: string): string => {
  return `Ola ${name}`;
};

const preGreeting = (f: (name: string) => string, userName: string) => {
  console.log("Preparando a função!");

  const greet = f(userName);

  console.log(greet);
};

preGreeting(greeting, "Heitor");
preGreeting(greeting, "Biscoito");

// Generic function could be T or U letter
const firstElement = <T>(arr: T[]): T => {
  return arr[0];
};

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

const mergeObjects = <U, T>(obj1: U, obj2: T) => {
  return {
    ...obj1,
    ...obj2,
  };
};

const newObject = mergeObjects({ name: "Ana" }, { age: 28, job: "Psicologa" });

console.log(newObject);

const user = {
  name: "Heitor",
  age: "5 meses",
  peso: "7.8 kg",
};

const aircraft = {
  company: "Boeing",
  model: "B-737",
  modelVariation: "800SFP",
  withWingLet: true,
  yearManufacture: "2005",
  manufactureRegistration: "N6067U",
  airlineInUse: "GOL",
  airlineRegistration: "PR-GTA",
};

const mergeObjectsData = <U, T>(user: U, aircraft: T) => {
  return {
    ...user,
    ...aircraft,
  };
};

const newObjectData = mergeObjectsData(
  { newUser: user },
  { newAircraft: aircraft }
);

console.log(newObjectData);
console.log(newObjectData.newUser);
console.log(newObjectData.newAircraft);

const biggestNumber = <T extends number | string>(a: T, b: T): T => {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
};

console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));

const mergeArrays = <T>(arr1: T[], arr2: T[]) => {
  return arr1.concat(arr2);
};

console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando..."]));

const modernGreeting = (name: string, greet?: string) => {
  if (greet) {
    return `Ola ${greet} ${name}, bem vinda!`;
  } else {
    return `Ola ${name}, bem vinda!`;
  }
};

console.log(modernGreeting("Ana"));
console.log(modernGreeting("Ana", "Sra."));

const defaultSum = (n: number, m = 10): number => {
  return n + m;
};

console.log(defaultSum(0));
console.log(defaultSum(2, 40));

const doSomething = (x: unknown) => {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log("x e um number");
  }
};

console.log([1, 2, 3]);
console.log(5);

const showNewErrorMessage = (msg: string): never => {
  throw new Error(msg);
};

// showNewErrorMessage("Error");

const sumAll = (...n: number[]) => {
  return n.reduce((number, sum) => sum + number);
};

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(sumAll(5, 4, 2, 656, 77, 333, 1111, 9999));

const destructuringInTs = ({
  name,
  price,
}: {
  name: string;
  price: number;
}): string => {
  return `O nome do produto e ${name} e ele custa R$${price}`;
};

const shirt = { name: "Shirt", price: 29.99 };

console.log(destructuringInTs(shirt));
