import * as loginData from '../fixtures/login';
import FacebookProfilePage from "../page-objects/facebookProfilePage";

context('Fiatures', () => {

    it('Using of Xpath', () => {
        /*
        Example of usage of cypress-xpath package
        */
        cy.log('WHEN User logs in the Facebook profile');
        FacebookProfilePage.open();
        cy.xpath('//*[@id="email"]').type(loginData.email);
        cy.xpath('//*[@id="pass"]').type(loginData.password);
        cy.xpath('//input[@data-testid="royal_login_button"]').click();

    })


});
