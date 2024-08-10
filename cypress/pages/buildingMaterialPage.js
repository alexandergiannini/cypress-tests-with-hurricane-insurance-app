class BuildMaterialPage {
  get strawOption() {
    return cy.valueAttr('straw');
  }

  get sticksOption() {
    return cy.valueAttr('sticks');
  }

  get bricksOption() {
    return cy.valueAttr('bricks');
  }

  get nextBtn() {
    return cy.nextBtn('submit');
  }

  get selectedBuildMaterialIcon() {
    return cy.get('.MuiIconButton-colorSecondary');
  }

  clickNextButton() {
    this.nextBtn.click();
  }

  submitStrawOption() {
    this.strawOption.click();
    this.nextBtn.click();
  }

  submitSticksOption() {
    this.sticksOption.click();
    this.nextBtn.click();
  }

  submitBricksOption() {
    this.bricksOption.click();
    this.nextBtn.click();
  }
}

export default BuildMaterialPage