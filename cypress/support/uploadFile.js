Cypress.Commands.add('uploadFile', (fileName, selector = 'input[id="choose_photo_upload"]') => {
  let fileType = (fileName.toLowerCase().includes('.jpg')) ? 'image/jpeg' :
   (fileName.toLowerCase().includes('.png')) ? 'image/png' :
   (fileName.toLowerCase().includes('.pdf')) ? 'application/pdf' : '';
  cy.fixture(fileName).then(fileContent => {
    cy.get(selector).first().upload({fileContent, fileName, mimeType: fileType});
  });
});
