import LandingPage from "../pages/landingPage";
import BuildMaterialPage from "../pages/buildingMaterialPage";
import WaterProximityPage from "../pages/waterProximityPage";
import QuotePage from "../pages/quotePage";

const landingPage = new LandingPage();
const buildMaterialPage = new BuildMaterialPage();
const waterProximityPage = new WaterProximityPage();
const quotePage = new QuotePage();

describe('Hurricane Insurance Quote Page tests', () => {
  beforeEach(() => {
    cy.visit('');
    landingPage.submitZipCodeForm('90403');
    buildMaterialPage.submitSticksOption();
  });
    
  it('should be able to see the Standard Plan given user submitted Yes for Water Proximity Page', () => {
    waterProximityPage.submitYesOption();
    quotePage.standardPlanCard.should('be.visible');
    quotePage.standardPlanTextHeader.contains('Standard').should('be.visible');
    quotePage.standardPlanPriceText.contains('$').should('be.visible');
  });

  it('should be able to see the Standard Plan given user submitted No for Water Proximity Page', () => {
    waterProximityPage.submitNoOption();
    quotePage.standardPlanCard.should('be.visible');
    quotePage.standardPlanTextHeader.contains('Standard').should('be.visible');
    quotePage.standardPlanPriceText.contains('$').should('be.visible');
  });

  it('should be able to see the Complete Plan given user submitted Yes for Water Proximity Page', () => {
    waterProximityPage.submitYesOption();
    quotePage.completePlanCard.should('be.visible');
    quotePage.completePlanTextHeader.contains('Complete').should('be.visible');
    quotePage.completePlanPriceText.contains('$').should('be.visible');
  });

  it('should be able to see the Complete Plan given user submitted No for Water Proximity Page', () => {
    waterProximityPage.submitNoOption();
    quotePage.completePlanCard.should('be.visible');
    quotePage.completePlanTextHeader.contains('Complete').should('be.visible');
    quotePage.completePlanPriceText.contains('$').should('be.visible');
  });

  //note: this should fail as this is a bug
  it('should be able to see disabled checkbox + correct description given user submitted No for Water Proximity Page', () => {
    waterProximityPage.submitNoOption();
    quotePage.floodProtectionCheckbox.should('have.css', 'color', 'rgb(63, 81, 181)');
    quotePage.floodProtectionCheckboxDescription.contains('Flood Protection Included');
  });

  it('should be able to see enabled checkbox + correct description given user submitted Yes for Water Proximity Page', () => {
    waterProximityPage.submitYesOption();
    quotePage.floodProtectionCheckbox.should('have.css', 'color', 'rgba(0, 0, 0, 0.54)');
    quotePage.floodProtectionCheckboxDescription.contains('Include Flood Protection (+$');
  });

  //note: this should fail as this is a bug
  it('should attempt to unselect the checkbox for the Flood Protection Included option for the Complete Plan', () => {
    waterProximityPage.submitNoOption();
    quotePage.floodProtectionCheckbox.click();
    quotePage.floodProtectionCheckbox.should('have.css', 'color', 'rgba(0, 0, 0, 0.54)');
  });

  it('should attempt to select the checkbox to include Flood Protection for the Complete Plan', () => {
    waterProximityPage.submitYesOption();
    quotePage.floodProtectionCheckbox.click();
    quotePage.floodProtectionCheckbox.should('have.css', 'color', 'rgb(63, 81, 181)');
  }); 
});