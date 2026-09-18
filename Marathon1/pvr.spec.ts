// Verify dynamic movie ticket booking flow in PVR Cinemas website

import { test, expect } from '@playwright/test';

   test("PVR", async({page}) => {

    //select location
    await page.goto('https://www.pvrcinemas.com/',{waitUntil: 'domcontentloaded'})
    await expect(page.getByText('Select City')).toBeVisible()    
    await page.getByRole('heading',{name : "Chennai"}).click()
    const quickbook = page.locator('div[class="d-flex quick-booking-from"]')
    await quickbook.locator('//span[text()="Cinema"]').click()

    // Quick Book
    await quickbook.locator('//span[text()="Select Cinema"]').click()
    const ticket = ['INOX The Marina Mall','19 Sep','VIBE','7:40 PM']
    let dropdownlist
    await expect(page.locator('div[class="p-dropdown-items-wrapper"]')).toBeVisible()
   
    /* Selecting the movie, time,cinema and Date : Since the DOM structure for quickbook option is a dynamic list 
       implemented in a for loop */

    for(let i=0;i<ticket.length;i++){    
    const dropdownlist = page.locator('div.p-dropdown-items-wrapper:visible').locator('ul li');
    expect(await dropdownlist.count()).toBeGreaterThan(0)
    //console.log(i,ticket[i],await dropdownlist.allInnerTexts(),await dropdownlist.count());
    await expect(dropdownlist.filter({hasText : ticket[i]})).toBeVisible();
    const option = dropdownlist.filter({ hasText: ticket[i] });
    console.log("Wanted:", ticket[i]);
    console.log("Matches:", await option.count());
    console.log("Matched text:", await option.allInnerTexts());
    await expect(option).toBeVisible();
    await option.click();
    //await dropdownlist.filter({hasText : ticket[i]}).click()
    //getByText(/ticket[0]/).click()
    }   
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Accept' }).click();

    //Booking Summary
    let seatNum = 'CL.CLUB|B:16'
    //await page.locator('div[id="pr_id_1223"]').getByRole('button', { name: 'Accept' }).click();
     await expect(page.getByRole('button', { name: 'Accept' })).toBeVisible({timeout: 10000})
     await page.getByRole('button', { name: 'Accept' }).click();
    if( await page.locator('span[id="'+seatNum+'"]').isEnabled())
         await page.locator('span[id="'+seatNum+'"]').click()
    
    //Assertion
    let seat = await page.locator('//div[@class="seat-number"]/p').innerText()
    let totalPrice = await page.locator('//div[@class="grand-prices"]').innerText()
    seatNum = seatNum.slice(8)
    seatNum = seatNum.replace(":","")
    console.log(seat,seatNum,totalPrice);
    
    if (Number(totalPrice) !==0 && seat === seatNum)
    { 
         console.log("The ticket is booked");
    }
    let title = await page.title()
    expect(title).toContain('PVR Cinemas')
    console.log(title)
    

    
    


    
  
    


    

    
})