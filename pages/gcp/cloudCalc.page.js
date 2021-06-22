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

        };
    }
    get machineClass() { return "[ng-model='listingCtrl.computeServer.class']"; }
    get machineClassList(){
        return {
            regular:"Regular",
            preemptible:"Preemptible",
        };
    }
    get machineFamily() {return "[ng-model='listingCtrl.computeServer.family']";}
    get machineFamilyList() {
        return {
            GeneralPurpose:"gp",
            ComputeOptimized:"compute",
            MemoryOptimized:"memory",
            AcceleratorOptimized:"accelerator"
        };
    }
    get series(){return "[ng-model='listingCtrl.computeServer.series']";}
    get seriesList() {
        return {
            N1:"n1",
            N2:"n2",
            E2:"e2",
            N2D:"n2d"
        };
    }
    get machineType() {return "[ng-model='listingCtrl.computeServer.instance']";}
    get machineTypeList() {
        return {
            Custom:"custom",
            SharedCore:"Shared Core",
            Standart:"standart",
            HighMem:"highmem",
            HighCpu:"highcpu"
        };
    }
    get dataCenterLocation(){return "[ng-model='listingCtrl.computeServer.location']";}
    get dataCenterLocationList(){
        return {
            Iowa:"us-central1",
            Oregon:"us-west1",
            SouthCarolina:"us-east1",
            Belguim:"europe-west1",
            London:"europe-west2",
            Frankfurt:"europe-west3"
        };
    }
    get averageHours() {return "[ng-model='listingCtrl.computeServer.hours']";}
    

    selectOS(osName){
        return `//*[@value='${osName}']`;
    }
    selectmachineClass(machineClassName){
        if(machineClassName == "Preemptible"){
            return "#select_option_81";
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
        await calcBody.click(this.selectOS(this.osList.sles));
        await calcBody.click(this.machineClass);
        await calcBody.click(this.selectmachineClass(this.machineClassList.regular));
        await calcBody.click();
        console.log("test");

    }
}
export default CloudCalculator;