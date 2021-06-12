import { chromium, devices, firefox, webkit } from "playwright";

const browser =  await webkit.launch({
    headless:true
})

const context =  await browser.newContext({
    ...devices["iPhone 11 Pro"]
})
const page = await context.newPage();
await page.goto("https://www.google.by/search?q=what+is+my+user+agent&oq=what+is+my+user&sourceid=chrome&ie=UTF-8")
await page.screenshot({ path: "example.png" });
await browser.close();