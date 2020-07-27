import * as loginData from "../fixtures/login";
import * as user from "../fixtures/user";
import FacebookLoginPage from "../page-objects/facebookLoginPage";
import FacebookProfilePage from "../page-objects/facebookProfilePage";
import promisify from "cypress-promise";

context('Async/ await', () => {
     /*
        Example of usage of promisify for getting text
    */
    it('aync await', async () => {
        FacebookProfilePage.open();
        FacebookLoginPage.login(loginData.email, loginData.password);
        FacebookProfilePage.isUserAtPage();
        const profileInfo = await FacebookProfilePage.getProfileInfo();
        cy.log(profileInfo);
    })

    it('Work with requests - sync function with .then() section)', () => {
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', user.name);
            expect(response.body).to.have.property('job', user.job);
        })
    })

    it('Work with requests - async function with promisify library', async () => {
        const response = await promisify(cy.request('POST', 'https://reqres.in/api/users', user));
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('name', user.name);
        expect(response.body).to.have.property('job', user.job);
    })

});
