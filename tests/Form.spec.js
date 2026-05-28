// import {test} from '@playwright/test'
// test("validate webpage application",async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('//input[@id="name"]').fill('Suba')
//     await page.locator('//input[@id="email"]').fill('alksubash143@gmail.com')
//     await page.locator('//input[@id="phone"]').fill('6383757136')
//     await page.locator('//textarea[@id="textarea"]').fill("South gandhi st,kottivakkam,chennai-41")
//     await page.locator('//input[@id="male"]').click()
//     await page.locator('//input[@id="monday"]').check()
//     await page.locator('//input[@id="wednesday"]').check()
//     await page.locator('//input[@id="friday"]').check()
//     const Country = await page.locator('//select[@id="country"]')
//     await Country.selectOption({value:"india"})
//     const Coun = await Country.locator('option:checked').textContent()
//     console.log("Select Country :",Coun)
//     const Color=await page.locator('//select[@id="colors"]')
//     await Color.selectOption([{value:"red"},{value:"yellow"},{value:"green"}])
//     const Colo=await Color.locator('option:checked').allTextContents()
//     console.log("Select Colors: ",Colo)
    
// })


// ------------------------------------------------------------------------------------------------------------------


// ----------------->Simple Alert

// import{test} from '@playwright/test'
// test("Alert Handling",async({page})=>{
//     await page.goto('https://demo.automationtesting.in/Alerts.html')
//     await page.once('dialog',async(dialog)=>{
//         await dialog.accept()
//         await console.log("Print Alert Message :",dialog.message())
//     })
//     await page.locator('//button[@class="btn btn-danger"]').click()

//     // --------------------------------------->Conformation Alert

//     await page.locator('(//a[@class="analystic"])[2]').click()
//     await page.once('dialog',async(dialog)=>{
//         await dialog.dismiss()
//         await console.log("Conformation Alert:",dialog.message())
//     })
//     await page.locator('//button[@class="btn btn-primary"]').click()

    
//     // ------------------------------------------>Promt Alert

//     await page.locator('(//a[@class="analystic"])[3]').click()
//     await page.once('dialog',async(dialog)=>{
//         await dialog.accept("Hi Subash")
//         await console.log("Promt Alert :",dialog.message())
//     })
//     await page.locator('//button[@class="btn btn-info"]').click()
//     await page.waitForTimeout(3000)
    

// })


// ---------------------------------------------------------------------------------------------------

import {test} from '@playwright/test'
test ('Frame Handiling',async({page})=>{
    await page.goto('https://vinothqaacademy.com/iframe/')
    const frame = await page.frameLocator('//iframe[@name="popuppage"]')
    await frame.locator('//button[@name="alertbox"]').click()
    await frame.locator('//button[@name="confirmalertbox"]').click()
    await frame.locator('//button[@name="promptalertbox1234"]').click()
    await page.waitForTimeout(3000)

})