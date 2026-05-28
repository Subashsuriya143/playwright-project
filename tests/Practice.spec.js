import{test}from '@playwright/test'
test('validate practice application',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="name"]').fill('Subash P')
    await page.locator('//input[@id="email"]').fill('alksuba143@gmail.com')
    await page.locator('//input[@id="phone"]').fill('6383757136')
    await page.locator('//textarea[@id="textarea"]').fill('South Gandhi St,Kottivakkam,Chennai-41')
    await page.locator('//input[@id="male"]').click('Male')
    await page.locator('//input[@id="monday"]').check('Monday')
    await page.locator('//input[@id="wednesday"]').check('wednesday')
    await page.locator('//input[@id="friday"]').check('friday')
    const Country = await page.locator('//select[@id="country"]')
    await Country.selectOption({label:"India"})
    const con = await Country.locator('option:checked').textContent()
    console.log("Select Country :",con)
    const colour=await page.locator('//select[@id="colors"]')
    await colour.selectOption([{value:"white"},{value:"green"},{value:"yellow"}])
    const mol = await colour.locator('option:checked').allTextContents()
    console.log("Select Colous: ",mol)

    
    await page.waitForTimeout(3000)



    // await page.locator('//select[@id="animals"]').selectOption('Dog')
    // await page.locator('//input[@id="datepicker"]').fill('5/13/2026')
    // await page.locator('//input[@id="txtDate"]').scrollIntoViewIfNeeded('14/5/2026')
    // await page.locator('//input[@id="start-date"]').selectText('5/18/2026')
    // await page.locator('//input[@id="end-date"]').scrollIntoViewIfNeeded('20/5/2026')
    // await page.locator('//button[@class="submit-btn"]').click()
})