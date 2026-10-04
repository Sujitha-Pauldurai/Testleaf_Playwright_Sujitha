import test from "@playwright/test";

import dotenv from "dotenv"

test.use(
    {
       storageState:'Data/salesForcelogin.json' 
    })

test.describe("Sales force application",() =>{

    test("Verify the home page using Statage state", async({page}) =>{
        //Login Skipped and Opening the home page directly
        await page.goto('https://orgfarm-2596c4c030-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome');
    })

    test("Open leads page",async({page})=>{

        test.slow()
        await page.getByRole('button', { name: 'App Launcher' }).click();
        await page.getByLabel('View All Applications').click();
        await page.getByRole('link', { name: 'Leads' }).click();

    })

    test.fail("Invalid Session",async({page})=>{
        console.log(test.info().error);
        
    })

})

// By mentioning the tag name we can execute the test using tag name npx playwright test --grep "leafTab"
test.describe("Leaftab Application",{tag:'@leafTab'},() =>{


    let url,userName,password

    // set the user from terminal if not use sf_user1 or sf_user2 as environment details
    let user= process.env.user || 'lf_user1' 
    
    //config the environment file Details 
    dotenv.config({path:`Data/${user}.env`})

    // navigate to URL before each test
    test.beforeEach("Login using the ENV file",async({page}) => {

         url = process.env.new_URL as string         
       
        await page.goto(url)   
        
    
    })

    test("Verify valid user",async({page})=>{


        userName = <string>process.env.new_Username
        password = process.env.new_Password!   

        await page.locator('#username').fill(userName)
    
        await page.locator('#password').fill(password)
    
        await page.getByRole('button',{name: "Login"}).click()
    
        await page.getByText('CRM/SFA').click()

    })

    test.fail("Verify Invalid User",async({page})=>{

        await page.locator('#username').fill("WronguserName")
    
        await page.locator('#password').fill("password")
    
        await page.getByRole('button',{name: "Login"}).click()
    
        await page.getByText('CRM/SFA').click()

    })


    test.fixme("Incomplete flow", async({page})=>
    {
        await page.locator('#username').fill("WronguserName")
    
        await page.locator('#password').fill("password")
    
       // missed the step for Submit button click
    
        await page.getByText('CRM/SFA').click()
    })

    test.skip("Password Validation",async()=>{

        password = process.env.new_Password! 

        function  passwordValidate(password:string){
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
                console.log("\n The password has no number");
                valid = false
                
            }

            return valid
        }
        if (passwordValidate(password) === true)
         console.log('password is valid');
        else
            console.log('password is not valid');
            
        
    })
})