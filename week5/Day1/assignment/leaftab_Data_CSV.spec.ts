import {expect, test} from "@playwright/test"

import {parse} from "csv-parse/sync"

import fs from 'fs'

import path from "path"

//Parsing the CSV file to convert the values to string of Object
let data: any = parse(fs.readFileSync('Data/leafTabsLogin.csv', 'utf-8'),{columns:true,skip_empty_lines:true})

console.log(data);


// to exceute the tests in parallel mode
test.describe.parallel("Run test in parallel",async()=>{

//looping the test for all the test data available in the input csv file
for(let credential of data){

test(`Export date from CSV ${credential.tcid}`,async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill(credential.username)
    await page.locator('#password').fill(credential.password)
    await page.getByRole('button',{name: "Login"}).click()

    await expect(page.getByText('CRM/SFA')).toBeVisible()

})
}

})