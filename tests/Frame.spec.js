//  Frame Handiling

import {test} from '@playwright/test'
test ('Frame work handiling',async({page})=>{
    await page.goto('https://vinothqaacademy.com/iframe/')
    const frame = await page.frameLocator('//iframe[@name="popuppage"]')
    await page.once('dialog',async(dialog)=>{
        await console.log("Print Alert message :",dialog.message())
        await dialog.accept()
    })
    await frame.locator('//button[@name="alertbox"]').click()

    await page.once('dialog',async(dialog)=>{
        await console.log("Confrim Alert Box :",dialog.message())
        await dialog.dismiss()
    })
    await frame.locator('//button[@name="confirmalertbox"]').click()

    await page.once('dialog',async(dialog)=>{
        await console.log('Promt Alert Box',dialog.message())
        await dialog.accept()
    })
    await frame.locator('//button[@name="promptalertbox1234"]').click()
})