// <reference types="cypress" />

import LoginPage from "../Page/loginPage.cy.js";
describe('Login Test', () => {
    let testdata;
    const loginpage = new LoginPage();

    beforeEach(() => {
    cy.fixture('credential.json').then( (testdata_original)=> {testdata = testdata_original});
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    });

    
    it('Login Test', () => {
        loginpage.loginbuttonexist()
    })

    it('valid credential', () => {
        loginpage.enteremailAddress(testdata.emailAddress);
        loginpage.enterPassword(testdata.password);
        loginpage.clickLogin();
        cy.url().should('include', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
        loginpage.user_logout()
    })

    it('Enter wrong email and password', () => {
        loginpage.enteremailAddress(testdata.invalid_username);
        loginpage.enterPassword(testdata.invalid_password);
        loginpage.clickLogin();
        cy.url().should('not.include' , '/web/index.php/dashboard/index');
        loginpage.getErrorMessage();
    })

    it('Enter empty email and password', () => {
        loginpage.clickLogin();
        loginpage.getErrorMessage();
        //cy.url().should('not.include' , '/web/index.php/dashboard/index');
    })


});