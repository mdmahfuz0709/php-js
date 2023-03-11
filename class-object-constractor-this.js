"use strict";

// Constrantor Function
/*function Player(name, age) {
    this.name = name;
    this.age = age;

    this.work = function (does, perticipate) {
        return `${this.name} ${does}s ${perticipate}`
    }
}

const mahim = new Player('mahim', 17);
const taj = new Player('taj', 13);

console.log(mahim.work('play', 'good'));
console.log(taj.work('jump', 'well'));*/


//Object
/*const car = {
    color: 'red',
    made: 'japan',
    brand: 'js',
    age: 1,
    control: true,
    work: function () {
        return `the ${this.color} color made ${this.made}`
    }
}

console.log(car.work());*/


/*
//This Keyword with this Items
implicit binding
explicit binding
new binding
window binding
*/

//implicit binding
/*
const passObject = function (obj) {
    obj.work = function () { //function er object er property somansoman hisabei assign hoi clone er poriborte jemon constractor function a thake.
        return `the ${this.color} color made ${this.made}`
    };
    obj.engine = 2;
}

const car = {
    color: 'red',
    made: 'japan',
    brand: 'js',
    age: 1,
    control: true,
}

const car2 = {
    color: 'blue',
    made: 'Bangladesh',
    brand: 'BD',
    age: 0,
    control: true,
}

passObject(car);
passObject(car2);

console.log(car.work());
console.log(car2.work());
console.log(car2.engine);
*/

//explicit binding with call
/*
const work = function (woner1, woner2, woner3) {
    return `the ${this.color} color made ${this.made} and the ${this.name} woner is ${woner1}, ${woner2} and ${woner3}`
}

const car = {
    name: 'car',
    color: 'red',
    made: 'japan',
    brand: 'js',
    age: 1,
    control: true,
}

const woner1 = "mahfuz";
const woner2 = "rifat";
const woner3 = "khadija";

const woner = [woner1, woner2, woner3]

console.log(work.call(car));// make undefined last three argument(ok with last three argument)
console.log(work.call(car, woner1, woner2, woner3)); // pass one by one(ok)
console.log(work.call(car, woner)); // make undefined last two argument
console.log(work.apply(car, woner)); // Pass argument by array(ok)
const returnBind = work.bind(car, woner1, woner2, woner3); // Bind same Call but return value
console.log(returnBind());
*/



//Class
/*
class Match {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    methodCreate() {
        return `${this.name} is a good boy`
    }
}

const mamun = new Match("mamun", 31);
console.log(mamun.name + ' And ' + mamun.age);
console.log(mamun);
console.log(mamun.methodCreate());
*/

//Class with build in Constructor function new Date();

class CarTemplate {
    constructor(name, published) {
        this.name = name;
        this.published = published;
    }

    carAge() {
        const age = new Date();
        return age.getFullYear() - this.published;
    }

}


const carDetails = new CarTemplate("Toyota", 2012);
console.log(`${carDetails.name} age is ${carDetails.carAge()}`)
