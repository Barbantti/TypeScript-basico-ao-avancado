"use strict";
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
let names = ["Heitor", "Ana"];
names.push("Heitor");
const nuns = [100, 200];
console.log(nuns);
const sum = (a, b) => {
    return a + b;
};
console.log(sum(12, 30));
const greeting = (name) => {
    return `Ola ${name}`;
};
console.log(greeting("Heitor"));
const coordinates = (showCoordinates) => {
    console.log(showCoordinates.lat);
    console.log(showCoordinates.long);
    return;
};
const showCoordinates = { lat: -23.448709, long: -46.73122 };
coordinates(showCoordinates);
const showNumbers = (a, b, c) => {
    if (c) {
        console.log(`C = ${c}`);
    }
    else {
        console.log(`A = ${a}`);
        console.log(`B = ${b}`);
    }
};
showNumbers(1, 5);
const advancedGreeting = (firstName, lastName) => {
    if (lastName !== undefined) {
        return `Ola ${firstName} ${lastName}!`;
    }
    return `Ola ${firstName}`;
};
console.log(advancedGreeting("Heitor", "Barbanti"));
console.log(advancedGreeting("Ana"));
const showBalance = (balance) => {
    console.log(`Saldo da conta ${balance}`);
};
console.log(showBalance(100));
const showUserRole = (role) => {
    if (typeof role === "boolean") {
        return "User not found!";
    }
    return `User func is ${role}`;
};
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
const showId = (id) => {
    return console.log(`O id e: ${id}`);
};
showId(200);
showId("200");
const showInterface = (obj) => {
    return console.log(`X: ${obj.x} Y:${obj.y} Z:${obj.z}`);
};
const showObj = {
    x: 5,
    y: 10,
    z: 2,
};
showInterface(showObj);
