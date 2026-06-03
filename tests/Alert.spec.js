// ------------------------------------------------->Alert 3 Types

// --->Simple Alert
// --->Conformation Alert
// --->Promt Alert

// -----------------> Simple Alert

import{test} from '@playwright/test'
test("Alert Handling",async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    await page.once('dialog',async(dialog)=>{
        await dialog.accept()
        await console.log("Print Alert Message :",dialog.message())
    })
    await page.locator('//button[@class="btn btn-danger"]').click()

    // ---------------------------------------> Conformation Alert

    await page.locator('(//a[@class="analystic"])[2]').click()
    await page.once('dialoge',async(dialog)=>{
        await dialog.dismiss()
        await console.log("Conformation Alert:",dialog.message())
    })
    await page.locator('//button[@class="btn btn-primary"]').click()

    
    // ------------------------------------------> Promt Alert

    await page.locator('(//a[@class="analystic"])[3]').click()
    await page.once('dialog',async(dialog)=>{
        await dialog.accept("Hi Manikandan")
        await console.log("Promt Alert :",dialog.message)
    })
    await page.locator('//button[@class="btn btn-info"]').click()
    

})