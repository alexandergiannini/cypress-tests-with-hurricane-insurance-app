import LandingPage from "../pages/landingPage";
import BuildMaterialPage from "../pages/buildingMaterialPage";
import WaterProximityPage from "../pages/waterProximityPage";

const landingPage = new LandingPage();
const buildMaterialPage = new BuildMaterialPage();
const waterProximityPage = new WaterProximityPage();

describe('Hurricane Insurance Water Proximity Page tests', () => {
  beforeEach(() => {
    cy.visit('');
    landingPage.submitZipCodeForm('90403');
    buildMaterialPage.submitSticksOption();
  });
  
  it('should be able to select the Yes option', () => {
    waterProximityPage.yesOption.click();
    waterProximityPage.selectedWaterProximityIcon.eq(0).should('have.css', 'color', 'rgb(245, 0, 87)');
  });

  it('should be able to submit the Yes option', () => {
    waterProximityPage.yesOption.click();
    waterProximityPage.clickNextButton();
    cy.url().should('include', '/quote');
  });

  it('should be able to select the No option', () => {
    waterProximityPage.noOption.click();
    waterProximityPage.selectedWaterProximityIcon.eq(1).should('have.css', 'color', 'rgb(245, 0, 87)');
  });

  it('should be able to submit the No option', () => {
    waterProximityPage.noOption.click();
    waterProximityPage.clickNextButton();
    cy.url().should('include', '/quote');
  });

  it('should be able to switch the water proximity option', () => {
    waterProximityPage.noOption.click();
    waterProximityPage.yesOption.click();
    buildMaterialPage.selectedBuildMaterialIcon.eq(0).should('have.css', 'color', 'rgb(245, 0, 87)');
    buildMaterialPage.selectedBuildMaterialIcon.eq(1).should('have.css', 'color', 'rgba(0, 0, 0, 0.54)');
  });

  it('should attempt to select Next without selecting a water proximity option', () => {
    waterProximityPage.clickNextButton();
    cy.url().should('include', '/water-proximity');
  });
});