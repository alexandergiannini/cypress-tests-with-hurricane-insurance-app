import LandingPage from "../pages/landingPage";
import BuildMaterialPage from "../pages/buildingMaterialPage";

const landingPage = new LandingPage();
const buildMaterialPage = new BuildMaterialPage();

describe('Hurricane Insurance Landing Page tests', () => {
  beforeEach(() => {
    cy.visit('');
    landingPage.submitZipCodeForm('90403');
  });
  
  it('should be able to select the Straw option', () => {
    buildMaterialPage.strawOption.click();
    buildMaterialPage.selectedBuildMaterialIcon.eq(0).should('have.css', 'color', 'rgb(245, 0, 87)');
  });

  it('should be able to submit the Straw option', () => {
    buildMaterialPage.strawOption.click();
    buildMaterialPage.clickNextButton();
    cy.url().should('include', '/water-proximity');
  });

  it('should be able to select the Sticks option', () => {
    buildMaterialPage.sticksOption.click();
    buildMaterialPage.selectedBuildMaterialIcon.eq(1).should('have.css', 'color', 'rgb(245, 0, 87)');
  });

  it('should be able to submit the Sticks option', () => {
    buildMaterialPage.sticksOption.click();
    buildMaterialPage.clickNextButton();
    cy.url().should('include', '/water-proximity');
  });

  it('should be able to select the Bricks option', () => {
    buildMaterialPage.bricksOption.click();
    buildMaterialPage.selectedBuildMaterialIcon.eq(2).should('have.css', 'color', 'rgb(245, 0, 87)');
  });

  it('should be able to submit the Bricks option', () => {
    buildMaterialPage.bricksOption.click();
    buildMaterialPage.clickNextButton();
    cy.url().should('include', '/water-proximity');
  });

  it('should be able to switch build material option', () => {
    buildMaterialPage.bricksOption.click();
    buildMaterialPage.strawOption.click();
    buildMaterialPage.selectedBuildMaterialIcon.eq(0).should('have.css', 'color', 'rgb(245, 0, 87)');
    buildMaterialPage.selectedBuildMaterialIcon.eq(2).should('have.css', 'color', 'rgba(0, 0, 0, 0.54)');
  });
});