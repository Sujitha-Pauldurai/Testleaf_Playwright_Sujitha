/* Create a TypeScript program that defines a function to compute the nth Fibonacci number using a
loop (iterative approach) */



const number : number = 12, number4 : number=5, number5:number =23

function fibonacciNumbers(number : number) : number{
    let num1: number =0, num2: number =1
    console.log("Fibonacci Sequence :");
    
   for (let i: number = 1; i < number; i++) {
       console.log(num1);
       let num3: number = num1+num2
       num1 = num2
       num2 = num3      

    }
    return num2
}

console.log("\n Fibonacci Number for",number," : ",fibonacciNumbers(number))
console.log("\n Fibonacci Number for",number," : ",fibonacciNumbers(number4))
console.log("\n Fibonacci Number for",number," : ",fibonacciNumbers(number5))

