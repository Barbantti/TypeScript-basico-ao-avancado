import importGreet from "./greet";
import { x } from "./variable";
import { a, b, myFunction } from "./multiple";
import { someName as name } from "./changeName";
import * as myNumbers from "./numbers"
import { Human } from "./mytype";

importGreet();

const variableImported = x;

console.log(variableImported);

console.log(a);

console.log(b);

myFunction()

console.log(name);

console.log(myNumbers);
const nX = myNumbers.n1;

console.log(nX);

myNumbers.someNumber();


class User implements Human {
    name;
    age;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const biscoito = new User("Biscoito", 4)

console.log(biscoito);