class VK_LoginPage {

  get url() {
    return 'www.vk.com/';
  }

  open() {
    cy.visit(this.url);
  }

  get passwordInput() {
    return cy.get("#index_pass");
  }

  get emailInput() {
    return cy.get('#index_email');
  }

  get loginButton() {
    return  cy.get('#index_login_button');
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
    cy.get('div#side_bar_inner', { timeout: 1200000 }).should('be.visible', { timeout: 1200000 });
  }

}

export default new VK_LoginPage()
