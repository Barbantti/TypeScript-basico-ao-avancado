var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var withoutReturn = function () {
    console.log("Função sem retorno!");
};
withoutReturn();
var greeting = function (name) {
    return "Ola ".concat(name);
};
var preGreeting = function (f, userName) {
    console.log("Preparando a função!");
    var greet = f(userName);
    console.log(greet);
};
preGreeting(greeting, "Heitor");
preGreeting(greeting, "Biscoito");
// Generic function could be T or U letter
var firstElement = function (arr) {
    return arr[0];
};
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
var mergeObjects = function (obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
};
var newObject = mergeObjects({ name: "Ana" }, { age: 28, job: "Psicologa" });
console.log(newObject);
var user = {
    name: "Heitor",
    age: "5 meses",
    peso: "7.8 kg",
};
var aircraft = {
    company: "Boeing",
    model: "B-737",
    modelVariation: "800SFP",
    withWingLet: true,
    yearManufacture: "2005",
    manufactureRegistration: "N6067U",
    airlineInUse: "GOL",
    airlineRegistration: "PR-GTA",
};
var mergeObjectsData = function (user, aircraft) {
    return __assign(__assign({}, user), aircraft);
};
var newObjectData = mergeObjectsData({ newUser: user }, { newAircraft: aircraft });
console.log(newObjectData);
console.log(newObjectData.newUser);
console.log(newObjectData.newAircraft);
var biggestNumber = function (a, b) {
    var biggest;
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
var mergeArrays = function (arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ["teste", "testando..."]));
var modernGreeting = function (name, greet) {
    if (greet) {
        return "Ola ".concat(greet, " ").concat(name, ", bem vinda!");
    }
    else {
        return "Ola ".concat(name, ", bem vinda!");
    }
};
console.log(modernGreeting("Ana"));
console.log(modernGreeting("Ana", "Sra."));
var defaultSum = function (n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
};
console.log(defaultSum(0));
console.log(defaultSum(2, 40));
var doSomething = function (x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("x e um number");
    }
};
console.log([1, 2, 3]);
console.log(5);
var showNewErrorMessage = function (msg) {
    throw new Error(msg);
};
// showNewErrorMessage("Error");
var sumAll = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
};
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(sumAll(5, 4, 2, 656, 77, 333, 1111, 9999));
var destructuringInTs = function (_a) {
    var name = _a.name, price = _a.price;
    return "O nome do produto e ".concat(name, " e ele custa R$").concat(price);
};
var shirt = { name: "Shirt", price: 29.99 };
console.log(destructuringInTs(shirt));
