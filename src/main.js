"use strict";
let firstName = "Dylan";
console.log(firstName);
const json = JSON.parse("55");
console.log(typeof json);
const names = [];
names.push("Brian");
names.push("power");
console.log(names);
const titles = ["Mr", "Miss", "Mrs"];
const readonlyTuple = [1, "Two", false];
console.log(readonlyTuple);
const namedTuple = [2, 3, 4];
console.log(typeof namedTuple);
const [x, y, z] = namedTuple;
const car = {
    type: "Toyota",
    model: "Prius",
    year: 2016,
};
const car2 = {
    type: "Toyota"
};
car2.millage = 5000;
// index signatures
const nameAgeMap = {};
nameAgeMap.brian = 45;
// nameAgeMap.brian = "forty" //throws an error string not asignable to number
//enums
//numeric
var Cardinaldirections;
(function (Cardinaldirections) {
    Cardinaldirections[Cardinaldirections["North"] = 0] = "North";
    Cardinaldirections[Cardinaldirections["East"] = 1] = "East";
    Cardinaldirections[Cardinaldirections["South"] = 2] = "South";
    Cardinaldirections[Cardinaldirections["West"] = 3] = "West";
})(Cardinaldirections || (Cardinaldirections = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
//String Enums
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const car3 = {
    year: carYear,
    type: carType,
    model: carModel
};
const rectc = {
    height: 78,
    width: 200
};
const redRect = {
    height: 67,
    width: 90,
    color: "red"
};
const printStatusCode = (code) => {
    console.log(code);
};
printStatusCode("Not Found ");
printStatusCode(404);
// functions
function multiply(a, b, c, d = 2) {
    return a * b * (c || 1) * d;
}
function logger(num) {
    console.log(num);
}
logger(multiply(56, 89));
const negate = (value) => value * -1;
console.log(negate(90));
//casting
let g = 'hello';
console.log(g.length);
console.log(8..length);
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    getArea() {
        return this.w * this.h;
    }
}
const bob = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
const boby = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
const value = true; // a string cannot be used here since Exclude removed it from the type.
