/// <reference types="Cypress" />
class CartPage {
    constructor(){
        this.pickNumber_button = '[data-testid="number-option-1"]'
        this.simType = '[value="USIM"]'
        this.checkout_button = '[data-testid="product-checkout-button"]'
    }

    selectMobileNumber(){
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