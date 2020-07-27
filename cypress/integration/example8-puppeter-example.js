import * as loginData from '../fixtures/login';
import FacebookLoginPage from "../page-objects/facebookLoginPage";
import FacebookProfilePage from "../page-objects/facebookProfilePage";

context('Actions', () => {
    it('.type() - type into a DOM element', () => {
        FacebookLoginPage.loginWithPuppeter({email: loginData.email, password: loginData.password,
            url: FacebookProfilePage.url});
    })

    it('Several tabs', () => {
        FacebookLoginPage.loginWithPuppeter({email: loginData.email, password: loginData.password,
            url: FacebookProfilePage.url});
    })


});
