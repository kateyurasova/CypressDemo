import GooglePage from "../page-objects/googlePage";

context('Work with Puppeter', () => {
    it('Work with several tabs', () => {
        GooglePage.openNewTabInGoogle();
    })
});
