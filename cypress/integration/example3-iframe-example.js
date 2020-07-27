import 'cypress-iframe';

context('Work with iFrames', () => {
    it('.type() - type into a DOM element', () => {
        /*
        Check properties in cypress.json file: "chromeWebSecurity"property must be set up into false
         */
        cy.visit('https://jsfiddle.net/1w9jpnxo/1/');

        cy.log('Example 1: pass in $iframe object in hand');
        let iFrameSelector = 'iframe[name="result"]';
        cy.log(`First experiment`);
        cy.get(iFrameSelector).then(function ($iframe) {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('#input').type('First experiment');
        });

        cy.log('Example 2: Use implementation in commands.js');
        cy.switchToIframe(iFrameSelector).find('#input').clear().type('Second experiment');

        cy.log('Example 3: Use cypress-iframe package (https://www.npmjs.com/package/cypress-iframe)');
        cy.iframe(iFrameSelector).find('#input').clear().type('Third experiment');

    })


});
