/* Task:
Your task is to launch two separate browser instances using Playwright:
1. Load Red Bus in an Edge browser instance and verify the page title and URL.
2. Load Flipkart in a Webkit browser instance and verify the page title and URL.  */

import {test,webkit,chromium} from "@playwright/test"

test('learn to launch the browser',async () => {

//Load Flipkart in a Webkit browser instance and verify the page title and URL.
const browser1=await webkit.launch({headless:false}) 
const context1=await browser1.newContext()              
const page=await context1.newPage()  
await page.goto("https://www.flipkart.com/")
console.log("Page title :", await page.title());
console.log("Page URL:", await page.url());

//Load Red Bus in an Edge browser instance and verify the page title and URL.
const browser=await chromium.launch({channel : 'msedge',headless:false}) //browser
const context=await browser.newContext()              //context
const page1=await context.newPage()                    //page
await page1.goto("https://www.redbus.in") 
console.log("\nPage title :", await page1.title());
console.log("Page URL:", await page1.url());

})

