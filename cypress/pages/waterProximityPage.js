class WaterProximityPage {
  get yesOption() {
    return cy.waterProximityOption('true');
  }

  get noOption() {
    return cy.waterProximityOption('false');
  }

  get nextBtn() {
    return cy.nextBtn('submit');
  }

  get selectedWaterProximityIcon() {
    return cy.get('.MuiIconButton-colorSecondary');
  }

  clickNextButton() {
    this.nextBtn.click();
  }

  submitYesOption() {
    this.yesOption.click();
    this.clickNextButton.click();
  }

  submitNoOption() {
    this.noOption.click();
    this.clickNextButton.click();
  }
}

export default WaterProximityPage