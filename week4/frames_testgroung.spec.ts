import {test,expect} from "@playwright/test"

test("Frame Handling", async({page}) =>{

    await page.goto('https://www.leafground.com/frame.xhtml')
   

    const outerFrame = page.frameLocator('//iframe[@src="page.xhtml"]')
    const innerFrame = outerFrame.frameLocator('#frame2')
    //console.log(outerFrame.);
    
    await innerFrame.locator('#Click').click()

    await expect(innerFrame.locator('#Click')).toContainText('Hurray! You Clicked Me.')


})