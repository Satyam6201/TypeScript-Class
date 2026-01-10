"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sym = Symbol();
var sym2 = Symbol();
var sym3 = Symbol('abc');
var sym4 = Symbol('abc');
console.log(sym == sym2);
console.log(sym);
console.log(sym3); //Symbol(abc)
console.log(sym3 == sym4); // false because both have different address value 
const id = Symbol('id');
const obj = {
    [id]: 100,
    name: "Satyam",
    age: 21
};
console.log(obj[id]);
console.log(obj.age);
