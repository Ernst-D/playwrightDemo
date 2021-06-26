import { chromium, devices, firefox, webkit } from "playwright";

const browser =  await webkit.launch({
    headless:true
})

const context =  await browser.newContext({
    ...devices["iPhone 11 Pro"],
    ignoreHTTPSErrors: true
})
const page = await context.newPage();
await page.goto("https://www.whatismybrowser.com/")
await page.screenshot({ path: "example.png" });
await browser.close();