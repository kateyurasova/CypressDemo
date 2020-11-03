import * as loginData from "../fixtures/login";
import promisify from "cypress-promise";

class VK_ProfilePage {

    get updatePhotoButton() {
        return cy.get('a.ms_item_photo');
    }

    getProfileInfo() {
        return promisify(cy
            .get('div#profile_short')
            .then(el => el.text())
        );
    }

}

export default new VK_ProfilePage()
