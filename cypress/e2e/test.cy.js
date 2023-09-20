/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
     
    })

    it('empty validation test', () => {
        cy.get("#submit").click();
        cy.get("#error").should("contain","Your username is invalid!");  
    })
  
    it('invalid password login test', () => {
        cy.get("#username").type("student");
        cy.get("#password").type("testt");
        cy.get("#submit").click();
        cy.get("#error").should("contain","Your password is invalid!");
    })

    it('invalid username login test', () => {
        cy.get("#username").type("student1");
        cy.get("#password").type("Password123");
        cy.get("#submit").click();
        cy.get("#error").should("contain","Your username is invalid!");
    })

    it('valid login test', () => {
        cy.get("#username").type("student");
        cy.get("#password").type("Password123");
        cy.get("#submit").click();
        cy.get("h1").should("contain","Logged In Successfully");
        cy.url().should('include','/logged-in-successfully/');
    })
})