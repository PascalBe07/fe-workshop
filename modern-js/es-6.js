//  let and const
let a = 'test';
const b = 'test2';
a = 'anotherone';
// b = '3rd one';

//  template literals
const name = 'Paul Panzer';
const salutation = 'Hi, my name is ' + name;
// const salutation = `Hi, my name is ${name}`;
// console.log(salutation);

//  default params
const functionA = (a) => {
    // console.log(a);
}
functionA('value');
functionA();

//  object destructuring
const personA = {
    firstName: 'peter',
    age: 20,
    sohn: 'ralf'
};

const firstName = personA.firstName;
const age = personA.age;
// const { firstName, age } = personA;
// console.log(firstName, age);

//  property shorthand
const lastName = 'Dieterson';
const personB = {
    lastName: lastName,
    age: 30
};
// console.log(personB);

//  classes
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get FirstName() {
        return this.firstName;
    }
}

const personC = new Person('Jürgen', 'Huber');
// console.log(personC.FirstName, personC.fullName());

//  spread operator
const listA = [1, 2, 3];
const listB = [4, 5, 6];
const combinedList = [listA, listB];
// const combinedList = [...listA, ...listB];
// console.log(combinedList);

const propertiesA = {
    name: 'Peter',
    lastName: 'Huber'
};
const propertiesB = {
    age: 12,
    children: 5
};
const combinedObject = {
    ...propertiesA,
    ...propertiesB
}
console.log(combinedObject);


//  rest operator
function sum(args) {
    return args.reduce((previous, current) => {
        return previous + current;
    });
}

const sumResult = sum([1, 2, 3, 4]);
console.log(sumResult);


