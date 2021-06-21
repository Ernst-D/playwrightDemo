class CloudCalculator {
    constructor(page = null) {
        /**
         * @typedef {Promise<Page>} Page in the browser context
         */
        this.page = page;
    }
    get firstFrame() {return "devsite-iframe iframe";}
    get secondFrame() {return "iframe#myFrame";}
    get operatingSystem() {return "[ng-model='listingCtrl.computeServer.os']";}
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
    get machineClass() { return "[ng-model='listingCtrl.computeServer.class']"; }
    get machineClassList(){
        return {
            regular:"Regular",
            preemptible:"Preemptible",
        }
    }

    selectOS(osName){
        return `//*[@value='${osName}']`;
    }
    selectmachineClass(machineClassName){
        if(machineClassName == "Preemptible"){
            return "#select_option_81"
        }
        return `text=${machineClassName}`;
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
        await calcBody.click(this.operatingSystem);
        await calcBody.click(this.selectOS(this.osList.sles))
        await calcBody.click(this.machineClass);
        await calcBody.click(this.selectmachineClass(this.machineClassList.regular))
        console.log("test");

    }
}
export default CloudCalculator;