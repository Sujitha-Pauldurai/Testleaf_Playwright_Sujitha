import test from "@playwright/test";

import dotenv from "dotenv"
import path from "path";

// set the user from terminal if not use sf_user1 or sf_user2 as environment details
let user= process.env.user || 'sf_user1' || 'sf_user2'

//config the environment file Details 
dotenv.config({path:`Data/${user}.env`})

test("Export data from the ENV files",async({page})=>{

    // access the value from the environment file using type assertion
    await page.goto(process.env.new_URL as string)

    await page.locator('#username').fill(<string>process.env.new_Username)

    await page.locator('[name="Login"]').click()

    await page.locator('#password').fill(process.env.new_Password!)

    await page.locator('[name="Login"]').click()
})