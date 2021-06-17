class CloudCalculator {
    constructor(page = null) {
        /**
         * @typedef {Promise<Page>} Page in the browser context
         */
        this.page = page;
    }
    get firstFrame() {return "devsite-iframe iframe";}
    get secondFrame() {return "iframe#myFrame";}
    get osList() { return "#select_78"; }
    get selectOS() {return "#select_option_68";}
    get machineClass() { return "#select_78"; }


    async waitForCalcFrame(){
        await this.page.waitForSelector("devsite-iframe iframe");
        const handle = await this.page.$(this.selectOs_list);
        const body = await handle.contentFrame();

        await body.waitForTimeout(10000);
        await body.waitForSelector(this.secondFrame);

        const handleCalc = await body.$("iframe#myFrame");
        return handleCalc.contentFrame();
    }

    async setUpInstance(calcBody){
        await calcBody.waitForSelector(this.osList);
        await calcBody.click(this.osList);
        await calcBody.click((await this.page.$$("#select_container_79  md-option").pop()));
        

    }
}
export default CloudCalculator;