//login to the applocation
class LoginPage {
  constructor() {
    this.loginButton = '[value="Login"]';
    this.emailAddress = 'input[name="email"]';
    this.password = 'input[name="password"]';
    this.logout = ".list-group-item";
  }

  openUrl() {
    cy.visit(this.url);
  }

  loginbuttonexist() {
    cy.get(this.loginButton).should("be.visible");
  }
  enteremailAddress(email) {
    cy.get(this.emailAddress).type(email);
  }

  enterPassword(password) {
    cy.get(this.password).type(password);
  }
  clickLogin() {
    cy.get(this.loginButton).click();
  }

  usr_logged_in() {
    cy.get("h2.card-header.h5").contains("My Account").should("be.visible");
  }
  user_logout() {
  cy.get(this.logout).eq(13).click();
  }

  getErrorMessage(){
    cy.contains(' Warning')
  }
}

module.exports = LoginPage;
