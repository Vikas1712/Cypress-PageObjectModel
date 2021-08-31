class LoginPage{
  private selectors = {
    EmailField: 'username',
    PasswordField: 'password'
  }
    get EmailField(){
      return cy.getWithAutoId(this.selectors.EmailField)
    }
    get PasswordField(){
      return cy.getWithAutoId(this.selectors.PasswordField)
    }

    executeLogin = (email: string, password: string) => {
    this.EmailField.type(email)
    this.PasswordField.type(password)
    cy.clickOnAutoId('submit')
  }
}
export default LoginPage