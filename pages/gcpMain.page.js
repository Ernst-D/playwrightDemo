import BasePage from "./base.page.js";

class GcpMain extends BasePage {
    constructor(page, url){
        this.page = page;
        this.url = url;
    }

    async openSignInPage() {
        await this.page.goto(config.web.url);
      }
    
    async signInAs(user) {
        await this.page.fill("css=#form-username", user.username);
        await this.page.fill("css=#form-password", user.password);
        await this.page.click("css=button[type='submit']");
        return new DashboardPage(this.page);
    }

    get Url(){return this.url}
}
export default GcpMain;