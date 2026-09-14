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

      // Search for the Individual
      const table = page.locator('table[class="slds-table slds-table_header-fixed slds-table_bordered slds-table_edit slds-table_resizable-cols"]')
      await expect(table.locator("tr").filter({hasText : "Suji"}).nth(0)).toBeEnabled({timeout : 5000})
      const row =  table.locator("tr").filter({hasText : "Suji"}).nth(0)
      const column =  row.locator("td").nth(5)
      column.click()
      await expect(page.getByRole("menuitem",{name : "Edit"})).toBeVisible({timeout : 5000})
      await page.getByRole("menuitem",{name : "Edit"}).click({timeout : 5000})

      //Edit Individual
      await expect(page.locator('//article/h2[contains(text(),"Suji")]')).toBeVisible({timeout : 5000})
      await page.locator('//div[@class="salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu"]//a').click()
      await page.locator('//a[@role="option" and @title="Mr."]').click();
      await page.locator('input[placeholder = "First Name"]').fill("Thanush")
      await page.locator('//button[@title="Save"]/span[contains(text(),"Save")]').click()
      await expect(table.locator("tr").filter({hasText : "Aadhi"}).nth(0)).toBeEnabled({timeout : 5000})


} )