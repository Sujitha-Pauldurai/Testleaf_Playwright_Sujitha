import {test} from "@playwright/test"

import data from "../../../Data/sfLogin.json"


//Setting for exectuting the test in serisal or parallel  mode. BY default playwright mode is parallel as per confi file
test.describe.parallel("Execute the test in serial mode",async() => {

for(let credentials of data){

test(`Improt date from the JSON file ${credentials.username}`, async({page})=> {

    await page.goto("https://login.salesforce.com")

    await page.locator('#username').fill(credentials.username)

    await page.locator('[name="Login"]').click()

    await page.locator('#password').fill(credentials.password)

    await page.locator('[name="Login"]').click()


})
}
})