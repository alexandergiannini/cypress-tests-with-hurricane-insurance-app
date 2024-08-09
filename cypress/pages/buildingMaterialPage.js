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
    return cy.nextBtn('submit_cta');
  }

  get selectedBuildMaterialIcon() {
    return cy.get('.MuiIconButton-colorSecondary');
  }

  clickNextButton() {
    this.nextBtn.click();
  }
}

export default BuildMaterialPage