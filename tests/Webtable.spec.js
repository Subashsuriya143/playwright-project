// ----------------------------------------> Webtable

//  To find Row data, Colum data & Single data

// --------------------------> Row data

import {expect, test} from '@playwright/test'
test ('Webtable',async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/')
    const rowdata = await page.locator('//table[@id="table02"]//tbody//tr[1]').allTextContents()
    console.log(rowdata)
    await expect(rowdata).toEqual([
  '\n' +
    '      Tiger Nixon\n' +
    '      System Architect\n' +
    '      Edinburgh\n' +
    '      61\n' +
    '      2011/04/25\n' +
    '      $320,800\n' +
    '    '
])

    // ------------------------> Colum data

    const columdata = await page.locator('//table[@id="table02"]//tbody//tr//td[3]').allTextContents()
    console.log(columdata)
    await expect(columdata).toContain('London')

    // -------------------------> Single data

    const singledata = await page.locator('//table[@id="table02"]//tbody//tr[4]//td[4]').textContent()
    console.log(singledata)
    await expect(singledata).toEqual('22')

})