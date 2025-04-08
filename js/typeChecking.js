"use strict";
/**
 * Different ways to check the type of a value.
 */
// 1. typeof operator - Useful for primitives and functions
console.log(42, typeof 42); //number
console.log('hello', typeof 'hello'); // string
console.log(true, typeof true); // boolean
console.log(undefined, typeof undefined); // undefined
console.log(null, typeof null); // object
console.log([], typeof []); // object
console.log({}, typeof {}); // object
console.log(Symbol(), typeof Symbol()); // symbol
console.log(atob, typeof atob); // function
// 2. instanceof operator - Useful for objects and classes
/**
 * The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.
 */
console.log({} instanceof Object); // true
console.log([] instanceof Array); // true
console.log(new Date() instanceof Date); // true
// Object.prototype.toString.call - Useful for more specific type checking
/**
 * This is a classic way to get the internal [[Class]] of a value in JavaScript. It returns a string
 */
console.log(42, Object.prototype.toString.call(42)); // [object Number]
console.log('hello', Object.prototype.toString.call('hello')); // [object String]
console.log(true, Object.prototype.toString.call(true)); // [object Boolean]
console.log(undefined, Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(null, Object.prototype.toString.call(null)); // [object Null]
console.log([], Object.prototype.toString.call([])); // [object Array]
console.log({}, Object.prototype.toString.call({})); // [object Object]
console.log(new Date(), Object.prototype.toString.call(new Date())); // [object Date]
console.log(Symbol(), Object.prototype.toString.call(Symbol())); // [object Symbol]
console.log(atob, Object.prototype.toString.call(atob)); // [object Function]
console.log(NaN, Object.prototype.toString.call(NaN)); // [object Number]
// 4. To check Arrays, use Array.isArray
console.log([], Array.isArray([])); // true
console.log({}, Array.isArray({})); // false
// 5. custom null and undefined check
console.log(null, null === null);
console.log(undefined, typeof undefined === 'undefined');
// 6. Check not a number
console.log(NaN, Number.isNaN(NaN)); // true
console.log(42, Number.isNaN(42)); // false
console.log('hello', Number.isNaN('hello')); // false
