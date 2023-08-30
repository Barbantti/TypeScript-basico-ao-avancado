var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sum = function (a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma!");
    }
};
sum("4", "59");
sum(12, 42.3);
sum("21", 22);
var operations = function (arr, operation) {
    if (operation) {
        try {
            if (operation === "sum") {
                var sum_1 = arr.reduce(function (i, total) { return i + total; });
                console.log(sum_1);
            }
            else if (operation === "multiply") {
                var multiply = arr.reduce(function (i, total) { return i * total; });
                console.log(multiply);
            }
        }
        catch (error) {
            console.log("Por favor, defina uma operação!", error);
        }
    }
};
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var anna = new User("Anna");
var paul = new SuperUser("Paul");
console.log(anna);
console.log(paul);
var userGreeting = function (user) {
    if (user instanceof SuperUser) {
        console.log("Ola ".concat(user.name, ", deseja ver os dados do sistema?"));
    }
    else if (user instanceof User) {
        console.log("Ola ".concat(user.name));
    }
};
userGreeting(anna);
userGreeting(paul);
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var jully = new Dog("Jully");
var biscoito = new Dog("Biscoito", "Vira lata");
var bolacha = new Dog("Bolacha");
var showDogDetails = function (dog) {
    if ("breed" in dog) {
        console.log("O cachorro e da raca: ".concat(dog.breed));
    }
    else {
        console.log("O cachorro e um SRD");
    }
};
console.log(jully);
console.log(biscoito);
console.log(bolacha);
var getReviewMessage = function (review) {
    if (!review) {
        return console.log("Voce nao avaliou o produto!");
    }
    console.log("Voce deixou uma review de ".concat(review, " estrela").concat(review !== 1 ? "s" : "", ". Obrigado!"));
};
getReviewMessage(false);
getReviewMessage(2);
getReviewMessage(5);
