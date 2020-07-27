import 'cypress-iframe';

context('Actions', () => {
    it('.type() - type into a DOM element', () => {
        /*
        Check properties in cypress.json file: "chromeWebSecurity"property must be set up into false
         */
        cy.visit('https://www.google.com/gmail/about/#');
        cy.get('a:contains("Sign in")').last().invoke('removeAttr', 'target')
            .click({force: true});
        cy.url().should('include', 'users.html');

    })


});
