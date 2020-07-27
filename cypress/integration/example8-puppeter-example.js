import * as loginData from '../fixtures/login';
import FacebookLoginPage from "../page-objects/facebookLoginPage";
import FacebookProfilePage from "../page-objects/facebookProfilePage";

context('Work with Puppeter', () => {
    xit('Login Facebook', () => {
        FacebookLoginPage.loginFacebookWithPuppeter({email: loginData.email, password: loginData.password,
            url: FacebookProfilePage.url});
    })

    it('Work with several tabs', () => {
        FacebookLoginPage.openNewTabInGoogle();
    })


});
