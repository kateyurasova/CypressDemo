// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('switchToIframe', (iframeSelector) => {
    /*cy.get("div[class='cdk-overlay-container']").then(($layer) => {
        if ($layer.find(iframeSelector).exist) {
            return cy.wrap($iframe.contents().find('body'));
        } else {
            return null;
        }
    })*/

    cy.get(iframeSelector).then(function ($iframe) {
        const $body = $iframe.contents().find('body');
        return cy.wrap($body);
    })
});

