/// <reference types="Cypress" />
class AboutPage {
    constructor(){
        this.newCustomer_option = '[data-testid="existing-user-no"]' 
        this.firstName_field = '[data-first-name]'
        this.lastName_field = '[data-last-name]'
        this.dateOfBirth_field = '[data-dob]'
        this.email_field = '[data-email-address]'
        this.password_field = '[data-password]'
        this.contactNumber_field = '[data-contact-number]'
        this.address_field = '[role="combobox"]'
        this.address_list = '[role="option"]'
        this.paymentType = '[data-payment-type="CREDIT_CARDS"]'
        this.termsCheckbox = '[data-tnc-checkbox]'
        this.continuePayment_button = '[data-continue-to-payment-button]'
    }

    selectCustomer_type(){
        cy.get(this.newCustomer_option).check()
    }

    createUser(fName,lName,dateOfBirth,address){
        //generates a random string
        function makeid(length) {
            let result = '';
            let characters = '0123456789';
            let charactersLength = characters.length;
            for(let i = 0; i < length; i++){
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        cy.get(this.firstName_field).type(fName)
        cy.get(this.lastName_field).type(lName)
        cy.get(this.dateOfBirth_field).type(dateOfBirth)
        cy.get(this.email_field).type(makeid(7) + "@gmail.com")
        cy.get(this.password_field).type(Cypress.env('password'))
        cy.get(this.contactNumber_field).type("04" + makeid(8))
        cy.get(this.address_field).type(address)
        //Selects the dropdown option equal to the text written on the address field
        cy.get(this.address_list).invoke('show').should('be.visible').each(($e1) => {
            if($e1.text().trim() == address){
                cy.wrap($e1).click({force:true})
            }
        })
    }

    selectPaymentType(){
        cy.get(this.paymentType).check()
    }

    checkTerms(){
        cy.get(this.termsCheckbox).check({force: true})
    }

    continueToPayment(){
        cy.get(this.continuePayment_button).click()
    }

}
export default AboutPage