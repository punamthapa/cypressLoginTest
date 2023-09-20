/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
     
    })

    it('empty validation test', () => {
        cy.get("#submit").click();
        cy.get("#error").should("contain","Your username is invalid!");
      

       
    })
  
    // it('invalid login test', () => {
    //     cy.get("#username").;

       
    // })
})