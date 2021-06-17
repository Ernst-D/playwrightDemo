class SearchResults {
    constructor(page = null) {
        /**
         * @typedef {Promise<Page>} Page in the browser context
         */
        this.page = page;
    }
    get cloudCalcLink() {return "text=Google Cloud Platform Pricing Calculator";}
    
    async clickOnCalcLink(){
        await this.page.click(this.cloudCalcLink);
    }
    async waitForCalcFrame (){
        await this.page.waitForSelector("devsite-iframe iframe");
        const body = await this.firstFrame.contentFrame();

        await body.waitForTimeout(10000);
        await body.waitForSelector(this.secondFrame);

        return body.$(this.secondFrame);
    }

}
export default SearchResults;