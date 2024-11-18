// TYPES IN TYPESCRIPT

// 1. Boolean
let isDone: boolean = false;
console.log("---boolean---", isDone);
// isDone = 12; // Error: Type '12' is not assignable to type 'boolean'

// 2. Number
let num: number = 12;
console.log("---number---", num);

// 3. String
let color: string = "blue";
console.log("---string---", color);

// 4. Array
let list1 = [1, 2, "3"];
// let list2: number[] = [1, 2, "3"]; // Error: Type 'string' is not assignable to type 'number'
let list: number[] = [1, 2, 3];

// 5. Null
let n: null = null;
console.log("---null---", n);

// 6. Undefined
let u: undefined = undefined;
console.log("---undefined---", u);

// 8. void - used in functions that do not return a value
function warnUser(): void {
  console.log("This is my warning message");
}
warnUser();

function warnUser1(): number {
  //   return "12"; // Error: Type 'string' is not assignable to type 'number'
  return 12;
}

const number = warnUser1();
console.log("---number-returnType---", typeof number);

// 9. Tuple - Array with fixed number of elements of particular types
let tuple: [number, string] = [1, "hello"];
// let tuple : [number, string] = ["1", "hello"]; // Error: Type 'string' is not assignable to type 'number'
console.log("---tuple---", tuple);
// tuple.push(2); // the value will be added to the tuple, so apparanetly it is a bug in typescript...

// 10. Enum - set of named constants

// similar as const Red = "red", Green = "green", Blue = "blue";
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}
let greenColor: Color = Color.Green;
console.log("---enum---", greenColor);

// This will generate more optimized code after compilation...
const enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

const mySize = Size.Small;
console.log("---const-enum---", mySize);

let test: (string | number | boolean | number[])[] = [
  12,
  10,
  "typescript",
  true,
  [1, 1, 2],
];
console.log(typeof test, "---test");

// 11. Any - any type
let notSure: any;
console.log(typeof notSure, "---notSure");
notSure = 4;
console.log(typeof notSure, "---notSure");
notSure = "maybe a string instead";
console.log(typeof notSure, "---notSure");

// 12. Unknown - similar to any but more restrictive
let userInput: unknown = { name: "typescript" };
// console.log(userInput.name);
// console.log(userInput.age); // No error

// 13. any vs unknown
let anyValue: any;
let unknownValue: unknown;

// console.log(anyValue.isEnrolled); // will give reading value of undefined
// console.log(unknownValue.isEnrolled); // Error: Object is of type 'unknown'

// 14. Objects - object is a type that represents the non-primitive type
const object: {
  readonly id: number;
  name: string;
  fax?: string;
  retire: (date: Date) => void;
} = {
  id: 0,
  name: "typescript",
  retire: (date) => {
    console.log(date);
  },
};
// object.id = 12; // Error: Cannot assign to 'id' because it is a read-only property
object.retire(new Date());

// 15. Type Alias
type PersonType = {
  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;
  faq?: string | null;
};

const person: PersonType = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(person.faq); // undefined

// 16. Union - allows to store values of multiple types
let union: string | number | boolean;
union = "typescript";
union = 12;
union = true;
// union = [1, 2, 3]; // Error: Type 'number[]' is not assignable to type 'string | number | boolean'

// 17. Intersection - combines multiple types into one
type FirstType = {
  id: number;
  name: string;
};

type SecondType = {
  id: number;
  age: number;
};

type CombinedType = FirstType & SecondType;

const combined: CombinedType = {
  id: 1,
  name: "typescript",
  age: 30,
};
console.log("---combined---", combined);

// 18. Literal Types - specify the exact value a variable can take
let literal: "typescript" | "javascript" | "react";
literal = "typescript";
// literal = "angular"; // Error: Type '"angular"' is not assignable to type '"typescript" | "javascript" | "react"'
console.log("---literal---", literal);

let numericLiteral: 1 | 2 | 3;
numericLiteral = 1;
// numericLiteral = 4; // Error: Type '4' is not assignable to type '1 | 2 | 3'
console.log("---numericLiteral---", numericLiteral);

// 19. Type Assertion - tells the compiler that you know more about the type of a value than it does
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

console.log("---type-assertion---", strLength);

// 20. Type Guards - a way to check the type of a variable at runtime
function isString(test: any): test is string {
  return typeof test === "string";
}

// 21. functions    - 1. function declaration, 2. function expression, 3. arrow function
function add(a: number, b: number): number {
  return a + b;
}
console.log("---add---", add(1, 2));

const add1 = function (a: number, b: number): number {
  return a + b;
};
console.log("---add1---", add1(1, 2));

const add2 = (a: number, b: number): number => a + b;
console.log("---add2---", add2(1, 2));

const sub = (a: number): number => {
  return a - 1;
};
console.log("---sub---", sub(10));

// 22. Optional Parameters
function optionalParams(a: number, b?: number): number {
  return a + (b || 0);
}
console.log("---optionalParams---", optionalParams(1));

// 23. Default Parameters
function defaultParams(a: number, b: number = 0): number {
  return a + b;
}
console.log("---defaultParams---", defaultParams(1));

// 24. Rest Parameters
function restParams(a: number, ...b: number[]): number {
  return a + b.reduce((acc, val) => acc + val, 0);
}
console.log("---restParams---", restParams(1, 2, 3, 4, 5));

const check: string = "12";

if (check) console.log("true");
else console.log("false");
