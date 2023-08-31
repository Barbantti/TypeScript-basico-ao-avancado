"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log("Iniciando decorator!");
    return function (target, propertyKey, descriptor) {
        console.log("Executando decorator!");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor;
    };
}
class myClass {
    testing() {
        console.log("Terminando execução do método");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
const a = () => {
    return function (target, propertyKey, descriptor) {
        console.log("Executou A!");
    };
};
const b = () => {
    return function (target, propertyKey, descriptor) {
        console.log("Executou B!");
    };
};
//   Ou seja a chamada do decorator ocorre do mais abaixo do componente e proximo da função sera o primeiro a ser executado! Lembre sempre de que a ordem do decorator importa na execução do código! Neste caso o decorator C esta sendo executado primeiro pois e o ultimo decorator dentre o A e B. Então a ordem prioritária e C, B e A. PRIMEIRO a ser EXECUTADO e o mais PROXIMO de ondem o decorator e CHAMADO! Depois vao os seguintes sempre em ordem de execução!!!
const c = () => {
    return function (target, propertyKey, descriptor) {
        console.log("Execução do decorator ocorre prioritariamente de baixo para cima! Ou seja --> C, B e A");
    };
};
class MultipleDecorators {
    testing() {
        console.log("Terminando execução!");
    }
}
__decorate([
    c(),
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
const classDecorator = (constructor) => {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Criando usuário!");
    }
};
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const heitor = new User("Heitor");
console.log(heitor);
// Creating arrow function
const enumerable = (value) => {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
};
// Creating Class
class NewUser {
    // Declaring name as string
    constructor(name) {
        this.name = name;
    }
    // Creating method
    showNewUserName() {
        return `O nome do novo user e: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], NewUser.prototype, "showNewUserName", null);
const userName = new NewUser("Bolacha");
console.log(userName);
console.log(userName.showNewUserName());
// Accessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
// Property decorator
// Creating a decorator id order with minimum 5 numbers
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
console.log(newItem.id);
// Numbering projects with decorator
const createdDate = (created) => {
    created.prototype.createdAt = new Date();
};
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const pen = new Pen(55);
console.log(newBook);
console.log(pen);
// Real example for method decorator to restrict user in a one comment per publish
const checkIfUserPosted = () => {
    return (target, key, descriptor) => {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("User has been posted!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
};
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`New user post: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("My first post!", newPost.alreadyPosted);
newPost.post("Trying second post!", newPost.alreadyPosted);
newPost.post("Trying third post!", newPost.alreadyPosted);
// Real example for method decorator to verify a object property to validate the max numbers of characters allowed
const max = (limit) => {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`The maximum number allowed is ${limit} characters.`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
};
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    max(10)
], Admin.prototype, "username", void 0);
let ana = new Admin("Ana Carolina Dias Guimarães");
let leo = new Admin("Leo");
console.log(leo);
