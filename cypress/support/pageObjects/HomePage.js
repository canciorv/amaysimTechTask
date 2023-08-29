/// <reference types="Cypress" />
class HomePage {
    constructor(){

    }

    selectPlan(simPlan_to_select){
        cy.selectSimPlan(simPlan_to_select)
    }
}
export default HomePage