class GcpMain {
    constructor(page = null) {
        /**
         * @typedef {Promise<Page>} Page in the browser context
         */
        this.page = page;
    }

    navigate = async (url) => { await this.page.goto(url);  }
    search = async (stringToSearch) => {
        await this.page.click('[placeholder="Search"]');
        await this.page.fill('[placeholder="Search"]', stringToSearch);
        await this.page.press('[placeholder="Search"]', 'Enter');
    }

}
export default GcpMain;