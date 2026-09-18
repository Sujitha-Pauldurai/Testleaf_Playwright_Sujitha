"use strict";
/* Create a TypeScript program that defines a function to compute the factorial of a given nonnegative integer
   using a loop (iterative approach).*/
const number1 = 5, number2 = 12, number3 = -6;
function factorial(num) {
    let num3 = 1;
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            console.log(num3);
            num3 = num3 * i;
        }
    }
    else {
        throw new Error("Invalid number");
    }
    return num3;
}
console.log("Factorial Number", factorial(number1));
console.log("Factorial Number", factorial(number2));
console.log("Factorial Number", factorial(number3));
