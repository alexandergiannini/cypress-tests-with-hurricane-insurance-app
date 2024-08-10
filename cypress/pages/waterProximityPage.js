class WaterProximityPage {
  get yesOption() {
    return cy.valueAttr('true');
  }

  get noOption() {
    return cy.valueAttr('false');
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
    this.nextBtn.click();
  }

  submitNoOption() {
    this.noOption.click();
    this.nextBtn.click();
  }
}

export default WaterProximityPage