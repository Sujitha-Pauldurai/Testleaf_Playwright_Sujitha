/** Automate interactions with frames, trigger alerts, and verify the displayed text based on
actions using Playwright on the given application.  */

import { expect,test } from "@playwright/test";

test("W3Schools - Frame & Alert Handling", async({page})=>{

    // alert Handler : since we are handling only one alert I am using page.once
    page.once("dialog",async(basicAlert) => {
    let msg = basicAlert.message()  
    let type = basicAlert.type()
    console.log("prompt type: ",type,"\nprompt message :",msg);
    
    if(type === "confirm"){
        basicAlert.accept()
    }

    })
    page.waitForLoadState('domcontentloaded')
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    // Identify the frame using framelocator
    let resultFrame = page.frameLocator('#iframeResult')
    await resultFrame.getByRole('button',{name: "Try it"}).click()

    // assert the text after Clikcing OK in the alert box.
    expect(resultFrame.locator('#demo')).toBeVisible()
    expect(resultFrame.locator('#demo')).toContainText('You pressed OK')
})