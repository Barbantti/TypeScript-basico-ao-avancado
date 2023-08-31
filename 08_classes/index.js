"use strict";
// const User {
//   name!: string
//   age!: number
// }
// const leonardo = new User();
// console.log(leonardo);
// leonardo.name = 'Leonardo'
// leonardo.age = 28
// console.log(leonardo);
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const heitor = new NewUser("Heitor", 5);
console.log(heitor);
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "Fusca Turdo";
// Classe pai -->
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const tractor = new Machine("Tractor");
// Classe filho recebe herança do pai -->
// Quando se cria uma classe filho para receber herança de uma classe pai, não é necessário passar todas as propriedades da classe pai para a classe filho. Precisa passar apenas as propriedades que são específicas da classe filha ou que precisam ser inicializadas de maneira diferente.
class KillerMachine extends Machine {
    constructor(name, guns) {
        // Deve utilizar o "super" para receber as propriedades da classe pai
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(tractor);
console.log(destroyer);
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
class truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, tem ${this.hp} cavalos de potencia.`);
    }
}
const volvo = new truck("Volvo", 400);
const scania = new truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const newFullName = new Person("Heitor", "Guimarães Barbanti");
console.log(newFullName.fullName);
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso!");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso!");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}.`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 30;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `Retornando o dado para a interface itemTitle: ${this.title}`;
    }
}
const myPost = new blogPost("Imprimindo o dado...");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo e: ${this.title}`;
    }
}
class Base {
    someMethod() {
        console.log("Something");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testing another something");
    }
}
const myObject = new Nova();
myObject.someMethod();
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método privado!");
    }
    showPrivateMethod() {
        return this.privateMethod();
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
pObj.showPrivateMethod();
class StaticMembers {
    static staticMethod() {
        console.log("Este e um método estado!");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first e: ${this.first}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
const secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qty total: ${this.qty}`;
    }
    get showPrice() {
        return `Qtd total: ${this.price}`;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const person = new myClass("Heitor");
console.log(person);
console.log(person.name);
class abstractClass {
}
class AbstractExample extends abstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome e ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample("Ana");
newAbstractObject.showName();
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
