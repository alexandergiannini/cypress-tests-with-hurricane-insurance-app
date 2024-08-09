class LandingPage {
  get postalCodeField() {
    return cy.name('postalCode');
  }

  get zipCodeSubmitBtn() {
    return cy.zipCodeSubmitBtn('submit');
  }

  get requiredValidationMessage() {
    return cy.get('p.MuiFormHelperText-root');
  }

  typePostalCodeField(zipCode) {
    this.postalCodeField.type(zipCode);
  }

  clickGetAQuoteBtn() {
    this.zipCodeSubmitBtn.click();
  }

  submitZipCodeForm(zipCode) {
    this.postalCodeField.type(zipCode);
    this.zipCodeSubmitBtn.click();
  }
}

export default LandingPage