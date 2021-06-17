const { chromium } = require("playwright");
const {default: GcpMain} = require("../pages/gcp/main.page");

let browser;
let page;

describe("Test Suite",()=>{

    beforeAll(async ()=>{
        browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        page = await context.newPage();
        let gcp = new GcpMain(page);
        await gcp.navigate("https://cloud.google.com")
    })

    afterAll(async () =>{
        if (!page.isClosed()) {
            browser.close();
        }
    })

    test("Test Case", async ()=>{
        await page.click('[placeholder="Search"]');
        await page.fill('[placeholder="Search"]', 'calculator');
        await page.press('[placeholder="Search"]', 'Enter');
        await page.click('text=Google Cloud Platform Pricing Calculator');
        await page.waitForSelector("devsite-iframe iframe");
        const handle = await page.$('devsite-iframe iframe');
        const body = await handle.contentFrame();

        await body.waitForTimeout(10000);
        await body.waitForSelector("iframe#myFrame");

        const handleCalc = await body.$("iframe#myFrame");
        const calcBody = await handleCalc.contentFrame();

        await calcBody.waitForSelector("//*[@id='select_79']");
        await calcBody.click("//*[@id='select_79']");

    })
})