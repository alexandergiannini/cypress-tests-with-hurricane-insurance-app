class BuildMaterialPage {
  get strawOption() {
    return cy.buildMaterialOption('straw');
  }

  get sticksOption() {
    return cy.buildMaterialOption('sticks');
  }

  get bricksOption() {
    return cy.buildMaterialOption('bricks');
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

  submitBuildMaterialOption() {
    this.sticksOption.click();
    this.nextBtn.click();
  }
}

export default BuildMaterialPage