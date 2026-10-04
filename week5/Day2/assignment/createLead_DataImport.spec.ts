import test, { expect } from "@playwright/test";

import dotenv from "dotenv"
import path from "path";

import {parse} from "csv-parse/sync"

import fs from "fs"

// set the user from terminal if not use sf_user1 or sf_user2 as environment details
let user= process.env.user || 'lf_user1' 

//config the environment file Details 
dotenv.config({path:`Data/${user}.env`})

let userName:any,password:any,url:any

type Lead = {
    companyName: string
    firstName: string
    lastName: string
    source: string
    marketingCampaign: string
    industry: string
    preferredCurrency: string
    country: string
    state: string
}

let leadFile: Lead[]


test.beforeAll("Data Import from files",async() => {

    url = process.env.new_URL as string
    userName = <string>process.env.new_Username
    password = process.env.new_Password!

    leadFile = parse(fs.readFileSync('Data/lt_createLead.csv', "utf-8"),{columns:true,skip_empty_lines:true})

    console.log(leadFile);
    

  
})

test.beforeEach("Login using the ENV file",async({page}) => {

   
    await page.goto(url)

    await page.locator('#username').fill(userName)

    await page.locator('#password').fill(password)

    await page.getByRole('button',{name: "Login"}).click()

    await page.getByText('CRM/SFA').click()

})



test("Creat a lead using CSV file",async({page})=>{

    console.log(leadFile);

    // access the value from the environment file using type assertion
    await page.locator('[href="/crmsfa/control/leadsMain"]').click()
    await page.locator('[href="/crmsfa/control/createLeadForm"]').click()
    await page.locator('#createLeadForm_companyName').fill(leadFile[0].companyName)
    await page.locator('#createLeadForm_firstName').fill(leadFile[0].firstName)
    await page.locator('#createLeadForm_lastName').fill(leadFile[0].lastName)
    
    // Example for Selecting dropdown Item (<select> & <option> type dropdowns)
    let sourceDropdown = await page.locator('[name="dataSourceId"]')
    sourceDropdown.selectOption({label:leadFile[0].source})
   
    let marketingDropdown = await page.locator('[name="marketingCampaignId"]')
    await  marketingDropdown.selectOption({label:leadFile[0].marketingCampaign})
     // Printing all the dropdown values of Marketing Campaign
    let marketingDropdownOptions = page.locator('[name="marketingCampaignId"]>option')
    let count = await marketingDropdownOptions.count()
    console.log("Marketing drop down options count: ",count);
    for (let index = 0; index < count; index++) {
        
        console.log(await marketingDropdownOptions.nth(index).innerText());

    }

    let industryDropdown =  page.locator('#createLeadForm_industryEnumId')
    await industryDropdown.selectOption({label:leadFile[0].industry})

    let currencyDropDown = page.locator('[name="currencyUomId"]')
    await currencyDropDown.selectOption({value:leadFile[0].preferredCurrency})

    let countryDropdown = page.locator('#createLeadForm_generalCountryGeoId')
    await countryDropdown.selectOption({label:leadFile[0].country})

    let stateDropdown = page.locator('#createLeadForm_generalStateProvinceGeoId')
    // await page.waitForSelector(`#createLeadForm_generalStateProvinceGeoId>option:has-text(${leadFile[0].state})`)
    // Printing all the of State dropdown
    let stateDropdownOptions = await stateDropdown.locator('option')
    
    await expect(stateDropdownOptions).not.toHaveCount(0)
    await stateDropdown.selectOption({label:leadFile[0].state})
    count = await stateDropdownOptions.count()
    console.log("State drop down options count: ",count);
    for (let index = 0; index < count -1; index++) {
        
        console.log(await stateDropdownOptions.nth(index).innerText());

    }

     await page.locator('.smallSubmit').click()


  
})

test.afterEach("Verfiy the Lead is created ot not",async({page}) =>{

    // Code to test the lead is created and website to navigated to the next screen after clicking the 'create lead' button
    let text = await page.locator('#sectionHeaderTitle_leads').innerText() // Verify any one element of the target page is visible
    if(text === "View Lead"){
        console.log("Lead is created successfully");
    }
    else{
        console.log("Lead is not created");
    } 

})