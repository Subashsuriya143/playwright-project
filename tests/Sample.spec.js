import {test} from '@playwright/test'
test('validate instagram application', async({page}) =>{
    await page.goto('https://www.instagram.com/')
    await page.locator('//input[@name="email"]').fill('subashalakya')
    await page.locator('//input[@name="pass"]').fill('Subash123')
    await page.locator('//span[text()="Log in"]').click()
})

// xpath
// id ----------> // input[@id="_R_1h5l6n6pcldcpbn6b5ipamH1_"]
// name --------> // input [@name="email"]
// class -------> // div[@class="x3nfvp2 x1n2onr6 xh8yej3"]
// attribute & value --------> // input [@type="text"]
// text ----------> // span[text()="Log in"]