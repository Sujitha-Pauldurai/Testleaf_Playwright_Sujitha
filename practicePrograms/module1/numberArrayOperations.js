/* Find largest, smallest, sum, average, even count, and odd count from an array. */

let numberArray = [10, 20, 30, 40, 50]

function findLargeNumber(numArray){

    let largestNumber = numArray[0]
    for(let i=1;i<numArray.length;i++){
        //console.log(largestNumber,numArray[i]);
        if(largestNumber < numArray[i]){
            largestNumber = numArray[i]           
        }
    }
    return largestNumber
}
function findSmallNumber(numArray){

    let smallestNumber  = numArray[0]
    for(let i=1;i<numArray.length;i++){
        //console.log(largestNumber,numArray[i]);
        if(smallestNumber  > numArray[i]){
            smallestNumber  = numArray[i]           
        }
    }
    return smallestNumber 
}

function findSum(numArray){

    let sum = 0
    for(let i=0;i<numArray.length ;i++){
        //console.log(numArray[i],sum);
        sum  = sum + numArray[i]
    }
    return sum
}

function findAverage(numArray){
    let avg, sum = findSum(numArray)
    avg = sum / numArray.length
    return avg
}

function findEvenCount(numArray){
    let count = 0
    for(let i=0;i<numArray.length;i++){
        //console.log(largestNumber,numArray[i]);
        if((numArray[i] % 2) === 0){
            count++        
        }
    }
    return count
}

function findOddCount(numArray){
    let count = 0
    for(let i=0;i < numArray.length;i++){
        //console.log(largestNumber,numArray[i]);
        if((numArray[i] % 2) !== 0){
            count++        
        }
    }
    return count
}

function printResult(numberArray){
    console.log("\nLargest number of the Array is:",findLargeNumber(numberArray));
    console.log("Smallest number of the Array is:",findSmallNumber(numberArray));
    console.log("Sum of the Array is:",findSum(numberArray));
    console.log("Average of the Array is:",findAverage(numberArray));
    console.log("Even count of the Array is:",findEvenCount(numberArray));
    console.log("Odd count of the Array is:",findOddCount(numberArray));  
}

printResult(numberArray)
printResult([5, 12, 8, 21, 7])
printResult([1, 2, 3, 4, 5])
printResult([100, 50, 25, 75])
printResult([-10, 20, -5, 15, 0])
