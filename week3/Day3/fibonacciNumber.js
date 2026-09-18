"use strict";
/* Create a TypeScript program that defines a function to compute the nth Fibonacci number using a
loop (iterative approach) */
const number = 5;
function fibonacciNumbers(number) {
    let num1 = [];
    for (let i = 0; i < 5; i++) {
        num1[i + 1] = 0 + num1[i];
        num1[i + 2] = num1[i] + num1[i + 1];
    }
    return num1;
}
console.log(fibonacciNumbers(number));
