
enum Environment{
     LOCAL,
     DEVELOPMENT, 
     STAGING = 12, 
     PRODUCTION
}

enum Environment1{
     LOCAL = "Local Environment",
     DEVELOPMENT = "Dev Environment", 
     STAGING = 12, 
     PRODUCTION =  "Prod Environment"
}

function runTest(environment:any):void{
 console.log("The test is running on ",environment);
 
}

runTest(Environment.LOCAL)
runTest(Environment.DEVELOPMENT)
runTest(Environment.PRODUCTION)
runTest(Environment1.DEVELOPMENT)
runTest(Environment1.STAGING)
runTest(Environment1.PRODUCTION)