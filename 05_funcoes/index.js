"use strict";
const withoutReturn = () => {
    console.log("Função sem retorno!");
};
withoutReturn();
const greeting = (name) => {
    return `Ola ${name}`;
};
const preGreeting = (f, userName) => {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
};
preGreeting(greeting, "Heitor");
preGreeting(greeting, "Biscoito");
// Generic function could be T or U letter
const firstElement = (arr) => {
    return arr[0];
};
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
const mergeObjects = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
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
const mergeObjectsData = (user, aircraft) => {
    return Object.assign(Object.assign({}, user), aircraft);
};
const newObjectData = mergeObjectsData({ newUser: user }, { newAircraft: aircraft });
console.log(newObjectData);
console.log(newObjectData.newUser);
console.log(newObjectData.newAircraft);
const biggestNumber = (a, b) => {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
};
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
const mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
};
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ["teste", "testando..."]));
const modernGreeting = (name, greet) => {
    if (greet) {
        return `Ola ${greet} ${name}, bem vinda!`;
    }
    else {
        return `Ola ${name}, bem vinda!`;
    }
};
console.log(modernGreeting("Ana"));
console.log(modernGreeting("Ana", "Sra."));
const defaultSum = (n, m = 10) => {
    return n + m;
};
console.log(defaultSum(0));
console.log(defaultSum(2, 40));
const doSomething = (x) => {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("x e um number");
    }
};
console.log([1, 2, 3]);
console.log(5);
const showNewErrorMessage = (msg) => {
    throw new Error(msg);
};
// showNewErrorMessage("Error");
const sumAll = (...n) => {
    return n.reduce((number, sum) => sum + number);
};
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(sumAll(5, 4, 2, 656, 77, 333, 1111, 9999));
const destructuringInTs = ({ name, price, }) => {
    return `O nome do produto e ${name} e ele custa R$${price}`;
};
const shirt = { name: "Shirt", price: 29.99 };
console.log(destructuringInTs(shirt));
