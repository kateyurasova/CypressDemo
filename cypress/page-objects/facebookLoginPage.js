class facebookLoginPage {

  get passwordInput() {
    return cy.get('#pass');
  }

  get emailInput() {
    return cy.get("#email");
  }

  get loginButton() {
    return  cy.get('input[data-testid="royal_login_button"]');
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
  }

  loginWithPuppeter(data) {
    cy.task('some_method', {
      email: data.email,
      password: data.password,
      url: data.url
    }).then(result => {
      expect(result).to.eq(true);
    })
  }

}

export default new facebookLoginPage()
