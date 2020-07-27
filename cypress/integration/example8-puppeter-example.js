import * as loginData from '../fixtures/login';
import FacebookLoginPage from "../page-objects/facebookLoginPage";
import FacebookProfilePage from "../page-objects/facebookProfilePage";
import GooglePage from "../page-objects/googlePage";

context('Work with Puppeter', () => {
    it('Login Facebook', () => {
        FacebookLoginPage.loginFacebookWithPuppeteer({email: loginData.email, password: loginData.password,
            url: FacebookProfilePage.url});
    })

    it('Work with several tabs', () => {
        GooglePage.openNewTabInGoogle();
    })


});
