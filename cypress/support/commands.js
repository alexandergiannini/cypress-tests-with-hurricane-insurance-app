// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('name', (attr) => {
  return cy.get(`[name="${attr}"]`);
});

Cypress.Commands.add('zipCodeSubmitBtn', (attr) => {
  return cy.get(`[type="${attr}"]`);
});

Cypress.Commands.add('buildMaterialOption', (attr) => {
  return cy.get(`[value="${attr}"]`);
});

Cypress.Commands.add('nextBtn', (attr) => {
  return cy.get(`[type="${attr}"]`)
});

Cypress.Commands.add('waterProximityOption', (attr) => {
  return cy.get(`[value="${attr}"]`);
});

// Cypress.Commands.add('nextBtnWaterProximityPage', (attr) => {
//   return cy.get(`[type="${attr}"]`); //need to alter this
// });