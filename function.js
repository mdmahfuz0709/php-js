
//IIEF= Immediatly Invoked Function Expression
(function () {
    console.log('i\'m a self invoking/ IIFE function \n');
})(); //self invoking function



//Arrow Function
const a = () => console.log('i\'m an arrow function \n'); //function declare or define
a(); //function call



//constructor function
function InvokedFunction(name, age) {
    this.name = name;
    this.age = age;
}

const x = new InvokedFunction('i\'m an object property with constructor function \n', 30);
console.log(x.name); // without function expression(put a function in variable) or arrow use this keyword for create Object



//Anonymous funciton
const y = function () {
    console.log('i\'m an anonymous function \n');
}

y();



//Function
function functionName(name) {
    console.log(name);
}

functionName('i\'m a function with parameter \n');



//Callback function
function functionForCallback(callback) {
    callback(); //callback function =(function(){})();
}

function callbackFunction() {
    console.log('i\'m a callback function  \n');
}
functionForCallback(callbackFunction);
