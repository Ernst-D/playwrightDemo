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
        gcpCalc = new CloudCalculator(page);
        gcpSearchResults = new SearchResults(page);
        await gcpMain.navigateToTheUrl(gcpMain.page,"https://cloud.google.com");
        // let locs = (await page.$$("#select_container_79  md-option")).pop()
    });

    afterAll(async () =>{
        if (!page.isClosed()) {
            browser.close();
        }
    });

    test("GCP Cloud Calc", async () => {
        await gcpMain.search("calculator");
        
        await gcpSearchResults.page.click(gcpSearchResults.cloudCalcLink);

        const calcBody = await gcpCalc.waitForCalcFrame();
        await gcpCalc.setUpInstance(calcBody);

    });
});