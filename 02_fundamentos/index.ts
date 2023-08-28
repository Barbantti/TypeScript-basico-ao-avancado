const firstName: string = "Heitor";

console.log(firstName.toLocaleUpperCase());

let fullName: string;

const lastName: string = "Guimarães Barbanti";

fullName = firstName + " " + lastName;

console.log(fullName);

let a: boolean = false;

a = true;

/* 
Type annotation e Type inference

Annotation e quando se define o tipo de um dado manualmente;

Inference e quando TS identifica e define o tipo de dados automaticamente;
*/

const ann: string = "annotation";

let inf = "Inference";

const num: number = 10;

let numString = num.toString();

console.log(`O numero e: ${numString}`);
