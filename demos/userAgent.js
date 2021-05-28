import { webkit } from "playwright";

const browser = await webkit.launch({
    headless:false,
    slowMo:50
})

const context = await browser.newContext()
const page =  await context.newPage();

await page.goto("https://www.whatismybrowser.com/detect/what-is-my-user-agent");
await page.screenshot({ path: "example.png" });
await browser.close();
