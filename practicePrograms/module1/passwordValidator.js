/* Password Validator : Validate minimum length, uppercase, lowercase, number, and special character. */


function  passwordValidate(password){
    let valid = true  
    const uppercase = /[A-Z]/ , lowercase = /[a-z]/ , specialChar = /[!@#$%^&*(),.?":{}|<>]/, number = /[0-9]/
    
    if(password.length < 8 ){
        console.log("\n The password length is < 8");
        valid = false
        
    }
    if(password.search(uppercase) < 0){
        console.log("\n The password has no upper case");
        valid = false
        
    }
    if(password.search(lowercase) < 0){

        console.log("\n The password has no lower case");
        valid = false
       
    }
    if(password.search(specialChar) < 0){
        console.log("\n The password has no special character");
        valid = false
        
    }
     if(password.search(number) < 0){
        console.log("\n The password no number");
        valid = false
        
    }

    return valid
}

const passwords = [
    "Hello123!",
    "hello123!",
    "HELLO123!",
    "HelloWorld!",
    "Hello123",
    "Hi1!"
];

for( let i =0; i < passwords.length; i++){
    if(passwordValidate(passwords[i]) === true){
        console.log(passwords[i]," the password is valid");
        
    }
    else{
        console.log(passwords[i],"The password is invalid");
        
    }
}
