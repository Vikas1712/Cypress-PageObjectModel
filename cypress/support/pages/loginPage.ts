class LoginPage{
    loginEmailFieldLocator: string = '[data-testid="username"]'
    loginPasswordFieldLocator: string = '[data-testid="password"]'
    loginButtonLocator: string ='[data-testid="submit"]'

    getEmailField=()=>cy.get(this.loginEmailFieldLocator)
    getPasswordField=()=>cy.get(this.loginPasswordFieldLocator)
    clickOnlogin=()=>cy.get(this.loginButtonLocator).click()

    setEmailField = (email: string) => this.getEmailField().type(email)
    setPasswordField = (password: string) =>this.getPasswordField().type(password)

    executeLogin = (email: string, password: string) => {
    this.setEmailField(email)
    this.setPasswordField(password)
    this.clickOnlogin()
  }
}
export default LoginPage