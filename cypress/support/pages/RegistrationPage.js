class RegistrationPage {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    }

    fillFirstName(firstName) {
        cy.get('#firstname').type(firstName);
    }

    fillLastName(lastName) {
        cy.get('#lastname').type(lastName);
    }

    fillEmail(email) {
        cy.get('#email_address').type(email);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    fillConfirmPassword(confirmPassword) {
        cy.get('#password-confirmation').type(confirmPassword);
    }

    clickRegisterButton() {
        cy.get('button[title="Create an Account"]',{timeout:100000}).click();
    }
}

export default RegistrationPage;