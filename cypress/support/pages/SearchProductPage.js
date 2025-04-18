class SearchProductPage {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/', { timeout: 80000 });
    }

    searchForProduct(productName) {
        cy.get('#search').type(`${productName}{enter}`);
    }

    addProductToCart() {
        cy.get('.product-item .actions-primary button[title="Add to Cart"]')
            .first()
            .should('be.visible')
            .click({ force: true });
    }s


validateCartSubtotal(expectedSubtotal) {
    // Wait for cart to be interactive
    cy.get('body').should('not.have.class', 'loading')
    
    // Multiple fallback selectors
    const selectors = [
      '.subtotal .price',
      '.cart-totals .price',
      '[data-testid="subtotal-price"]',
      '.summary .amount'
    ]
    
   cy.contains(/subtotal|total|price/i)
  .parents()
  .find(/[0-9.,$]/)
  .first()
  .then(($el) => {
    const value = parseFloat($el.text().replace(/[^0-9.]/g, ''))
    expect(value).to.equal(expectedSubtotal)
  })
  
    }

    goToCart() {
        cy.get('.showcart').click();
        cy.get('a[href*="checkout/cart"]').click();
    }
}

export default SearchProductPage;