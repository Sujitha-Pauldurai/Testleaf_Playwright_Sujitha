import  { test } from "@playwright/test"

test("Xpath", async({page}) => {

      //Login Page
      await page.goto(' https://login.salesforce.com/?locale=in');
      await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
      await page.locator('//input[@id="username"]').click()
      //expect (page.locator('#password')).toBeVisible() // to verify the field is visible or not
      await page.locator('#password').fill('TestLeaf@2025')
      await page.locator('#Login').click()

})