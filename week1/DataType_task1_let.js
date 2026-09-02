let firstName = "Sujitha"
//let firstName = "Aathi" --- redeclaration is not allowed while using the "let"
console.log("FirstName:" + firstName)
console.log(typeof firstName);

let companyName = `Kumaran`
console.log("\nCompany1:"+ companyName)
console.log(typeof companyName);
companyName = 'Optimus' 
/* redeclaration is not allowed but reassigment is allowed in "let" keywork but 
        while using "var" both redeclaration and reassignment is allowed*/
console.log("Company2:"+ companyName)


let mobileNumber = 9047143060
console.log("\nMobileNumber:"+ mobileNumber)
console.log(typeof mobileNumber);

let isAutomation = true
console.log("\nisAutomation:"+ isAutomation)
console.log(typeof isAutomation);

let hasPlaywright
console.log("hasPlaywright type:"+ typeof hasPlaywright)