/// <reference types="Cypress" />

class PaymentPage {
    constructor(){
        this.cardNumber_field = '[data-elements-stable-field-name="cardNumber"]'
        this.cardExpiry_field = '[data-elements-stable-field-name="cardExpiry"]'
        this.cvc_field = '[data-elements-stable-field-name="cardCvc"]'
        this.consentCheckbox = '[data-id-consent-check]'
        this.placeOrder_button = '[data-checkout]'
    }

    

    addPaymentDetails(cardNumber,expiry,cvv){
        cy.iframe('iframe[title="Secure card number input frame"]').find(this.cardNumber_field).type(cardNumber)
        cy.iframe('iframe[title="Secure expiration date input frame"]').find(this.cardExpiry_field).type(expiry)
        cy.iframe('iframe[title="Secure CVC input frame"]').find(this.cvc_field).type(cvv)
    }
    checkConsent(){
        cy.get(this.consentCheckbox).click({force: true})
    }

    clickPlaceOrder_button(){
        cy.get(this.placeOrder_button).click()
    }
}
export default PaymentPage

