/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
//require('chromedriver');
const chromeCapabilities = new chrome.Options();
const until = require('selenium-webdriver/lib/until');
const {some_method} = require('../support/puppeter')
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
//cy.task(`seleniumBrowser`);
    on("task", {
        seleniumBrowser: async () => {
            driver = new Builder()
                .setChromeOptions(chromeCapabilities)
                .forBrowser('chrome')
                .build();
            await driver.get(`https://www.google.com/gmail/about/#`);
            await driver.executeScript("arguments[0].checked = true;", By.css('a[ga-event-action="sign in"]'));
            await driver.wait(until.elementLocated(By.css('a[ga-event-action="sign in"]')), 10000).click();
            await driver.wait(until.elementLocated(By.id('identifierId')), 10000)
                .catch(() => {
                    throw new Error('The correct id is identifierId');
                });
            return driver;
        }
    });

    on("task", {
        downloadFile
    });

    on("task", {
        some_method
    });

    on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push('--incognito')
            console.log(launchOptions)
        }
        return launchOptions
    })
}
