/* https://login.salesforce.com/?locale=in
Sample credentials :
Username:mailto:dilipkumar.rajendran@testleaf.com
Password: TestLeaf@2025 */

import {expect, test} from "@playwright/test"
test.use({
  geolocation: { latitude: 13.0827, longitude: 80.2707 }, // Example: Chennai coordinates
  permissions: ['geolocation']
});

test("Create lead",async({ page }) => {

  //Login Page
  await page.goto(' https://login.salesforce.com/?locale=in');
  await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
  await page.locator('#Login').click()
  expect (page.locator('#password')).toBeVisible() // to verify the field is visible or not
  await page.locator('#password').fill('TestLeaf@2025')
  await page.locator('#Login').click()

  await page.locator('button[title="App Launcher"]').click()
  expect(page.getByText("App Launcher")).toBeVisible()
  await page.locator('[aria-label="View All Applications"]').click()
  const appLaunchForm =  page.locator('div[class="al-modal-container slds-grid slds-grid_vertical slds-scrollable_none"]')
  console.log(await appLaunchForm.allInnerTexts());
  
  // Opening the New Lead Page
  await expect(appLaunchForm).toBeVisible({timeout : 5000})
  await expect(appLaunchForm.locator('[href="/lightning/app/06mdN00000537gmQAA"]')).toBeVisible({timeout : 30000})
  await appLaunchForm.locator('a[href="/lightning/app/06mdN00000537gmQAA"]').click()
  await page.locator('a[href="/lightning/o/Lead/home"][title="Leads"]').click()
  await expect(page.locator('img[src="https://testleaf.my.salesforce.com/img/icon/t4v35/standard/lead_120.png"][title="Leads"]')).toBeVisible({timeout : 10000})
  //await expect(page.getByRole('img', { name: 'Leads' })).toBeVisible({ timeout: 10000 });
  await page.locator('a[title="New"]').click()

  // New lead creation
  await expect(page.locator('[class="slds-modal__title slds-hyphenate slds-text-heading--medium"]')).toBeVisible({timeout : 10000})
  const salutation = page.getByRole("combobox", { name: "Salutation" });
  await salutation.click();
  await page.getByRole("option", { name: "Mr." }).click();
  await page.getByText("Last Name").fill("Suji")
  await page.locator('input[name="Company"]').fill("Testleaf")
  await page.locator('//div[@class="isModal inlinePanel oneRecordActionWrapper"]//lightning-button/button[text()="Save"]').click()
  await expect(page.locator('//lightning-formatted-name[@slot = "primaryField" and contains(text(),"Suji")]'))


})