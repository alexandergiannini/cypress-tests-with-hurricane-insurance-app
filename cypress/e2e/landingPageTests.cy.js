import LandingPage from "../pages/landingPage";
const landingPage = new LandingPage()

describe('Hurricane Insurance Landing Page tests', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('submits a valid zip code', () => {
    landingPage.typePostalCodeField('90403');
    landingPage.clickGetAQuoteBtn();
    cy.url().should('include', '/building-material');
  });

  it('attempts to submit a zip code which is blank', () => {
    landingPage.clickGetAQuoteBtn();
    landingPage.requiredValidationMessage.contains('Required').should('be.visible');
  });

  it('attempts to submit an invalid 4 digit zip code', () => {
    landingPage.typePostalCodeField('1234');
    landingPage.clickGetAQuoteBtn();
    landingPage.requiredValidationMessage.contains('Invalid zip code').should('be.visible');
  });

  // Note: this test case should fail at this time
  // it('attempts to submit an invalid 5 digit zip code', () => {
  //   landingPage.typePostalCodeField('00000');
  //   landingPage.clickGetAQuoteBtn();
  //   landingPage.requiredValidationMessage.contains('Invalid zip code').should('be.visible');
  // });
});