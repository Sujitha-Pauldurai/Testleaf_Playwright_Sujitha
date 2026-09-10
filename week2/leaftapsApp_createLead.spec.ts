import {test} from "@playwright/test"

test("Sales Force application",async({ page }) => {

  await page.goto(' http://leaftaps.com/opentaps/control/main');
  await page.locator('[id="username"]').fill('democsr2') // example for CSS Selector - By attribute
  await page.locator('#password').fill('crmsfa') // example for CSS Selector - By ID 
  await page.locator('.decorativeSubmit').click() // example for CSS Selector - By Class
  await page.locator('text=CRM/SFA').click()

  await page.locator('[href="/crmsfa/control/leadsMain"]').click()
  await page.locator('[href="/crmsfa/control/createLeadForm"]').click()
  await page.locator('#createLeadForm_companyName').fill("Testleaf")
  await page.locator('#createLeadForm_firstName').fill("Abi")
  await page.locator('#createLeadForm_lastName').fill("Abi")
  
   // Example for Selecting dropdown Item (<select> & <option> type dropdowns)
  let sourceDropdown = await page.locator('[name="dataSourceId"]')
  sourceDropdown.selectOption({label:"Conference"})
  // Example for Printing all the dropdown Options
  let sourceDropdownOptions = page.locator('[name="dataSourceId"]>option')
  let count = await sourceDropdownOptions.count()
  console.log("Source drop down options count: ",count);
  for (let index = 0; index < count; index++) {
    
    console.log(await sourceDropdownOptions.nth(index).innerText());

  }
  await page.locator('[name="personalTitle"]').fill("Hello")
  await page.locator('#createLeadForm_generalProfTitle').fill("Testleaf Program")
  await page.locator('input[id="createLeadForm_annualRevenue"]').fill('1000000') // example for CSS Selector - By attribute
  await page.locator('[name="departmentName"]').fill("Testing")
  await page.locator('#createLeadForm_primaryPhoneNumber').fill("9048652343")
  await page.locator('.smallSubmit').click()
  await page.locator('#sectionHeaderTitle_leads').waitFor({ state: 'visible' })
  // Code to test the lead is created and website to navigated to the next screen after clicking the 'create lead' button
  let text = await page.locator('#sectionHeaderTitle_leads').innerText() // Verify any one element of the target page is visible
  if(text === "View Lead"){
    console.log("Lead is created successfully");
  }
  else{
    console.log("Lead is not created");
  } 




  
});
