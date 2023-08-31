function myDecorator() {
  console.log("Iniciando decorator!");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator!");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    descriptor;
  };
}

class myClass {
  @myDecorator()
  testing() {
    console.log("Terminando execução do método");
  }
}

const myObj = new myClass();

myObj.testing();

const a = () => {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou A!");
  };
};

const b = () => {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou B!");
  };
};

//   Ou seja a chamada do decorator ocorre do mais abaixo do componente e proximo da função sera o primeiro a ser executado! Lembre sempre de que a ordem do decorator importa na execução do código! Neste caso o decorator C esta sendo executado primeiro pois e o ultimo decorator dentre o A e B. Então a ordem prioritária e C, B e A. PRIMEIRO a ser EXECUTADO e o mais PROXIMO de ondem o decorator e CHAMADO! Depois vao os seguintes sempre em ordem de execução!!!

const c = () => {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(
      "Execução do decorator ocorre prioritariamente de baixo para cima! Ou seja --> C, B e A"
    );
  };
};

class MultipleDecorators {
  @c()
  @a()
  @b()
  testing() {
    console.log("Terminando execução!");
  }
}

const multiple = new MultipleDecorators();

multiple.testing();

const classDecorator = (constructor: Function) => {
  console.log(constructor.name);
  if (constructor.name === "User") {
    console.log("Criando usuário!");
  }
};

@classDecorator
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const heitor = new User("Heitor");

console.log(heitor);

// Creating arrow function

const enumerable = (value: boolean) => {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
};

// Creating Class
class NewUser {
  name;
  // Declaring name as string
  constructor(name: string) {
    this.name = name;
  }

  // Creating method
  @enumerable(false)
  showNewUserName() {
    return `O nome do novo user e: ${this.name}`;
  }
}

const userName = new NewUser("Bolacha");
console.log(userName);
console.log(userName.showNewUserName());

// Accessor decorator
class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`;
  }
  @enumerable(false)
  get showAge() {
    return `Idade do monstro: ${this.age}`;
  }
}

const charmander = new Monster("Charmander", 10);

console.log(charmander);

// Property decorator
// Creating a decorator id order with minimum 5 numbers
function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };
    const setter = function (newVal: string) {
      value = newVal.padStart(5, "0");
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID("1");

console.log(newItem);
console.log(newItem.id);

// Numbering projects with decorator

const createdDate = (created: Function) => {
  created.prototype.createdAt = new Date();
};
@createdDate
class Book {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}
@createdDate
class Pen {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(12);
const pen = new Pen(55);
console.log(newBook);
console.log(pen);

// Real example for method decorator to restrict user in a one comment per publish
const checkIfUserPosted = () => {
  return (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) => {
    const childFunction = descriptor.value;
    console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("User has been posted!");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };

    return descriptor;
  };
};
class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`New user post: ${content}`);
  }
}

const newPost = new Post();

newPost.post("My first post!", newPost.alreadyPosted);
newPost.post("Trying second post!", newPost.alreadyPosted);
newPost.post("Trying third post!", newPost.alreadyPosted);

// Real example for method decorator to verify a object property to validate the max numbers of characters allowed
const max = (limit: number) => {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`The maximum number allowed is ${limit} characters.`);
        return;
      } else {
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
  @max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

let ana = new Admin("Ana Carolina Dias Guimarães");
let leo = new Admin("Leo");

console.log(leo);
