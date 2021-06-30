class Navigation{
    
    clickAdminPanel(){
          cy.contains('Admin panel').click()
    }

    navigateToBranding(){
        cy.visit('https://automationintesting.online/#/admin/branding');
    }

    navigateToContact(){
        cy.visit('https://automationintesting.online')
    }

    navigateToMessage(){
        cy.visit('https://automationintesting.online/#/admin/messages')
    }
}
export default Navigation