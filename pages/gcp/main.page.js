import { basePageActions } from "../../utils/mixins";

class GcpMain {
    constructor(page = null) {
        /**
         * @typedef {Promise<Page>} Page in the browser context
         */
        this.page = page;
        Object.assign(GcpMain.prototype,basePageActions)
    }

    get searchInput() {return "[placeholder='Search']"}

    async navigate(url){ 
        await this.page.goto(url);  
    }
    async search (stringToSearch){
        await this.page.click(this.searchInput);
        await this.page.fill(this.searchInput, stringToSearch);
        await this.page.press(this.searchInput, "Enter");
    }

}
export default GcpMain;