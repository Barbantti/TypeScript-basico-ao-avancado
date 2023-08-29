let numbers: number[] = [1, 2, 3];

numbers.push(5);

console.log(numbers[2]);

let names: string[] = ["Heitor", "Ana"];

names.push("Heitor");

const nuns: Array<number> = [100, 200];

console.log(nuns);

const sum = (a: number, b: number) => {
  return a + b;
};

console.log(sum(12, 30));

const greeting = (name: string): string => {
  return `Ola ${name}`;
};

console.log(greeting("Heitor"));

const coordinates = (showCoordinates: { lat: number; long: number }) => {
  console.log(showCoordinates.lat);
  console.log(showCoordinates.long);
  return;
};

const showCoordinates = { lat: -23.448709, long: -46.73122 };

coordinates(showCoordinates);

const showNumbers = (a: number, b: number, c?: number) => {
  if (c) {
    console.log(`C = ${c}`);
  } else {
    console.log(`A = ${a}`);
    console.log(`B = ${b}`);
  }
};

showNumbers(1, 5);

const advancedGreeting = (firstName: string, lastName?: string) => {
  if (lastName !== undefined) {
    return `Ola ${firstName} ${lastName}!`;
  }

  return `Ola ${firstName}`;
};

console.log(advancedGreeting("Heitor", "Barbanti"));
console.log(advancedGreeting("Ana"));

const showBalance = (balance: string | number) => {
  console.log(`Saldo da conta ${balance}`);
};

console.log(showBalance(100));

const showUserRole = (role: boolean | string) => {
  if (typeof role === "boolean") {
    return "User not found!";
  }

  return `User func is ${role}`;
};

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

type ID = number | string;

const showId = (id: ID) => {
  return console.log(`O id e: ${id}`);
};

showId(200);
showId("200");

interface Point {
  x: number;
  y: number;
  z: number;
}

const showInterface = (obj: Point) => {
  return console.log(`X: ${obj.x} Y:${obj.y} Z:${obj.z}`);
};

const showObj: Point = {
  x: 5,
  y: 10,
  z: 2,
};

showInterface(showObj);
