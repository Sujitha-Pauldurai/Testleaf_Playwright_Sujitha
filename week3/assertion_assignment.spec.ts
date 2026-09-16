/* Assertion and Xpath Practice : 
Hard Assertion (expect):
  Stops test execution immediately on the first failure used when later steps depend entirely on the 
    current check passing. 
Soft Assertion (expect.soft):
    Records the failure but allows the test to continue running.Collects all soft failures and reports them together
      at the end of the test.Used when you want to check multiple independent things on a page or in data without stopping early 
*/

import { expect, test } from "@playwright/test";

test("Assertion Test", async({page}) => {
    await page.goto("https://leafground.com/dashboard.xhtml")
    const menuForm = page.locator('//form[@id="menuform"]')
    await menuForm.locator('//span[text()= "Element"]//parent::a').click()
    //Hard Assertion
    await expect(menuForm.locator('//ul[@role="menu"]//span[text()="Text Box"]')).toBeVisible()
    await menuForm.locator('//ul[@role="menu"]//span[text()="Text Box"]').click()
    await expect(page.locator('//div[@class="grid formgrid"]//following::input[@placeholder="Disabled"]')).toBeDisabled()
    await expect(page.locator('[name="j_idt88:name"]')).toBeEditable()
    await page.locator('[name="j_idt88:name"]').pressSequentially("Testing")
    //Soft Assertion
    await expect.soft(page.locator('//h5[text() = "Append Country to this City."]//following-sibling::div[1]/div/input')).toBeDisabled()
    await page.locator('//h5[text() = "Clear the typed text."]//following-sibling::div[1]/div/input').fill("Playwright Learning")
})