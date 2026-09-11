
/* Array Transformation Using Arrow Functions: Using the Arrow functions, arrays, callbacks, map/filter/reduce	
   Get evens, square numbers, values >10, total, and average using arrow functions. */


const numbers = [10, 15, 20, 25, 30, 35];

const squareNumbers = numbers.map((num) => num ** 2 )
const doubleNumbers = numbers.map((num) => num * 2 )


const evenNumbers = numbers.filter(function(num) { 
     return num % 2 === 0        
    })


const numbersMorethan10 = numbers.filter(function(num){ return num > 10
})
const numbersMorethan20 = numbers.filter(function(num){ return num > 20
})

const total = numbers.reduce((sum,num) => sum + num ,0)
const average = total / numbers.length

console.log("Even Numbers : ",evenNumbers);
console.log("Square Numbers : ",squareNumbers);
console.log("Numbers > 10 : ",numbersMorethan10);
console.log("Double Numbers : ",doubleNumbers);
console.log("Numbers > 20 : ",numbersMorethan20);
console.log("Total : ",total)
console.log("Average :  ",average)



/* let a = ["HTML", "CSS", "JS"]

// Increase the array length to 7
a.length = 7;

console.log("After Increasing Length: ", a);

// Decrease the array length to 2
a.length = 2;
console.log("After Decreasing Length: ", a)
a.length = 3;
console.log("After Decreasing Length: ", a) */
