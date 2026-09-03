
console.log("Testing the scope of the variable using var")
const browserName = "chrome"
function getBrowserVersion(browserName){
    if(browserName=="chrome"){
        
        var browserName ="firefox"
        console.log("Inside the block: "+browserName);
    }
    console.log("Outside the block: "+browserName);
}
getBrowserVersion(browserName)
 console.log("Outside the Function: "+ browserName);

 console.log("\n\Testing the scope of the variable using let")
const browserName1 = "chrome"
function getBrowserVersion(browserName1){
    if(browserName1=="chrome"){
        
        let browserName1 ="firefox"
        console.log("Inside the block: "+browserName1);
    }
    console.log("Outside the block: "+browserName1);
}
getBrowserVersion(browserName1)
 console.log("Outside the Function: "+ browserName1);
