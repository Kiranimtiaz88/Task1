/// <reference types="cypress" />

import RegistrationPage from '../support/pages/RegistrationPage';
import LoginPage from '../support/pages/LoginPage';
import SearchProductPage from '../support/pages/SearchProductPage';
import CheckoutPage from '../support/pages/CheckoutPage';
import WishlistPage from '../support/pages/WishlistPage';

describe('Register and Place Order with Multiple Products and Validate Price', () => {
    const registrationPage = new RegistrationPage();
    const loginPage = new LoginPage();
    const searchProductPage = new SearchProductPage();
    const checkoutPage = new CheckoutPage();
    const wishlistPage = new WishlistPage();
    let testData;

    before(() => {
        // Load test data from the JSON file
        cy.fixture('testData').then((data) => {
            testData = {
                ...data,
                email: `john.doe${Date.now()}@example.com` // Generate unique email
            };
        });
    });

    it('Register a user', () => {
        // Step 1: Register a new user
        registrationPage.visit();
        registrationPage.fillFirstName(testData.firstName);
        registrationPage.fillLastName(testData.lastName);
        registrationPage.fillEmail(testData.email);
        registrationPage.fillPassword(testData.password);
        registrationPage.fillConfirmPassword(testData.password);
        registrationPage.clickRegisterButton();
/*
        // Step 2: Log out after registration
        cy.get('a[href*="customer/account/logout"]', { timeout: 20000 }).click();

        // Step 3: Validate login with the registered user
        loginPage.visit();
        loginPage.fillEmail(testData.email);
        loginPage.fillPassword(testData.password);
        loginPage.clickLoginButton();
        loginPage.validateSuccessfulLogin();*/

        
    });
    it('Search and add product to the cart', () => {
        searchProductPage.visit();
        searchProductPage.searchForProduct('shirt');
        searchProductPage.addProductToCart();
        searchProductPage.goToCart();
        searchProductPage.validateCartSubtotal(100); 

    });
    it('Go to wishlist and move to cart from wishlist', () => {
        wishlistPage.goToWishlist();
        wishlistPage.moveToCartFromWishlist();
    });

    it('Proceed to checkout and place the order', () => {

        checkoutPage.proceedToCheckout();
        checkoutPage.fillShippingDetails({
    email: testData.email,
    firstName: testData.firstName,
    lastName: testData.lastName,
    address: '123 Main St',
    city: 'Los Angeles',
    postcode: '90001',
    phone: '1234567890',
    state: 'California'
});
checkoutPage.selectShippingMethod();
checkoutPage.placeOrder();

// Step 7: Validate order success
checkoutPage.validateOrderSuccess();
    });
});

