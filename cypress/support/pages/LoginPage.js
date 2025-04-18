class LoginPage {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    }

    fillEmail(email) {
        cy.get('#email').type(email);
    }

    fillPassword(password) {
        cy.get('#pass').type(password);
    }

    clickLoginButton() {
        cy.get('button[title="Sign In"]').click();
    }

    validateSuccessfulLogin() {
        cy.get('.welcome-msg').should('contain', 'Welcome');
    }
}

export default LoginPage;