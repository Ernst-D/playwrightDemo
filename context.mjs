import { chromium, firefox, webkit } from "playwright";

const browser =  await chromium.launch({
    headless:false
})

for(let i = 0; i<10; ++i){
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com");
    await context.close();
    console.log(i);
}

await browser.close();