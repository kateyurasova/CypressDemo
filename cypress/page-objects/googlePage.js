class GooglePage {

  openNewTabInGoogle() {
    cy.task('work_with_several_tabs').then(result => {
      expect(result).to.eq(true);
    })
  }

}

export default new GooglePage()
