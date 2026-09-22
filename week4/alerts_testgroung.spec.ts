/*Automate a JavaScript prompt dialog using Playwright and enter the value "Playwright" when the prompt
is displayed. */

import { Expect,test } from "@playwright/test";



test("Alert Handling", async({page}) => {

    // alert Handler
    page.on("dialog", async(alert) => {
        let alertType = alert.type()
        let alertMsg = alert.message()
        console.log(alertType,alertMsg)

        if(alertType === "prompt"){
            alert.accept("Playwright")
        }
        else if(alertType === "confirm"){
            alert.accept()
        }
        else if(alertType === "alert"){
            alert.accept()
        }
        else{
            console.log("This alert handling is not implemented yet.");
            
        }

    
        
    })

    await page.goto('https://www.leafground.com/alert.xhtml')

    //Basic alert
    await page.locator('//span[text()="Show"]').first().click()

    //Confirm alert
    await page. locator('//span[text()="Show"]').nth(1).click()

    //Prompt alert
    await page.locator('//span[text()="Show"]').nth(4).click()
})