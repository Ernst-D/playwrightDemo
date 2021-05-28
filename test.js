import { chromium, firefox, webkit } from "playwright";

for (const browserType of [chromium, firefox, webkit]){
    console.log(`running ${browserType.name()}`);
    let browser = await browserType.launch();
    let page = await browser.newPage();
    await page.goto("https://webdriver.io");
    await page.screenshot({
        path:`screenshot-${browserType.name()}-new.png`
    });
    await browser.close();
}