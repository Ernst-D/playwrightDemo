class CloudCalculator {
    constructor(page = null) {
        /**
         * @typedef {Promise<Page>} Page in the browser context
         */
        this.page = page;
    }
    get firstFrame() {return 'devsite-iframe iframe'}
    get secondFrame() {return "iframe#myFrame"}

    waitForCalcFrame = async () => {
        await this.page.waitForSelector("devsite-iframe iframe");
        const handle = await this.page.$(this.firstFrame);
        const body = await handle.contentFrame();

        await body.waitForTimeout(10000);
        await body.waitForSelector(this.secondFrame);

        const handleCalc = await body.$("iframe#myFrame");
        return handleCalc.contentFrame();
    }
}
export default CloudCalculator;