import { chromium, devices, firefox, webkit } from "playwright";

const browser =  await webkit.launch({
    headless:false
})

const context =  await browser.newContext({
    ...devices["iPhone 11 Pro"]
})
const page = await context.newPage();
await page.goto("https://www.whatismybrowser.com/detect/what-is-my-user-agent")
await page.screenshot({ path: "example.png" });
await browser.close();