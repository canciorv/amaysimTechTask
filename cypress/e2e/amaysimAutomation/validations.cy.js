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
        //called to maintain and hold the test data for automation
        cy.fixture('testData').then(data => {
            globalThis.data = data;
          });
        //visits the page
        cy.visit(Cypress.env('url'))
        cy.viewport(1280,800)
    })

    it('Validate Incorrect Credit Card Data', () => {
        //Select any Sim Plan available
        homePage.selectPlan('7 day SIM plans')
        simPlanPage.buyPlan()
        cartPage.selectMobileNumber()
        cartPage.selectSimType()
        cartPage.checkout()
        aboutPage.selectCustomer_type()
        //Fill-in user details to proceed to payments page
        aboutPage.createUser(
            globalThis.data.firstName,
            globalThis.data.lastName,
            globalThis.data.date_of_birth,
            globalThis.data.address
        )
        aboutPage.selectPaymentType()
        aboutPage.checkTerms()
        aboutPage.continueToPayment()
        //Adds invalid payment details to trigger the validation
        paymentPage.addPaymentDetails(
            globalThis.data.cardNumber,
            globalThis.data.expiry,
            globalThis.data.cvv
        )
        paymentPage.checkConsent()
        paymentPage.clickPlaceOrder_button()
        //Validate if error message is displayed on form
        paymentPage.validateErrorMessage()
    })
})