// tests/e2e/checkout.spec.js
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../../pages/LoginPage");
const { InventoryPage } = require("../../pages/InventoryPage");
const { CheckoutPage } = require("../../pages/CheckoutPage");

/**
 * E2E Testing - Alur Login -> Cart -> Checkout -> Logout
 * Diadaptasi dari laporan Manual Testing: TE2E-011, TE2E-013, TE2E-014, TE2E-015
 */

const users = {
  standard: { username: "standard_user", password: "secret_sauce" },
};

test.describe("E2E Testing - Cart, Checkout & Logout Flow", () => {
  let loginPage;
  let inventoryPage;
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/\/inventory\.html/);
  });

  test("E2E-01 (TE2E-011) - Tambah item ke cart, badge cart bertambah", async ({
    page,
  }) => {
    await inventoryPage.addToCartByProduct("sauce-labs-backpack").click();

    // Visibility + Equality Assertion
    await expect(inventoryPage.cartBadge).toBeVisible();
    await expect(inventoryPage.cartBadge).toHaveText("1");

    // State Assertion: tombol berubah jadi "Remove"
    await expect(
      inventoryPage.removeFromCartByProduct("sauce-labs-backpack")
    ).toBeVisible();
  });

  test("E2E-02 (TE2E-013) - Checkout dengan Postal Code kosong menampilkan validasi", async ({
    page,
  }) => {
    await inventoryPage.addToCartByProduct("sauce-labs-backpack").click();
    await inventoryPage.openCart();
    await checkoutPage.goToCheckout();

    await checkoutPage.fillInformation("John", "Doe", ""); // postal code sengaja kosong

    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toHaveText(
      "Error: Postal Code is required"
    );
  });

  test("E2E-03 (TE2E-014) - Login sampai order berhasil (Thank you page)", async ({
    page,
  }) => {
    await inventoryPage.addToCartByProduct("sauce-labs-backpack").click();
    await inventoryPage.openCart();
    await checkoutPage.goToCheckout();

    await checkoutPage.fillInformation("John", "Doe", "12345");
    await expect(page).toHaveURL(/\/checkout-step-two\.html/);

    await checkoutPage.finishOrder();

    // Equality Assertion: URL akhir & pesan sukses
    await expect(page).toHaveURL(/\/checkout-complete\.html/);
    await expect(checkoutPage.completeHeader).toBeVisible();
    await expect(checkoutPage.completeHeader).toHaveText(
      "Thank you for your order!"
    );
  });

  test("E2E-04 (TE2E-015) - Logout via burger menu kembali ke halaman login", async ({
    page,
  }) => {
    await inventoryPage.logout();

    // Equality Assertion: kembali ke root/login page
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(loginPage.loginButton).toBeVisible();
  });
});
