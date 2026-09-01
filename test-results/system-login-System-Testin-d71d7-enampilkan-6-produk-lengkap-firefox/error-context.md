# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: system\login.spec.js >> System Testing - Dashboard Product Listing & Sorting >> TE2E-007 - Product listing menampilkan 6 produk lengkap
- Location: tests\system\login.spec.js:107:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.inventory_item').first().locator('.inventory_item_img')
Expected: visible
Error: strict mode violation: locator('.inventory_item').first().locator('.inventory_item_img') resolved to 2 elements:
    1) <div class="inventory_item_img">…</div> aka locator('.inventory_item_img').first()
    2) <img alt="Sauce Labs Backpack" class="inventory_item_img" data-test="inventory-item-sauce-labs-backpack-img" src="/assets/sauce-backpack-1200x1500-CjRW-Djj.jpg"/> aka locator('[data-test="item-4-img-link"]')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.inventory_item').first().locator('.inventory_item_img')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - link [ref=e13] [cursor=pointer]:
                  - /url: "#"
                  - text: All Items
                - link [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - link [ref=e15] [cursor=pointer]:
                  - /url: "#"
                  - text: Logout
                - link [ref=e16] [cursor=pointer]:
                  - /url: "#"
                  - text: Reset App State
              - button [ref=e18] [cursor=pointer]: Close Menu
        - generic [ref=e20]: Swag Labs
      - generic [ref=e24]:
        - generic [ref=e25]: Products
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Name (A to Z)
          - combobox [ref=e29]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link [ref=e36] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e37]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - link "Sauce Labs Backpack" [ref=e40] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e42]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e43]:
            - generic [ref=e44]: $29.99
            - button "Add to cart" [ref=e45] [cursor=pointer]
      - generic [ref=e46]:
        - link [ref=e48] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e49]
        - generic [ref=e50]:
          - generic [ref=e51]:
            - link "Sauce Labs Bike Light" [ref=e52] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e54]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e55]:
            - generic [ref=e56]: $9.99
            - button "Add to cart" [ref=e57] [cursor=pointer]
      - generic [ref=e58]:
        - link [ref=e60] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e61]
        - generic [ref=e62]:
          - generic [ref=e63]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e64] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e66]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e67]:
            - generic [ref=e68]: $15.99
            - button "Add to cart" [ref=e69] [cursor=pointer]
      - generic [ref=e70]:
        - link [ref=e72] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e73]
        - generic [ref=e74]:
          - generic [ref=e75]:
            - link "Sauce Labs Fleece Jacket" [ref=e76] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e78]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e79]:
            - generic [ref=e80]: $49.99
            - button "Add to cart" [ref=e81] [cursor=pointer]
      - generic [ref=e82]:
        - link [ref=e84] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e85]
        - generic [ref=e86]:
          - generic [ref=e87]:
            - link "Sauce Labs Onesie" [ref=e88] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e90]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e91]:
            - generic [ref=e92]: $7.99
            - button "Add to cart" [ref=e93] [cursor=pointer]
      - generic [ref=e94]:
        - link [ref=e96] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e97]
        - generic [ref=e98]:
          - generic [ref=e99]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e100] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e102]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e103]:
            - generic [ref=e104]: $15.99
            - button "Add to cart" [ref=e105] [cursor=pointer]
  - contentinfo [ref=e106]:
    - list [ref=e107]:
      - listitem [ref=e108]:
        - link "Twitter" [ref=e109] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e110]:
        - link "Facebook" [ref=e111] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e112]:
        - link "LinkedIn" [ref=e113] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e114]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  12  |  *   mengandalkan Auto-waiting Playwright bawaan pada fill()/click().
  13  |  * - Locator diisolasi di dalam Page Object Model (pages/LoginPage.js, InventoryPage.js).
  14  |  */
  15  | 
  16  | const users = {
  17  |   standard: { username: "standard_user", password: "secret_sauce" },
  18  |   lockedOut: { username: "locked_out_user", password: "secret_sauce" },
  19  | };
  20  | 
  21  | test.describe("System Testing - Authentication (Login)", () => {
  22  |   let loginPage;
  23  | 
  24  |   test.beforeEach(async ({ page }) => {
  25  |     loginPage = new LoginPage(page);
  26  |     await loginPage.goto();
  27  |   });
  28  | 
  29  |   test("TE2E-001 - Landing page menampilkan seluruh elemen login", async ({ page }) => {
  30  |     // Visibility Assertion
  31  |     await expect(loginPage.logo).toBeVisible();
  32  |     await expect(loginPage.usernameInput).toBeVisible();
  33  |     await expect(loginPage.passwordInput).toBeVisible();
  34  |     await expect(loginPage.loginButton).toBeVisible();
  35  | 
  36  |     // State Assertion: tombol login harus enabled sejak awal
  37  |     await expect(loginPage.loginButton).toBeEnabled();
  38  |   });
  39  | 
  40  |   test("TE2E-002 - Login berhasil dengan kredensial valid", async ({ page }) => {
  41  |     await loginPage.login(users.standard.username, users.standard.password);
  42  | 
  43  |     // Equality Assertion: URL harus mengandung /inventory.html (dashboard)
  44  |     await expect(page).toHaveURL(/\/inventory\.html/);
  45  | 
  46  |     const inventoryPage = new InventoryPage(page);
  47  |     await expect(inventoryPage.inventoryList).toBeVisible();
  48  |   });
  49  | 
  50  |   test("TE2E-003 - Login dengan password salah menampilkan error", async ({ page }) => {
  51  |     await loginPage.login(users.standard.username, "wrong_password");
  52  | 
  53  |     // Visibility + Equality Assertion
  54  |     await expect(loginPage.errorMessage).toBeVisible();
  55  |     await expect(loginPage.errorMessage).toHaveText(
  56  |       /Username and password do not match/
  57  |     );
  58  | 
  59  |     await expect(page).not.toHaveURL(/\/inventory\.html/);
  60  |   });
  61  | 
  62  |   test("TE2E-004 - Login dengan akun locked-out ditolak (contoh XPath - opsional)", async ({
  63  |     page,
  64  |   }) => {
  65  |     // Contoh penggunaan XPath langsung, sebagai alternatif dari CSS Selector
  66  |     await page.locator("//input[@id='user-name']").fill(users.lockedOut.username);
  67  |     await page.locator("//input[@id='password']").fill(users.lockedOut.password);
  68  |     await page.locator("//input[@id='login-button']").click();
  69  | 
  70  |     await expect(loginPage.errorMessage).toBeVisible();
  71  |     await expect(loginPage.errorMessage).toContainText(
  72  |       "Sorry, this user has been locked out"
  73  |     );
  74  |   });
  75  | 
  76  |   test("TE2E-005 - Validasi field username & password kosong", async ({ page }) => {
  77  |     await loginPage.loginButton.click();
  78  | 
  79  |     // Equality Assertion: pesan error spesifik
  80  |     await expect(loginPage.errorMessage).toHaveText(
  81  |       "Epic sadface: Username is required"
  82  |     );
  83  |   });
  84  | 
  85  |   test("TE2E-006 - Password field masking (State Assertion)", async ({ page }) => {
  86  |     await loginPage.passwordInput.fill("secret_sauce");
  87  | 
  88  |     // State Assertion: tipe input harus 'password' (karakter di-mask)
  89  |     await expect(loginPage.passwordInput).toHaveAttribute("type", "password");
  90  |     await expect(loginPage.loginButton).toBeEnabled();
  91  |   });
  92  | });
  93  | 
  94  | test.describe("System Testing - Dashboard Product Listing & Sorting", () => {
  95  |   let loginPage;
  96  |   let inventoryPage;
  97  | 
  98  |   test.beforeEach(async ({ page }) => {
  99  |     loginPage = new LoginPage(page);
  100 |     inventoryPage = new InventoryPage(page);
  101 | 
  102 |     await loginPage.goto();
  103 |     await loginPage.login(users.standard.username, users.standard.password);
  104 |     await expect(page).toHaveURL(/\/inventory\.html/);
  105 |   });
  106 | 
  107 |   test("TE2E-007 - Product listing menampilkan 6 produk lengkap", async ({ page }) => {
  108 |     // State Assertion: jumlah produk harus 6
  109 |     await expect(inventoryPage.inventoryItems).toHaveCount(6);
  110 | 
  111 |     const firstItem = inventoryPage.inventoryItems.first();
> 112 |     await expect(firstItem.locator(".inventory_item_img")).toBeVisible();
      |                                                            ^ Error: expect(locator).toBeVisible() failed
  113 |     await expect(firstItem.locator(".inventory_item_name")).toBeVisible();
  114 |     await expect(firstItem.locator("button")).toHaveText("Add to cart");
  115 |   });
  116 | 
  117 |   test("TE2E-008 - Sort produk berdasarkan harga (low to high)", async ({ page }) => {
  118 |     await inventoryPage.sortBy("lohi");
  119 | 
  120 |     // Equality Assertion pada value dropdown
  121 |     await expect(inventoryPage.sortDropdown).toHaveValue("lohi");
  122 | 
  123 |     const prices = await inventoryPage.getAllPrices();
  124 |     const sorted = [...prices].sort((a, b) => a - b);
  125 |     expect(prices).toEqual(sorted);
  126 |   });
  127 | 
  128 |   test("TE2E-009 - Sort produk berdasarkan nama (Z to A)", async ({ page }) => {
  129 |     await inventoryPage.sortBy("za");
  130 | 
  131 |     // Equality Assertion: item pertama setelah sort harus sesuai
  132 |     await expect(inventoryPage.inventoryItemNames.first()).toHaveText(
  133 |       "Test.allTheThings() T-Shirt (Red)"
  134 |     );
  135 |   });
  136 | });
  137 | 
```