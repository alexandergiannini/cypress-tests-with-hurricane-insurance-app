class QuotePage {
  get standardPlanCard() {
    return cy.get('div.MuiPaper-elevation1');
  }

  get standardPlanTextHeader() {
    return cy.get('h3.MuiTypography-h6');
  }

  get standardPlanPriceText() {
    return cy.dataTestId('price_Standard');
  }

  get completePlanCard() {
    return cy.get('div.MuiPaper-elevation3');
  }

  get completePlanTextHeader() {
    return cy.get('h3.MuiTypography-h5');
  }

  get completePlanPriceText() {
    return cy.dataTestId('price_Complete');
  }

  get floodProtectionCheckboxDescription() {
    return cy.get('span.MuiTypography-body1');
  }

  get floodProtectionCheckbox() {
    return cy.dataTestId('price_FloodProtection');
  }

  clickFloodProtectionCheckbox() {
    this.floodProtectionCheckbox.click();
  }
}

export default QuotePage