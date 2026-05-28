import {test} from '@playwright/test'
test('Dynamic Xpath',async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.flipkart.com/')
    await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill('iphone 17')
    await page.keyboard.press('Enter')

    const [newPage] = await Promise.all([context.waitForEvent('page'),
    page.click('//div[text()="Relevance"]//ancestor::div[@class="QSCKDh eRsYMo col-12-12"]//following-sibling::div[@class="lvJbLV col-12-12"]//descendant::div[text()="Apple iPhone 17 (Black, 256 GB)"]')
    ])

    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)
})