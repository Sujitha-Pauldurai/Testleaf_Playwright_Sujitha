
let string1 = "Hello World", string2 =  " fly me to the moon ",string3="listen",
    string4="Silent",string5="Hello",string6="WORLD"

// Function for finding the length of last word of the string    
function findLastWordLength(orgString){
    console.log("\nOriginal String :"+orgString)
    orgString=orgString.trim()
    let strArray=orgString.split(" ")
    console.log("String word Array: "+strArray);
    let length=strArray.length
    let lastWord=strArray[length-1]
    console.log("LastWord: "+lastWord);
    let lastWordLength = lastWord.length
    console.log("Last word length: "+lastWordLength)
        
}

// Function for finding the string is anagram or not
function isAnagram(string1,string2){
    console.log("\nGiven String values : "+string1,string2);
    string1=string1.toLowerCase() // code to change the string to lowerCase letters
    string1=string1.split("").sort().join("") // code to sort the string alphabetically
    string2=string2.toLowerCase()
    string2=string2.split("").sort().join("")
    console.log("String values after sorting : "+string1,string2);
    if(string1===string2)
        console.log("The Strings are anagram");
    else
        console.log("The Strings are not anagarm"); 

}

findLastWordLength(string1)
findLastWordLength(string2)
findLastWordLength("The String race and lace are anagram")
isAnagram(string3,string4)
isAnagram(string5,string6)
isAnagram("race","care")

