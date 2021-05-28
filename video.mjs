import { chromium, devices, firefox, webkit } from "playwright";

const browser =  await chromium.launch({
    headless:false
})

const context =  await browser.newContext({
    ...devices['iPad Pro 11 landscape'],
    recordVideo:{
        dir:"videos/",
        size:{
            width:800,
            height:600
        }
    }
})
const page = await context.newPage();
await page.goto("https://onliner.by");
await page.close();
await browser.close();