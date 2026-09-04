let string1="level",string2="Playwright",string3="madam"


//Function to reverse the Original String
function reverseString(originalString){
    console.log("\nOriginal String:  "+originalString)
    let stringArray = originalString.split(""), reverseString = ""
    //console.log("Sting array: "+stringArray);
    for(i=stringArray.length-1;i>=0;i--){
         reverseString = reverseString.concat(stringArray[i])
        }
        console.log("ReverseString: "+reverseString);
        return reverseString
}

//Function to check the string is palindomr or not
function isPalindorme(originalString,reverseString){
    if(originalString===reverseString){
        console.log("The String is Palindrome"); 
    }
    else
        console.log("The String is not Palindrome");
}
    
let string1Reverse = reverseString(string1)
isPalindorme(string1,string1Reverse)
let string2Reverse = reverseString(string2)
isPalindorme(string2,string2Reverse)
let string3Reverse = reverseString(string3)
isPalindorme(string3,string3Reverse)

