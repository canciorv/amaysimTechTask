/// <reference types="Cypress" />

class PaymentPage {
    constructor(){
        this.cardNumber_field = '[data-elements-stable-field-name="cardNumber"]'
        this.cardExpiry_field = '[autocomplete="cc-exp"]'
        this.cvc_field = '[autocomplete="cc-csc"]'
        this.consentCheckbox = '[data-id-consent-check]'
        this.placeOrder_button = '[data-checkout]'
    }

    

    addPaymentDetails(cardNumber,expiry,cvv){
        cy.iframe('iframe[title="Secure card number input frame"]').find(this.cardNumber_field).type('42424242442')
        // cy.get(this.cardNumber_field).should('be.visible').type(cardNumber)
        // cy.get(this.cardExpiry_field).should('be.visible').type(expiry)
        // cy.get(this.cvc_field).should('be.visible').type(cvv)
    }
    checkConsent(){
        cy.get(this.consentCheckbox).click({force: true})
    }

    clickPlaceOrder_button(){
        cy.get(this.placeOrder_button).click()
    }
}
export default PaymentPage

