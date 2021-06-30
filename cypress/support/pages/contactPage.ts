class ContactPage{
    contactNameFieldLocator: string = '[placeholder="Name"]'
    contactEmailFieldLocator: string = '[placeholder="Email"]'
    conactPhoneFieldLocator: string = '[placeholder="Phone"]'
    conactSubjectFieldLocator: string ='[placeholder="Subject"]'
    conactMessageFieldLocator: string ='[id="description"]'
    conactSubmitButtonLocator: string ='[id="submitContact"]'
    contactMessageFieldLocator: string ='.contact'

    getNameField=()=>cy.get(this.contactNameFieldLocator)
    getEmailField=()=>cy.get(this.contactEmailFieldLocator)
    getPhoneField=()=>cy.get(this.conactPhoneFieldLocator)
    getSubjectField=()=>cy.get(this.conactSubjectFieldLocator)
    getMessageField=()=>cy.get(this.conactMessageFieldLocator)
    clickOnSubmit=()=>cy.get(this.conactSubmitButtonLocator).click()
    getContactMessage=()=>cy.get(this.contactMessageFieldLocator)

    setNameField = (name: string) => this.getNameField().type(name)
    setEmailField = (email: string) => this.getEmailField().type(email)
    setPhoneField = (phoneNo: string) => this.getPhoneField().type(phoneNo)
    setSubjectField = (subject: string) => this.getSubjectField().type(subject)
    setMessageField = (message: string) => this.getMessageField().type(message)

    executeContact = ( name: string, email: string, phoneNo: string, subject:string, message:string) => {
    this.setNameField(name)
    this.setEmailField(email)
    this.setPhoneField(phoneNo)
    this.setSubjectField(subject)
    this.setMessageField(message)
    this.clickOnSubmit()
    }

    verifyThankMessage(){
      this.getContactMessage().invoke('text').should('contain', 'Thanks for getting in touch')
    }
}
export default ContactPage