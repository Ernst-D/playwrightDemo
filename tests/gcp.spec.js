import { chromium } from "playwright";
import CloudCalculator from "../pages/gcp/cloudCalc.page";
import { default as GcpMain } from "../pages/gcp/main.page";
import SearchResults from "../pages/gcp/searchResults.page";

let browser;
let page;

let gcpMain;
let gcpSearchResults;
let gcpCalc;

describe("Test Suite",()=>{

    beforeAll(async ()=>{
        browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        page = await context.newPage();
        gcpMain = new GcpMain(page);
        await gcpMain.navigate("https://cloud.google.com")
    })

    afterAll(async () =>{
        if (!page.isClosed()) {
            browser.close();
        }
    })

    test("GCP Cloud Calc", async () => {
        await gcpMain.search("calculator")
       
        gcpSearchResults = new SearchResults(page);
        await gcpSearchResults.page.click(gcpSearchResults.cloudCalcLink)

        gcpCalc = new CloudCalculator(page);
        const calcBody = await gcpCalc.waitForCalcFrame();
        await calcBody.waitForSelector("//*[@id='select_79']");
        await calcBody.click("//*[@id='select_79']");

    })
})