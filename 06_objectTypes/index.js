"use strict";
const showProductDetails = (product) => {
    if (product.isAvailable) {
        console.log(`O produto ${product.name} com valor de R$${product.price}. Esta disponível em estoque!`);
    }
    else {
        console.log(`O produto ${product.name}, nao esta disponível!`);
    }
};
const shirt = {
    name: "T-shirt",
    price: 29.91,
    isAvailable: true,
};
showProductDetails(shirt);
const showUserDetails = (user) => {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário e: ${user.role}`);
    }
};
const u1 = { email: "user.role@email.com", role: "Admin" };
const u2 = { email: "user@email.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
const leonardo = {
    name: "Leo",
    age: 28,
};
console.log(leonardo);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
console.log(arnold.caliber);
let myArray = ["Maca", "Laranja", "Banana"];
console.log(myArray);
myArray.forEach((item) => {
    console.log(`Fruta: ${item}`);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
