class GcpMain {
    constructor(page = null) {
        /**
         * @typedef {Promise<Page>} Page in the browser context
         */
        this.page = page;
    }
    async navigate(url) {
        await this.page.goto(url);
    }
    async search() {
        await this.page.click('[placeholder="Search"]');
        await this.page.fill('[placeholder="Search"]', 'calculator');
        await this.page.press('[placeholder="Search"]', 'Enter');
    }

}
export default GcpMain;