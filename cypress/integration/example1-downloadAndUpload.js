import * as loginData from '../fixtures/login';
import VK_ProfilePage from "../page-objects/VK_ProfilePage";
import VK_LoginPage from "../page-objects/VK_LoginPage";

context('Uploads and downloads', () => {
    const FOLDER_NAME = Cypress.env('downloadFolder');
    const FULL_PATH = `cypress/fixtures/${FOLDER_NAME}`;
    const FILE_NAME = 'Snake_River_(5mb).jpg';
    const PICTURE_URL =
        'https://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_%285mb%29.jpg';

    before(() => {
        cy.log('DATA PREPARATION: Load the picture 5 MB size');
        cy.downloadFile(PICTURE_URL, FULL_PATH, FILE_NAME);
    });

    it('Demonstrate how upload and download works in cypress', () => {
        /*
        Example of usage of cypress-file-upload package
        https://www.npmjs.com/package/cypress-file-upload
        and cypress-downloadfile package
        https://www.npmjs.com/package/cypress-downloadfile
         */

        cy.log('WHEN User logs in the Facebook profile');
        VK_LoginPage.open();
        VK_LoginPage.login(loginData.email, loginData.password);
        cy.log('AND clicks Update button at the profile');
        VK_ProfilePage.updatePhotoButton.click({force: true});
        cy.log('AND uploads a new profile photo');
        cy.uploadFile(`${FOLDER_NAME}/${FILE_NAME}`);
        cy.wait(10000);

    })


});
