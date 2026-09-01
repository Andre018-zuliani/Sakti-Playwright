// pages/LoginPage.js

/**
 * Page Object Model untuk halaman Login.
 * Menyimpan seluruh locator & method interaksi halaman login,
 * supaya test file (spec) tidak perlu tahu detail selector.
 */
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locator menggunakan CSS Selector (id) dan Playwright Built-in Locator
    this.usernameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.errorMessage = page.locator('[data-test="error"]');
    this.logo = page.getByText("Swag Labs"); // contoh Built-in Locator getByText
  }

  async goto() {
    await this.page.goto("/");
  }

  /**
   * Login lengkap dalam satu action.
   * fill() dan click() otomatis menunggu elemen ready (auto-waiting),
   * tanpa perlu waitForTimeout().
   */
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorText() {
    return this.errorMessage.textContent();
  }
}

module.exports = { LoginPage };
