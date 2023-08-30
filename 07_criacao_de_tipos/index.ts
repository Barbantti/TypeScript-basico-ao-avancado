const showData = <T>(arg: T): string => {
  return `O dado do argumento genérico e: ${arg}`;
};

console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData(["teste"]));

const showProductName = <T extends { name: String }>(obj: T) => {
  return `O nome do produto e: ${obj.name}`;
};

const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupa" };

console.log(showProductName(myObj));
console.log(showProductName(otherProduct));

interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen: Pen = {
  name: "Caneta Azul",
  wheels: false,
  engine: false,
  color: "Azul Caneta...",
};
console.log(myCar);
console.log(myPen);

const getSomeKey = <T, K extends keyof T>(obj: T, key: K) => {
  return `A chave ${String(key)} esta no objeto e tem o valor de ${obj[key]}`;
};

const server = {
  hd: "2TB",
  ram: "32BG",
};

console.log(getSomeKey(server, "ram"));

type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

const showCharName = (obj: Character, key: C) => {
  return `${obj[key]}`;
};

const myChar: Character = {
  name: "Leonardo",
  age: 28,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
console.log(showCharName(myChar, "hasDriveLicense"));

const userName: string = "Heitor";

const userName2: typeof userName = "Ana";

type x = typeof userName;

const userName3: x = "Leo";

type Truck = { km: number; kg: number; description: string };

type Km = Truck["km"];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão para pouca carga",
};

const showKm = (km: Km) => {
  console.log(`O veiculo tem a quilometragem de: km${km}`);
};

showKm(newTruck.km);

interface A {}

interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 5;

type testA = "text";

type CustomType = `some ${testA}`;

const testing: CustomType = "some text";

type a1 = "Testando";
type a2 = "Union";

type a3 = `${a1}` | `${a2}`;
