/// <reference types="Cypress" />
class CartPage {
    constructor(){
        this.pickNumber_button = '[data-testid="number-option-1"]'
        this.simType = '[value="USIM"]'
        this.checkout_button = '[data-testid="product-checkout-button"]'
        this.cart_form = '[data-mobile-number-header]'
    }
    selectMobileNumber(){
        cy.get((this.cart_form), { timeout: 10000 }).should('be.visible')
        cy.get(this.pickNumber_button).click({force: true})
    }
    selectSimType(){
        cy.get(this.simType).check({force: true})
    }
    checkout(){
        cy.get(this.checkout_button).click()
    }
}
export default CartPage