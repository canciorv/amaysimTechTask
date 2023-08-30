/// <reference types="Cypress" />
class HomePage {

    selectPlan(simPlan_to_select){
        cy.selectSimPlan(simPlan_to_select)
    }
}
export default HomePage