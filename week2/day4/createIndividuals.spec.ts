import  { expect, test } from "@playwright/test"

test("Create Individual",async({page}) =>{

      //Login Page
      await page.goto(' https://login.salesforce.com/?locale=in');
      await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
      await page.locator('#Login').click()
      expect (page.locator('#password')).toBeVisible() // to verify the field is visible or not
      await page.locator('#password').fill('TestLeaf@2025')
      await page.locator('#Login').click()
    
      //Open Individual Page
      await page.locator('button[title="App Launcher"]').click()
      expect(page.getByText("App Launcher")).toBeVisible()
      await page.locator('[aria-label="View All Applications"]').click()
      const appLaunchForm =  page.locator('div[class="al-modal-container slds-grid slds-grid_vertical slds-scrollable_none"]')
      //console.log(await appLaunchForm.allInnerTexts());
      await expect(appLaunchForm).toBeVisible({timeout : 5000})
      await appLaunchForm.getByText("Individuals").click()
      //Create new Individual
      page.locator('//a[@title="New"]/div').click()
      page.locator('//input[@placeholder="Last Name"]').fill("Suji")
      page.locator('//div[@class="button-container-inner slds-float_right"]/button[3]').click()

      //Verify the new Individual is created successfully
      await expect(page.locator('//div[contains(text(),"Individual")]/following-sibling::div/span[contains(text(),"Suji")]')).toBeVisible()
      

} )