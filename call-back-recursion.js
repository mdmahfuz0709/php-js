/*
//CallBack Function
function onlyFunction(callbackFunction, name) {
    callbackFunction(name);
}

function callbackFunction(name) {
    console.log('amar jan', name);
}

function callbackFunction2(name) {
    console.log('amar sona moyna', name);
}

onlyFunction(callbackFunction, 'Khadija');
onlyFunction(callbackFunction2, 'Rubaiya');



//Recursion CallBack Function
function sum(i) {
    if (i == 1) {
        return 1;
    }

    return i + sum(i - 1);
}

let result = sum(5);
console.log(result);



//Alert With CallBack Function, you have to link with HTML file
function declareFunction(age, parameter, parameter2) {
    if (age == 10) {
        parameter();
    } else {
        parameter2();
    }
}

let callbackFunction = function () {
    alert('amar sonar bangla');
}

let callbackFunction2 = function () {
    alert("sorry age didn't match");
}

let age = 10;

declareFunction(age, callbackFunction, callbackFunction2);


//CallBack Function
let callbackFunction = function () {
    alert('amar sonar bangla');
}

let declareFunction = callbackFunction(); //Function already Execute , you get Error

declareFunction();

*/


//callback from w3Schools asynchronous
const display = function (result) {
    console.log(result);
}

const calculate = function (sum1, sum2, callBack) {
    const calculate = sum1 + sum2;
    if (callBack) callBack(calculate);
}

calculate(5, 5);