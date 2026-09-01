// pages/CheckoutPage.js

/**
 * Page Object Model untuk alur Cart & Checkout.
 */
class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Halaman Cart
    this.cartItems = page.locator(".cart_item");
    this.checkoutButton = page.locator('[data-test="checkout"]');

    // Halaman Checkout - Step One (informasi)
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.errorMessage = page.locator('[data-test="error"]');

    // Halaman Checkout - Step Two (overview)
    this.finishButton = page.locator('[data-test="finish"]');

    // Halaman Checkout - Complete
    this.completeHeader = page.locator(".complete-header");
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }

  async fillInformation(firstName, lastName, postalCode) {
    if (firstName) await this.firstNameInput.fill(firstName);
    if (lastName) await this.lastNameInput.fill(lastName);
    if (postalCode) await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }
}

module.exports = { CheckoutPage };
