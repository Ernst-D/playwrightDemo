class CloudCalculator {
    constructor(page = null) {
        /**
         * @typedef {Promise<Page>} Page in the browser context
         */
        this.page = page;
    }
    get firstFrame() {return "devsite-iframe iframe";}
    get secondFrame() {return "iframe#myFrame";}
    get operatingSystem() {return "#select_78";}
    get operatingSystemList() { return this.page.$$("#select_container_79  md-option");}
    get selectOS() {return "#select_option_68";}
    get machineClass() { return "#select_78"; }


    async waitForCalcFrame(){
        await this.page.waitForSelector("devsite-iframe iframe");
        const handle = await this.page.$(this.firstFrame);
        const body = await handle.contentFrame();

        await body.waitForTimeout(10000);
        await body.waitForSelector(this.secondFrame);

        const handleCalc = await body.$("iframe#myFrame");
        return handleCalc.contentFrame();
    }

    async setUpInstance(calcBody){
        await calcBody.waitForSelector(this.operatingSystem);
        await calcBody.click(this.operatingSystem);
        // frame.click: selector: expected string, got undefined
        // await calcBody.click((await this.operatingSystemList).pop());
        

    }
}
export default CloudCalculator;