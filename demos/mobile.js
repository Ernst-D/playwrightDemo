import { chromium, devices, firefox, webkit } from "playwright";

const browser =  await webkit.launch({
    headless:false
})

const context =  await browser.newContext({
    ...devices['iPad Pro 11 landscape']
})
const page = await context.newPage();
await page.goto("https://theverge.com")
await browser.close();