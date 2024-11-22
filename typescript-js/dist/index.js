"use strict";
let isDone = false;
console.log("---boolean---", isDone);
let num = 12;
console.log("---number---", num);
let color = "blue";
console.log("---string---", color);
let list1 = [1, 2, "3"];
let list = [1, 2, 3];
let n = null;
console.log("---null---", n);
let u = undefined;
console.log("---undefined---", u);
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
function warnUser1() {
    return 12;
}
const number = warnUser1();
console.log("---number-returnType---", typeof number);
let tuple = [1, "hello"];
console.log("---tuple---", tuple);
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
let greenColor = Color.Green;
console.log("---enum---", greenColor);
const mySize = "small";
console.log("---const-enum---", mySize);
let test = [
    12,
    10,
    "typescript",
    true,
    [1, 1, 2],
];
console.log(typeof test, "---test");
let notSure;
console.log(typeof notSure, "---notSure");
notSure = 4;
console.log(typeof notSure, "---notSure");
notSure = "maybe a string instead";
console.log(typeof notSure, "---notSure");
let userInput = { name: "typescript" };
let anyValue;
let unknownValue;
const object = {
    id: 0,
    name: "typescript",
    retire: (date) => {
        console.log(date);
    },
};
object.retire(new Date());
const person = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
console.log(person.faq);
let union;
union = "typescript";
union = 12;
union = true;
const combined = {
    id: 1,
    name: "typescript",
    age: 30,
};
console.log("---combined---", combined);
let literal;
literal = "typescript";
console.log("---literal---", literal);
let numericLiteral;
numericLiteral = 1;
console.log("---numericLiteral---", numericLiteral);
let someValue = "this is a string";
let strLength = someValue.length;
console.log("---type-assertion---", strLength);
function isString(test) {
    return typeof test === "string";
}
function add(a, b) {
    return a + b;
}
console.log("---add---", add(1, 2));
const add1 = function (a, b) {
    return a + b;
};
console.log("---add1---", add1(1, 2));
const add2 = (a, b) => a + b;
console.log("---add2---", add2(1, 2));
const sub = (a) => {
    return a - 1;
};
console.log("---sub---", sub(10));
function optionalParams(a, b) {
    return a + (b || 0);
}
console.log("---optionalParams---", optionalParams(1));
function defaultParams(a, b = 0) {
    return a + b;
}
console.log("---defaultParams---", defaultParams(1));
function restParams(a, ...b) {
    return a + b.reduce((acc, val) => acc + val, 0);
}
console.log("---restParams---", restParams(1, 2, 3, 4, 5));
const check = "12";
if (check)
    console.log("true");
else
    console.log("false");
//# sourceMappingURL=index.js.map