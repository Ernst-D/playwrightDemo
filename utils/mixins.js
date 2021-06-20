export const basePageActions = {
    hello(){
        console.log("helloThere");
    },

    navigateToTheUrl(page, url){
        page.goto(url);
    }
}