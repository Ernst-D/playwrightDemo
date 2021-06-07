import { chromium, firefox, webkit } from "playwright";

// const browsers = [chromium, firefox, webkit];

const browser =  await chromium.launch({
    // headless:false
})

const context = await browser.newContext();

const page = await context.newPage();

page.goto("https://cloud.google.com/");


// Click [placeholder="Search"]
await page.click('[placeholder="Search"]');

// Fill [placeholder="Search"]
await page.fill('[placeholder="Search"]', 'calculator');

// Press Enter
await page.press('[placeholder="Search"]', 'Enter');
// assert.equal(page.url(), 'https://cloud.google.com/s/results?q=calculator');

// Click text=Google Cloud Platform Pricing Calculator
await page.click('text=Google Cloud Platform Pricing Calculator');
// assert.equal(page.url(), 'https://cloud.google.com/products/calculator');

await page.waitForSelector("devsite-iframe iframe");

const handle = await page.$('devsite-iframe iframe');
const body = await handle.contentFrame();

await body.waitForTimeout(10000);
await body.waitForSelector("iframe#myFrame");

const handleCalc = await body.$("iframe#myFrame");
const calcBody = await handleCalc.contentFrame();

await calcBody.waitForSelector("//*[@id='select_79']");
await calcBody.click("//*[@id='select_79']");
