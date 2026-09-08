//Home assignment to understand different ways to declare functions in JavaScript and how to use callback functions. 

/* Assignment Requirements:
Task 1: Function Declaration
Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,
<name>!" to the console.
Task 2: Arrow Function
Create an arrow function named `double` that takes a number as a parameter and returns
double its value.
Task 3: Anonymous Function
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
after 2 seconds.
Task 4: Callback Function
Create a function named `getUserData` that takes a callback function as a parameter. Inside
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
that should print “Call Back Function” after 3 seconds.
Call the `getUserData` function and log message using the callback function.  */


//Task 1
function userProfile(name){
    console.log("Hello, <"+name+">!");
    
}

userProfile("Harshath Aadhiran")

//Task 2 : Arrow Function
/* example 1
const addTwo = (num) => {return num + 2;};

example 2
const addTwo = (num) => num + 2;

example 3
const addTwo = num => num + 2;

example 4
const addTwo = a => {
 const newValue = a + 2;
 return newValue;
}; */

let doubelValue = (num) => num * 2
console.log(doubelValue(8));

//Task 3 -> Anonymous Function

setTimeout( function() {
    console.log("This message is delayed by 2 seconds")},2000)

//Task 4: Callback Function

function callBackFunction(){
    console.log("Call back function");
}

function getUserData(callBack){
  setTimeout(callBack,5000)
}

getUserData(callBackFunction)
