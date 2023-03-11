"for restrict"; //it help to find unpredictable behavior

/*
const Person = function (name, age) {
    const person = {};

    person.name = name;
    person.age = age;

    person.eat = function () {
        return `${name} eating fish`;
    };

    person.sleep = function () {
        return `${name} is sleeping`;
    };

    return person;
}
*/

/*
const Person = function (name, age) {
    const person = {};

    person.name = name;
    person.age = age;
    person.eat = personMethod.eat;
    person.sleep = personMethod.sleep;

    return person;
}

const personMethod = {

    eat: function() {
        return `${this.name} eating fish`;
    },

    sleep: function() {
        return `${this.name} is sleeping`;
    },
}

const sakib = Person('sakib', 35);
const tamim = Person('tamim', 30);

console.log(sakib.eat());
console.log(tamim.sleep());
*/


/*

const personMethod = {

    eat() {
        return `${this.name} eating fish`;
    },

    sleep() {
        return `${this.name} is sleeping`;
    },
}

const Person = function (name, age) {
    const person = {};

    person.name = name;
    person.age = age;
    person.eat = personMethod.eat;
    person.sleep = personMethod.sleep;

    return person;
}

const sakib = Person('sakib', 35);
const tamim = Person('tamim', 30);

console.log(sakib.eat());
console.log(tamim.sleep());
*/

/*
const player = { //Parent Object
    name: 'mashrafi',
    play: 'cricket',
    wicket: 1000,
}

const mashrafi = Object.create(player);//Child Object mashrafi
console.log(mashrafi);
*/

/*
const personMethod = {

    eat() {
        return `${this.name} eating fish`;
    },

    sleep() {
        return `${this.name} is sleeping`;
    },
}

const Person = function (name, age) {
    const person = Object.create(personMethod);// Child access it's parent method

    person.name = name;
    person.age = age;

    return person;
}


const sakib = Person('sakib', 35);
const tamim = Person('tamim', 30);

console.log(sakib.eat());
console.log(tamim.sleep());
*/

/*
const Person = function (name, age) {
    const person = Object.create(Person.prototype);// 

    person.name = name;
    person.age = age;

    return person;
}

Person.prototype = {

    eat() {
        return `${this.name} eating fish`;
    },

    sleep() {
        return `${this.name} is sleeping`;
    },
}

const sakib = Person('sakib', 35);
const tamim = Person('tamim', 30);

console.log(sakib.eat());
console.log(tamim.sleep());
*/

/*
const Person = function (name, age) {
    // const person = Object.create(Person.prototype);
    // this = Object.create(Person.prototype); new deoar jonno dhore nichce

    // person.name = name;
    // person.age = age;

    // return person;
    // return this; new deoar jonno dhore nichce
    this.name = name; // new deoar jonno this bujhe nichce
    this.age = age;
}

Person.prototype = {

    eat() {
        return `${this.name} eating fish`;
    },
    //eat: function() {
        return `${this.name}` eating fish`;
    }

    sleep() {
        return `${this.name} is sleeping`;
    },
}

// const sakib = Person('sakib', 35);
// const tamim = Person('tamim', 30);

const sakib = new Person('sakib', 35);
const tamim = new Person('tamim', 30);

console.log(sakib.eat());
console.log(tamim.sleep());
*/

/*
class Person {
    constructor(name, age) {
        this.name = name; //Property
        this.age = age;
    }

    eat() { //Method
        return `${this.name} eating fish`;
    }

    sleep() {
        return `${this.name} is sleeping`;
    }


}
const sakib = new Person('sakib', 35);
const tamim = new Person('tamim', 30);

console.log(sakib.eat());
console.log(tamim.sleep());
*/

/*
const newObject = new Object();// {}
// const newObject = {} // songkhipto rup
console.log(newObject);

const newArray = new Array(); // []
// const newArray = []; // songkhipto rup
console.log(newArray);

const newArrayPush = [];
newArrayPush.push("sakib"); //console.log(Array.prototype);
console.log(newArrayPush); // newArrayPush child hisabe Parent Array er prototype use korte partece, eitai inheritance/ uttoradhikari. child er child o parent er prototype use korte parbe jake prototype chain bole.

*/

/*
const createObject = {};

Object.prototype.mahfuz = function () {
    return `just create a new object`;
}

console.log(createObject.mahfuz());

*/

/*
const Person = function (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = { //Object.prototype.mahfuz = "mahfuz"; static vabe dilam and multiple dite gele second bracket dite hoto

    eat: function () {
        return `${this.name} eating fish`;
    },
    sleep() {
        return `${this.name} eating fish`;
    }
}

Object.prototype.mahfuz = function () {
    return `${this.name} is a good boy`; // dynamic prototype access with a bulid in function
}

const sakib = new Person('sakib', 35);
const tamim = new Person('tamim', 30);
const mahfuz = new Person('mahfuz', 30);

console.log(sakib.eat());
console.log(tamim.sleep());
console.log(mahfuz.mahfuz());
*/

/*
// Eat and Sleep Method all time assign Sakib and tamim Object but it's not proper way, Person prototype create is a Proper way
const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.eat = function () {
        return `${this.name} eating fish`;
    }
    this.sleep = function () {
        return `${this.name} eating fish`;
    }
}

const sakib = new Person('sakib', 35);
const tamim = new Person('tamim', 30);

console.log(sakib.eat());
console.log(tamim.sleep());
*/

