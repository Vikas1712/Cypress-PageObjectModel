import * as testData from '../fixtures/account/common'
import LoginPage from '../support/pages/loginPage'
import ContactPage from '../support/pages/contactPage'
import Navigation from '../support/navigation'
import BrandingPage from '../support/pages/brandingPage'
import RoomPage from '../support/pages/roomPage'

describe('Automation Testing Online tests', () => {
    const navigation =new Navigation()
    const login = new LoginPage()
    const room = new RoomPage()
    const branding =new BrandingPage()
    const contact = new ContactPage()

    beforeEach(()=>{
        cy.visit('https://automationintesting.online/#/')  
        navigation.clickAdminPanel()
        login.executeLogin(testData.VALID_USERNAME,testData.VALID_PASSWORD)
        cy.wait(3000);
    })

    // Test one: Verity that you can log in with valid credentials
    it('should be able to login', () => {
        cy.get('div.navbar-collapse').invoke('text').then(text => {
            expect(text).to.contain('Rooms');
        });
    })

    //Test two: Check to see if rooms are saved and displayed in the UI
    it('should be able to save rooms', () => {
        room.executeCreateRoom(testData.ROOMNO,testData.ROOMPRICE)
room.validateRoomDetails(1)
    })

    // Test three: Check to see the confirm message appears when branding is updated
    it('should be able to update branding', () => {
        navigation.navigateToBranding();
        cy.wait(2000);
        branding.executeUpdateBrand(testData.BRAND_NAME)
        cy.wait(1000);
        branding.verifyCloseButton()
     })

    // Test four: Check to see if the contact form shows a success message
    it('should see success message', () => {
        navigation.navigateToContact();
        contact.executeContact(testData.CONTACT_NAME,testData.CONTACT_EMAIL,testData.CONTACT_PHONE,testData.CONTACT_SUBJECT,testData.CONTACT_MESSAGE)
        cy.wait(3000);
        contact.verifyThankMessage()
    })
    
    // Test five: Check to see if unread messages are bolded
    it('should see unread messages are bolded', () => {
        navigation.navigateToMessage();
        cy.wait(2000);
        cy.get('div.read-false').its('length')
        .should('be.at.least', 1);
    })
})