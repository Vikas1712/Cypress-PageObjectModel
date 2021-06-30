class BrandingPage{
    brandNameFieldLocator: string = '[id="name"]'
    brandSubmitButtonLocator: string ='[id="updateBranding"]'
    brandCloseButtonLocator: string = '.btn-outline-primary'

    getNameField = () => cy.get(this.brandNameFieldLocator)
    clickOnSubmit = () => cy.get(this.brandSubmitButtonLocator).click()
    getCloseButton =() => cy.get(this.brandCloseButtonLocator).contains('Close')

    setNameField = (name: string) => 
     this.getNameField().clear().type(name)

    executeUpdateBrand = (name: string) => {
    this.setNameField(name)
    this.clickOnSubmit()
    }

    verifyCloseButton(){
        this.getCloseButton().its('length').then(elementCount => {
            if (elementCount === 1) { 
                expect(true).to.be.true;
            } else {
                expect(true).to.be.false;
            }
        });
    }
}
export default BrandingPage