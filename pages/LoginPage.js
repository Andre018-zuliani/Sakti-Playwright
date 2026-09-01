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

    // Locator menggunakan CSS Selector (id)
    this.usernameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.errorMessage = page.locator('[data-test="error"]');

    // Built-in Locator Playwright: getByTestId (mengacu ke atribut data-test,
    // sudah dikonfigurasi lewat `testIdAttribute` di playwright.config.js)
    this.errorMessageByTestId = page.getByTestId("error");

    // Built-in Locator Playwright: getByRole (mencari elemen berdasarkan role aksesibilitas)
    this.loginButton = page.getByRole("button", { name: "Login" });

    // Built-in Locator Playwright: getByPlaceholder (mencari berdasarkan placeholder text)
    this.usernameByPlaceholder = page.getByPlaceholder("Username");
    this.passwordByPlaceholder = page.getByPlaceholder("Password");

    // Built-in Locator Playwright: getByText
    this.logo = page.getByText("Swag Labs");
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
