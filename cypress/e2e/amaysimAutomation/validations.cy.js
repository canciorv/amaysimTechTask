/// <reference types="Cypress" />

import AboutPage from '../../support/pageObjects/AboutPage'
import CartPage from '../../support/pageObjects/CartPage'
import HomePage from '../../support/pageObjects/HomePage'
import PaymentPage from '../../support/pageObjects/PaymentPage'
import SimPlanPage from '../../support/pageObjects/SimPlanPage'

describe('Payment Validation', () => {
    const homePage = new HomePage()
    const simPlanPage = new SimPlanPage()
    const cartPage = new CartPage()
    const aboutPage = new AboutPage()
    const paymentPage = new PaymentPage()
    before(() =>{
        cy.fixture('testData').then(data => {
            globalThis.data = data;
          });
        cy.visit(Cypress.env('url'))
        cy.viewport(1280,800)
    })

    it('Validate Incorrect Credit Card Data', () => {
        homePage.selectPlan('7 day SIM plans')
        simPlanPage.buyPlan()
        cy.wait(10000)
        cartPage.selectMobileNumber()
        cartPage.selectSimType()
        cartPage.checkout()
        aboutPage.selectCustomer_type()
        aboutPage.createUser(
            globalThis.data.firstName,
            globalThis.data.lastName,
            globalThis.data.date_of_birth,
            globalThis.data.address
        )
        aboutPage.selectPaymentType()
        aboutPage.checkTerms()
        aboutPage.continueToPayment()
        cy.wait(10000)
        paymentPage.addPaymentDetails(
            globalThis.data.cardNumber,
            globalThis.data.expiry,
            globalThis.data.cvv
        )
        paymentPage.checkConsent()
        paymentPage.clickPlaceOrder_button()
    })
})