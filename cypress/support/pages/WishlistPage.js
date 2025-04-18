class WishlistPage {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/');
    }

    addToWishlist(productName) {
        // Search for the product
        cy.get('#search').type(`${productName}{enter}`);
        // Add the first product to the wishlist
        cy.get('.product-item .actions-secondary a[title="Add to Wish List"]')
            .first()
            .should('be.visible')
            .click();
    }

    goToWishlist() {
        cy.get('a[href*="wishlist"]').click();
    }

    moveToCartFromWishlist() {
        cy.get('.wishlist-items .actions-primary button[title="Add to Cart"]')
            .first()
            .should('be.visible')
            .click();
    }

    proceedToCheckout() {
        cy.get('.checkout-methods-items button[title="Proceed to Checkout"]').click();
    }
}

export default WishlistPage;