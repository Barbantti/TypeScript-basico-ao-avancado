var showData = function (arg) {
    return "O dado do argumento gen\u00E9rico e: ".concat(arg);
};
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData(["teste"]));
var showProductName = function (obj) {
    return "O nome do produto e: ".concat(obj.name);
};
var myObj = { name: "Porta", cor: "Branca" };
var otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
var thirdObj = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
var myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
var myPen = {
    name: "Caneta Azul",
    wheels: false,
    engine: false,
    color: "Azul Caneta...",
};
console.log(myCar);
console.log(myPen);
var getSomeKey = function (obj, key) {
    return "A chave ".concat(String(key), " esta no objeto e tem o valor de ").concat(obj[key]);
};
var server = {
    hd: "2TB",
    ram: "32BG",
};
console.log(getSomeKey(server, "ram"));
var showCharName = function (obj, key) {
    return "".concat(obj[key]);
};
var myChar = {
    name: "Leonardo",
    age: 28,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
console.log(showCharName(myChar, "hasDriveLicense"));
var userName = "Heitor";
var userName2 = "Ana";
var userName3 = "Leo";
var newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga",
};
var showKm = function (km) {
    console.log("O veiculo tem a quilometragem de: km".concat(km));
};
showKm(newTruck.km);
var someVar = 5;
var testing = "some text";
