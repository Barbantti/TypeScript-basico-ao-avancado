"use strict";
const showData = (arg) => {
    return `O dado do argumento genérico e: ${arg}`;
};
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData(["teste"]));
const showProductName = (obj) => {
    return `O nome do produto e: ${obj.name}`;
};
const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = {
    name: "Caneta Azul",
    wheels: false,
    engine: false,
    color: "Azul Caneta...",
};
console.log(myCar);
console.log(myPen);
const getSomeKey = (obj, key) => {
    return `A chave ${String(key)} esta no objeto e tem o valor de ${obj[key]}`;
};
const server = {
    hd: "2TB",
    ram: "32BG",
};
console.log(getSomeKey(server, "ram"));
const showCharName = (obj, key) => {
    return `${obj[key]}`;
};
const myChar = {
    name: "Leonardo",
    age: 28,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
console.log(showCharName(myChar, "hasDriveLicense"));
const userName = "Heitor";
const userName2 = "Ana";
const userName3 = "Leo";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga",
};
const showKm = (km) => {
    console.log(`O veiculo tem a quilometragem de: km${km}`);
};
showKm(newTruck.km);
const someVar = 5;
const testing = "some text";