/*
const Person = function (name, age) { //Parent Class
    this.name = name;
    this.age = age;
}

const PersonType = function (name, age, type, play) { //Sub Class
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.play = play;
}

Person.prototype = {

    eat() {
        return `${this.name} eating fish`;
    },
    sleep() {
        return `${this.name} eating fish`;
    }
}

PersonType.prototype = Object.create(Person.prototype);
PersonType.prototype.constructor = PersonType;

const sakib = new PersonType('sakib', 35, 'boler', 'cricket');
const tamim = new PersonType('tamim', 30, 'batsman', 'cricket');

console.log(sakib.type);
console.log(tamim.sleep());
*/

/*
const Person = function (name, age) { //Parent Class
    this.name = name;
    this.age = age;
}

const PersonType = function (name, age, type, play) { //Sub Class
    Person.call(this); // eita na dileo kaj kore
    this.name = name;
    this.age = age;
    this.type = type;
    this.play = play;
}

Person.prototype = {

    eat() {
        return `${this.name} eating fish`;
    },
    sleep() {
        return `${this.name} eating fish`;
    }
}

PersonType.prototype = Object.create(Person.prototype);
PersonType.prototype.constructor = PersonType; // eita na dileo kaj kore
Person.prototype.playing = function () {
    return `${this.name} is playing well`;
}

const sakib = new PersonType('sakib', 35, 'boler', 'cricket');
const tamim = new PersonType('tamim', 30, 'batsman', 'cricket');

console.log(sakib.type);
console.log(tamim.sleep());
console.log(tamim.playing());
*/

/*
//Inheritance Child from Parent
class Person {
    constructor(name, age) { //Parent Class
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} eating fish`;
    }
}


class PersonType extends Person {
    constructor(name, age, type, play) { //Sub Class
        super(name, age);
        this.type = type;
        this.play = play;
    }

    sleep() {
        return `${this.name} eating fish`;
    }

    playing() {
        return `${this.name} is playing good`;
    }
}

class PersonSecond extends Person {
    constructor(name, age, hair, body) { //Sub Class
        super(name, age);
        this.hair = hair;
        this.body = body;
    }

    bodyColor() {
        return `${this.name} ${this.body} body color is well`;
    }

}

class PersonThird extends PersonSecond {//inheritance from PersonSecond and PersonSecond inheritance from Person
    constructor(name, age, hair, body, face) { //Sub Class
        super(name, age, hair, body);
        this.face = `${this.name} face type ${face}`;
    }

}

const sakib = new Person('sakib', 35);
const tamim = new PersonType('tamim', 30, 'batsman', 'cricket');
const mahfuz = new PersonSecond('mahfuz', 31, 'nothing', 'black');
const mamunFace = new PersonThird('Mamun', 31, 'nothing', 'black', 'round');

console.log(sakib.name);
console.log(tamim.sleep());
console.log(tamim.playing());
console.log(mahfuz.bodyColor());
console.log(mamunFace.face);

*/

/*
//getter and setter
class Person {
    constructor(name, age) { //Parent Class
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} eating fish`;
    }

    get getName() { //getter
        return `it's a your get Name ${this.name}`;
    }

    set setName(name) { //setter
        this.name = name;
    }
}

const myName = new Person('Mahfuz', 31);
myName.setName = 'mamun';
console.log(myName.name);
console.log(myName.getName);//Method but call as a property
console.log(myName.name);//Method but call as a property
*/

/*
//Static Method for Class
class Person {
    constructor(name, age) { //Parent Class
        this.name = name;
        this.age = age;
    }

    eat(name) {
        return `${this.name} ${name} eating fish`;
    }

    static staticMethod = function (parameteOne, parameteTwo) {
        return `${this.name} is not Object, It's a Class name and it is Static. The Static Method contain parameter ${parameteOne} and ${parameteTwo}`;
    }

    static staticMethodTwo() {
        return myName.age === myNameTwo.age;
    }

    static staticMethodThree(parameterOne, parameterTwo) {
        return parameterOne.name === parameterTwo.name;
    }//static method not depend on object.

    static staticMethodFour() {
        return this.name;
    }

}
const myName = new Person('Mahfuz', 31);
const myNameTwo = new Person('Mamun', 31);

console.log(myName.eat('korim'));

console.log(Person.staticMethod('Mahim', 'Taj'));
console.log(Person.staticMethodTwo());
console.log(Person.staticMethodThree(myName, myNameTwo));
console.log(Person.staticMethodFour()); //this keyword mean person not object
*/

/*
//polymorphism 
class Person {
    constructor(name, age) { //Parent Class
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating fish`;
    }

}

class PersonTwo extends Person {
    constructor(name, age, type) { //Sub Class
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
    }
    eat() {
        super.eat();
        return `${this.name} is eating ${this.type}`;
    }

    //     sleep(name) {
    //         super.eat();
    //         return `${name} ${this.name} is eating ${this.type}`;
    //     }
}
let myName = new PersonTwo('Mahfuz', 31, 'vegetable');

// console.log(myName.sleep('pokpok'));
console.log(myName.eat());
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    say() {// call greet method from say method in same class
        this.greet.call(this);
    }
}

const person = new Person('John Doe', 30);
person.say();
  // Output: Hello, my name is John Doe and I am 30 years old.
