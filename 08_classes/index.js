// const User {
//   name!: string
//   age!: number
// }
// const leonardo = new User();
// console.log(leonardo);
// leonardo.name = 'Leonardo'
// leonardo.age = 28
// console.log(leonardo);
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var heitor = new NewUser("Heitor", 5);
console.log(heitor);
