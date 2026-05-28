//  DropDown 2 Types

// Single DropDown -------> Single Value

// Multiple DropDown ------> Multiple Value

import {test} from '@playwright/test'
test("validate webpage application",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="name"]').fill('Suba')
    await page.locator('//input[@id="email"]').fill('alksubash143@gmail.com')
    await page.locator('//input[@id="phone"]').fill('6383757136')
    await page.locator('//textarea[@id="textarea"]').fill("South gandhi st,kottivakkam,chennai-41")
    await page.locator('//input[@id="male"]').click()
    await page.locator('//input[@id="monday"]').check()
    await page.locator('//input[@id="wednesday"]').check()
    await page.locator('//input[@id="friday"]').check()
    // Single DropDown -------> Single Value 
    const Country = await page.locator('//select[@id="country"]')
    await Country.selectOption({value:"india"})
    const Coun = await Country.locator('option:checked').textContent()
    console.log("Select Country :",Coun)
    //  Multiple DropDown ------> Multiple Value 
    const Color=await page.locator('//select[@id="colors"]')
    await Color.selectOption([{value:"red"},{value:"yellow"},{value:"green"}])
    const Colo=await Color.locator('option:checked').allTextContents()
    console.log("Select Colors: ",Colo)
    
})