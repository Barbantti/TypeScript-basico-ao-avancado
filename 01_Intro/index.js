"use strict";
const firstName = "Heitor";
const anotherName = 1;
const x = true;
const greeting = (name) => {
    console.log(`Ola ${name}`);
};
greeting(firstName);
// greeting(anotherName);
// greeting(x);
const n1 = 10;
const n2 = 20;
const sumNumbers = (n1, n2) => {
    return n1 + n2;
};
console.log(sumNumbers(n1, n2));
