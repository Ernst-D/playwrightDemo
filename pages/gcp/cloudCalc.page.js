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
    get osList(){
        return {
            free:"free",
            windows:"win",
            redHatEnterprise:"rhel",
            redHatEnterpriseSap:"rhel-sap-ha",
            sles:"sles",
            slesSap12:"sles-sap-12",
            slesSap15:"sles-sap-15",
            sqlStandart:"sql-standart",
            sqlWeb:"sql-web",
            sqlEnterprise:"sql-enterprise"

        }
    }
    get machineClass() { return "#select_78"; }

    selectOS(osName){
        return `//div[@id='select_container_79']//*[@value='${osName}']`;
    }
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
        await calcBody.click(this.selectOS(this.osList.sles))
        await calcBody.waitForSelector(this.operatingSystem);       

    }
}
export default CloudCalculator;