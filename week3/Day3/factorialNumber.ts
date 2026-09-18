/* Create a TypeScript program that defines a function to compute the factorial of a given nonnegative integer 
   using a loop (iterative approach).*/




const number1 : number = 5, number2 : number = 12 , number3 = -6

function factorial(num : number) : number{
    let num3 : number = 1
    if(num > 0){
        for (let i: number = 1; i <= num; i++) {
        console.log(num3);
        num3 = num3 * i
        

        }
    }
    else{
        throw new Error("Invalid number")
    }
    return num3
}

console.log("Factorial Number",factorial(number1));
console.log("Factorial Number",factorial(number2));
console.log("Factorial Number",factorial(number3));
