/// <reference types="Cypress" />
class SimplePlanPage {
    constructor(){
        this.buyButton = '.product-card-ctas' 
    }

    buyPlan(){
        cy.get(this.buyButton).eq(0).click()
    }
}
export default SimplePlanPage