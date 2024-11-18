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
let test = [12, 10, "typescript", true, [1, 1, 2]];
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
//# sourceMappingURL=index.js.map
