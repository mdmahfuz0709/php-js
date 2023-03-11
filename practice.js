/*
const promiseValue1 = 1;

function resolve(value) {
    console.log(value);
}

const myPromise = new Promise(function (resolve, reject) {
    if (promiseValue1 == 0) {
        resolve("ok");
    } reject("error");
});

myPromise
    .then(resolve)
    .catch(resolve);
*/

/*
const payment = false;
const mark = 70;

function admit() {
    console.log("Your Course is in progress");
    setTimeout(function () {
        if (payment) {
            console.log("Your Payment is Successful");
        } else {
            console.log("At first Make Payment");
        }
    }, 2000);
}

function progress() {
    setTimeout(function () {
        if (payment) {
            console.log("Now your are on progress");
        } else {
            console.log("Payment Failed, At first Make Payment");
        }
    }, 2000);
}

admit();
console.log('second');
*/
