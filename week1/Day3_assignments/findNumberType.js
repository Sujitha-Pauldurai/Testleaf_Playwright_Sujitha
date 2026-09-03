// Javascript program for finding the number is positive,negative or zero

let num1=-24, num2 = 0, num3=68.7
function findNumberType(number){
    if(number==0)
        return "zero"
    else if (number < 0)
        return "Negative"
    else
        return "Positive"
}
let result = findNumberType(num1)
console.log("The number "+num1+" is "+result)
result = findNumberType(num2)
console.log("The number "+num2+" is "+result)
console.log("The number "+num3+" is "+findNumberType(num3))
console.log("The number -7 is "+findNumberType(-7))


