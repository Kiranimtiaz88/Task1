class CheckoutPage {
    proceedToCheckout() {
        cy.get('.checkout-methods-items button[title="Proceed to Checkout"]',{timeout : 80000}).click();
    }

    fillShippingDetails(shippingDetails) {
        cy.get('#customer-email').type(shippingDetails.email);
        cy.get('[name="firstname"]').type(shippingDetails.firstName);
        cy.get('[name="lastname"]').type(shippingDetails.lastName);
        cy.get('[name="street[0]"]').type(shippingDetails.address);
        cy.get('[name="city"]').type(shippingDetails.city);
        cy.get('[name="postcode"]').type(shippingDetails.postcode);
        cy.get('[name="telephone"]').type(shippingDetails.phone);
        cy.get('[name="region_id"]').select(shippingDetails.state);
    }

    selectShippingMethod() {
        cy.get('[name="ko_unique_1"]').check({ force: true });
    }

    placeOrder() {
        cy.get('button[title="Place Order"]').click();
    }

    validateOrderSuccess() {
        cy.get('.checkout-success').should('contain.text', 'Thank you for your purchase!');
    }
}

export default CheckoutPage;