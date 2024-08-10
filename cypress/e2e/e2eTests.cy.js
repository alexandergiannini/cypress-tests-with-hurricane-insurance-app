import LandingPage from "../pages/landingPage";
import BuildMaterialPage from "../pages/buildingMaterialPage";
import WaterProximityPage from "../pages/waterProximityPage";
import QuotePage from "../pages/quotePage";

const landingPage = new LandingPage();
const buildMaterialPage = new BuildMaterialPage();
const waterProximityPage = new WaterProximityPage();
const quotePage = new QuotePage();

describe('Hurricane Insurance E2E tests', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should conduct the end to end flow of the application when submitting a California Zip code + Straw Building Material + Yes for Water Proximity', () => {
    landingPage.submitZipCodeForm('90405');
    buildMaterialPage.submitStrawOption();
    waterProximityPage.submitYesOption();
    quotePage.standardPlanCard.should('be.visible');
    quotePage.completePlanCard.should('be.visible');
  });

  it('should conduct the end to end flow of the application when submitting a New York Zip code + Sticks Building Material + No for Water Proximity', () => {
    landingPage.submitZipCodeForm('10012');
    buildMaterialPage.submitSticksOption();
    waterProximityPage.submitNoOption();
    quotePage.standardPlanCard.should('be.visible');
    quotePage.completePlanCard.should('be.visible');
  });

  it('should conduct the end to end flow of the application when submitting a Chicago Zip code + Bricks Building Material + Yes for Water Proximity + Select Flood Protection checkbox', () => {
    landingPage.submitZipCodeForm('60602');
    buildMaterialPage.submitBricksOption();
    waterProximityPage.submitYesOption();
    quotePage.floodProtectionCheckbox.click();
    quotePage.standardPlanCard.should('be.visible');
    quotePage.completePlanCard.should('be.visible');
    quotePage.floodProtectionCheckbox.should('have.css', 'color', 'rgb(63, 81, 181)');
  });

  it('should conduct the end to end flow of the application when submitting a Texas Zip code + Straw Building Material + No for Water Proximity', () => {
    landingPage.submitZipCodeForm('78701');
    buildMaterialPage.submitStrawOption();
    waterProximityPage.submitNoOption();
    quotePage.standardPlanCard.should('be.visible');
    quotePage.completePlanCard.should('be.visible');
  });

  it('should conduct the end to end flow of the application when submitting a Hawaii Zip code + Sticks Building Material + Yes for Water Proximity', () => {
    landingPage.submitZipCodeForm('96712');
    buildMaterialPage.submitSticksOption();
    waterProximityPage.submitYesOption();
    quotePage.standardPlanCard.should('be.visible');
    quotePage.completePlanCard.should('be.visible');
  });

  it('should conduct the end to end flow of the application when submitting an Alaska Zip code + Bricks Building Material + No for Water Proximity', () => {
    landingPage.submitZipCodeForm('99501');
    buildMaterialPage.submitBricksOption();
    waterProximityPage.submitNoOption();
    quotePage.standardPlanCard.should('be.visible');
    quotePage.completePlanCard.should('be.visible');
  });

  it('should conduct the end to end flow of the application when submitting a Florida Zip code + Straw Building Material + Yes for Water Proximity', () => {
    landingPage.submitZipCodeForm('33592');
    buildMaterialPage.submitStrawOption();
    waterProximityPage.submitYesOption();
    quotePage.standardPlanCard.should('be.visible');
    quotePage.completePlanCard.should('be.visible');
  });

  // Note: this test should fail as this is a bug
  it('should conduct the end to end flow of the application when submitting an Italy Zip code + Sticks Building Material + Yes for Water Proximity + Select Flood Protection checkbox', () => {
    landingPage.submitZipCodeForm('00199');
    buildMaterialPage.submitSticksOption();
    waterProximityPage.submitYesOption();
    quotePage.floodProtectionCheckbox.click();
    quotePage.standardPlanCard.should('be.visible');
    quotePage.completePlanCard.should('be.visible');
    quotePage.floodProtectionCheckbox.should('have.css', 'color', 'rgb(63, 81, 181)');
  });

// Note: this test should fail as this is a bug
  it('should conduct the end to end flow of the application when submitting a China Zip code + Bricks Building Material + No for Water Proximity', () => {
    landingPage.submitZipCodeForm('065299');
    buildMaterialPage.submitBricksOption();
    waterProximityPage.submitNoOption();
    quotePage.standardPlanCard.should('be.visible');
    quotePage.completePlanCard.should('be.visible');
  });
});