/*Number Data Type
---->Infinity
---->NaN
*/
const numberOfInfinity = 20 / 0;
console.log('numberOfInfinity = ' + numberOfInfinity + '\n');

const notANumber = "string" / 2;
console.log('notANumber = ' + notANumber + '\n');



//Null Data Type
//Faka Data, Value jana nei emon data, Kisu nei, empty input

const nullDataType = null;
console.log('nullDataType = ' + nullDataType + '\n');

//if you not assign just declear variable, then it would be Undefined
let withoutNull; //you cann't use constant, because constant not declear second times
console.log('withoutNull = ' + withoutNull + '\n');//variable value undefined auto reserve in memory and show that

//If you not declear isNotDefiend variable, you get a ReferenceError "isNotDefiend is not Defined"
//console.log(isNotDefiend); //but it's not get reference

const a = {
    nameis: 0,
};
const b = "";

// if (a == b) {
//     console.log('ok');
// } console.log('not ok');

console.log(typeof a.nameis);
console.log(typeof a.nameis.toString());//before uses toString(), u will make sure an Object
console.log(typeof b);