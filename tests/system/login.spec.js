// tests/system/login.spec.js
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../../pages/LoginPage");
const { InventoryPage } = require("../../pages/InventoryPage");

/**
 * System Testing - Modul Authentication (Login) & Dashboard
 * Diadaptasi dari laporan Manual Testing: TE2E-001 s/d TE2E-009
 *
 * Aturan:
 * - Tidak ada page.waitForTimeout() statis; seluruh interaksi
 *   mengandalkan Auto-waiting Playwright bawaan pada fill()/click().
 * - Locator diisolasi di dalam Page Object Model (pages/LoginPage.js, InventoryPage.js).
 */

const users = {
  standard: { username: "standard_user", password: "secret_sauce" },
  lockedOut: { username: "locked_out_user", password: "secret_sauce" },
};

test.describe("System Testing - Authentication (Login)", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("TE2E-001 - Landing page menampilkan seluruh elemen login", async ({ page }) => {
    // Visibility Assertion
    await expect(loginPage.logo).toBeVisible();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();

    // State Assertion: tombol login harus enabled sejak awal
    await expect(loginPage.loginButton).toBeEnabled();
  });

  test("TE2E-002 - Login berhasil dengan kredensial valid", async ({ page }) => {
    await loginPage.login(users.standard.username, users.standard.password);

    // Equality Assertion: URL harus mengandung /inventory.html (dashboard)
    await expect(page).toHaveURL(/\/inventory\.html/);

    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.inventoryList).toBeVisible();
  });

  test("TE2E-002b - Login berhasil menggunakan Built-in Locator getByPlaceholder", async ({
    page,
  }) => {
    // Demonstrasi locator alternatif: getByPlaceholder & getByRole
    await loginPage.usernameByPlaceholder.fill(users.standard.username);
    await loginPage.passwordByPlaceholder.fill(users.standard.password);
    await loginPage.loginButton.click(); // loginButton = getByRole('button', { name: 'Login' })

    await expect(page).toHaveURL(/\/inventory\.html/);
  });

  test("TE2E-003 - Login dengan password salah menampilkan error", async ({ page }) => {
    await loginPage.login(users.standard.username, "wrong_password");

    // Visibility + Equality Assertion (memakai locator CSS attribute selector)
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      /Username and password do not match/
    );

    // Assertion yang sama, kali ini memakai Built-in Locator getByTestId
    await expect(loginPage.errorMessageByTestId).toBeVisible();

    await expect(page).not.toHaveURL(/\/inventory\.html/);
  });

  test("TE2E-004 - Login dengan akun locked-out ditolak (contoh XPath - opsional)", async ({
    page,
  }) => {
    // Contoh penggunaan XPath langsung, sebagai alternatif dari CSS Selector
    await page.locator("//input[@id='user-name']").fill(users.lockedOut.username);
    await page.locator("//input[@id='password']").fill(users.lockedOut.password);
    await page.locator("//input[@id='login-button']").click();

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      "Sorry, this user has been locked out"
    );
  });

  test("TE2E-005 - Validasi field username & password kosong", async ({ page }) => {
    await loginPage.loginButton.click();

    // Equality Assertion: pesan error spesifik
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Username is required"
    );
  });

  test("TE2E-006 - Password field masking (State Assertion)", async ({ page }) => {
    await loginPage.passwordInput.fill("secret_sauce");

    // State Assertion: tipe input harus 'password' (karakter di-mask)
    await expect(loginPage.passwordInput).toHaveAttribute("type", "password");
    await expect(loginPage.loginButton).toBeEnabled();
  });
});

test.describe("System Testing - Dashboard Product Listing & Sorting", () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/\/inventory\.html/);
  });

  test("TE2E-007 - Product listing menampilkan 6 produk lengkap", async ({ page }) => {
    // State Assertion: jumlah produk harus 6
    await expect(inventoryPage.inventoryItems).toHaveCount(6);

    const firstItem = inventoryPage.inventoryItems.first();
    await expect(firstItem.locator(".inventory_item_img img")).toBeVisible();
    await expect(firstItem.locator(".inventory_item_name")).toBeVisible();
    await expect(firstItem.locator("button")).toHaveText("Add to cart");
  });

  test("TE2E-008 - Sort produk berdasarkan harga (low to high)", async ({ page }) => {
    await inventoryPage.sortBy("lohi");

    // Equality Assertion pada value dropdown
    await expect(inventoryPage.sortDropdown).toHaveValue("lohi");

    const prices = await inventoryPage.getAllPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });

  test("TE2E-009 - Sort produk berdasarkan nama (Z to A)", async ({ page }) => {
    await inventoryPage.sortBy("za");

    // Equality Assertion: item pertama setelah sort harus sesuai
    await expect(inventoryPage.inventoryItemNames.first()).toHaveText(
      "Test.allTheThings() T-Shirt (Red)"
    );
  });
});
