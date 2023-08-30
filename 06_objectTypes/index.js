var showProductDetails = function (product) {
    if (product.isAvailable) {
        console.log("O produto ".concat(product.name, " com valor de R$").concat(product.price, ". Esta dispon\u00EDvel em estoque!"));
    }
    else {
        console.log("O produto ".concat(product.name, ", nao esta dispon\u00EDvel!"));
    }
};
var shirt = {
    name: "T-shirt",
    price: 29.91,
    isAvailable: true,
};
showProductDetails(shirt);
var showUserDetails = function (user) {
    console.log("O usu\u00E1rio tem o e-mail: ".concat(user.email));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usu\u00E1rio e: ".concat(user.role));
    }
};
var u1 = { email: "user.role@email.com", role: "Admin" };
var u2 = { email: "user@email.com" };
showUserDetails(u1);
showUserDetails(u2);
var fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
var coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
var leonardo = {
    name: "Leo",
    age: 28,
};
console.log(leonardo);
var goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
console.log(goku.superpowers[1]);
var arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
console.log(arnold.caliber);
var myArray = ["Maca", "Laranja", "Banana"];
console.log(myArray);
myArray.forEach(function (item) {
    console.log("Fruta: ".concat(item));
});
myArray = myArray.map(function (item) {
    return "Fruta: ".concat(item);
});
console.log(myArray);
