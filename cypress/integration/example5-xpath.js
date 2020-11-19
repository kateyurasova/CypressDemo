import * as loginData from '../fixtures/login';
import VK_LoginPage from "../page-objects/VK_LoginPage";

context('Xpath', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('XHR_STATS_TRANSPORT_META_web', 'XHR_STATS_TRANSPORT_DATA_LOCK_web')
    })
    it('Using of Xpath', () => {
        /*
        Example of usage of cypress-xpath package
        */
        cy.log('WHEN User logs in the Facebook profile');
        VK_LoginPage.open();
        cy.xpath('//*[@id="index_email"]').type(loginData.email);
        cy.xpath('//*[@id="index_pass"]').type(loginData.password);
        cy.xpath('//*[@id="index_login_button"]').click();
        cy.wait(20000);

    })

});
