import LandingPage from "../pages/landingPage";
const landingPage = new LandingPage()

describe('Hurricane Insurance Landing Page tests', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('submits a valid California zip code', () => {
    landingPage.submitZipCodeForm('90403');
    cy.url().should('include', '/building-material');
  });

  it('submits a valid New York zip code', () => {
    landingPage.submitZipCodeForm('10111');
    cy.url().should('include', '/building-material');
  });

  it('submits a valid Chicago zip code', () => {
    landingPage.submitZipCodeForm('60602');
    cy.url().should('include', '/building-material');
  });

  it('submits a valid Texas zip code', () => {
    landingPage.submitZipCodeForm('78701');
    cy.url().should('include', '/building-material');
  });

  it('submits a valid Florida zip code', () => {
    landingPage.submitZipCodeForm('33592');
    cy.url().should('include', '/building-material');
  });

  it('submits a valid Hawaii zip code', () => {
    landingPage.submitZipCodeForm('96712');
    cy.url().should('include', '/building-material');
  });

  it('submits a valid Alaska zip code', () => {
    landingPage.submitZipCodeForm('99501');
    cy.url().should('include', '/building-material');
  });

  //Note: this test case should fail as this is a bug
  it('submits a valid Canada zip code', () => {
    landingPage.submitZipCodeForm('M5V 3L9');
    cy.url().should('include', '/building-material');
  });

  //Note: this test case should fail as this is a bug
  it('submits a valid Australia zip code', () => {
    landingPage.submitZipCodeForm('4215');
    cy.url().should('include', '/building-material');
  });

  it('submits a valid Mexico zip code', () => {
    landingPage.submitZipCodeForm('23453');
    cy.url().should('include', '/building-material');
  });

  it('submits a valid Italy zip code', () => {
    landingPage.submitZipCodeForm('00199');
    cy.url().should('include', '/building-material');
  });

 //Note: this test case should fail as this is a bug
  it('submits a valid Japan zip code', () => {
    landingPage.submitZipCodeForm('120-0000');
    cy.url().should('include', '/building-material');
  });

  //Note: this test case should fail as this is a bug
  it('submits a valid Ghana zip code', () => {
    landingPage.submitZipCodeForm('GA107');
    cy.url().should('include', '/building-material');
  });

  it('attempts to submit a zip code which is blank', () => {
    landingPage.clickGetAQuoteBtn();
    landingPage.requiredValidationMessage.contains('Required').should('be.visible');
  });

  it('attempts to submit an invalid 4 digit zip code', () => {
    landingPage.submitZipCodeForm('1234');
    landingPage.requiredValidationMessage.contains('Invalid zip code').should('be.visible');
  });

  //Note: this test case should fail as this is a bug
  it('attempts to submit an invalid 5 digit zip code', () => {
    landingPage.submitZipCodeForm('00000');
    landingPage.requiredValidationMessage.contains('Invalid zip code').should('be.visible');
  });

  it('attempts to submit an invalid 5 digit zip code with special characters', () => {
    landingPage.submitZipCodeForm('9040!');
    landingPage.requiredValidationMessage.contains('Invalid zip code').should('be.visible');
  });

  it('attempts to submit an invalid 5 digit zip code with alphabetical characters', () => {
    landingPage.submitZipCodeForm('9004a');
    landingPage.requiredValidationMessage.contains('Invalid zip code').should('be.visible');
  });

  it('attempts to submit a valid 5 digit zip code but with empty white space', () => {
    landingPage.submitZipCodeForm(' 90404');
    landingPage.requiredValidationMessage.contains('Invalid zip code').should('be.visible');
  });
});