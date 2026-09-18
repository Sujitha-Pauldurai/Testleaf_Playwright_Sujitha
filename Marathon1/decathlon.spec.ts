// Search product, apply filters, add to cart in Decathlo

import { expect, Expect,test } from "@playwright/test";

test("Decathlon", async({page}) => {
    await page.goto(" https://www.decathlon.in/")
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('networkidle');
    await page.getByRole('searchbox').click()
    await expect(page.getByRole('searchbox', { name: 'Search for ' })).toBeEnabled()
    await page.getByRole('searchbox', { name: 'Search for 60+ sports and 6,000+ products' }).fill("shoes");
    await page.getByRole('searchbox', { name: 'Search for 60+ sports and 6,000+ products' }).press('Enter');
    let title = await page.title()
    expect(title).toContain('Search | shoes')
    console.log(title)
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('networkidle');

    //Select Gender
    await page.getByRole('button',{name : 'Gender'}).click()
    const genderDiv = page.locator('[id="gender_id_en"]')
    await expect.soft(genderDiv.getByText("Men", {exact : true})).toBeVisible()
    await genderDiv.getByText("Men", {exact : true}).check()

    //Select Size
    await page.getByRole('button',{name : 'Size'}).click()
    await expect(page.locator('//div[@id="indian_size"]//span[text()="10.5"]')).toBeVisible()
    await page.locator('//div[@id="indian_size"]//span[text()="10.5"]').click()

    //Sorting
    await page.locator('//span[text()="Most relevant"]').click()
    await expect(page.locator('//span[text()="Price (low → high) "]')).toBeVisible()
    await page.locator('//span[text()="Price (low → high) "]').click()

    //Product Selection
    const productContainer = page.locator('div[data-test-id="search-products-grid"]')
    const firstProduct = productContainer.locator('div').first()
    const addToCart = firstProduct.getByRole("button", {name :"Add to cart"})
    const productTitle = firstProduct.locator('//div[@data-test-id="product-card:product-card:title"]')
    console.log(await productTitle.innerText());
    await addToCart.click()

    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('networkidle');

    //Total Price
    const popup= page.locator('div[data-test-id="modal-container"]')
    const totalPrice = page.locator('//div[@data-test-id="modal-container"]//div[@class="mt-2.5 flex items-center gap-2"]//span').nth(0)
    console.log("Total Price : ", await totalPrice.innerText());
    
})
