import * as loginData from "../fixtures/login";
import promisify from "cypress-promise";

class FacebookProfilePage {

  get url() {
    return 'https://www.facebook.com/kate.yurasova.56';
  }

  get updatePhotoButton() {
    return  cy.get('div.fbTimelineProfilePicSelector a');
  }

  open() {
    cy.visit(this.url);
  }

  isUserAtPage() {
    cy.url().should('eq', this.url);
  }

  getProfileInfo() {
    return promisify(cy
        .get('#profile_timeline_intro_card')
        .then(el => el.text())
    );
  }

}

export default new FacebookProfilePage()
