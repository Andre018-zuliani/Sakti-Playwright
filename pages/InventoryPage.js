// pages/InventoryPage.js

/**
 * Page Object Model untuk halaman Inventory/Dashboard (daftar produk).
 */
class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.pageTitle = page.locator(".title");
    this.inventoryList = page.locator(".inventory_list");
    this.inventoryItems = page.locator(".inventory_item");
    this.inventoryItemNames = page.locator(".inventory_item_name");
    this.inventoryItemPrices = page.locator(".inventory_item_price");
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartLink = page.locator(".shopping_cart_link");

    // Built-in locator berbasis role - contoh alternatif locator
    this.burgerMenuButton = page.locator("#react-burger-menu-btn");
    this.logoutLink = page.locator("#logout_sidebar_link");
  }

  addToCartByProduct(productSlug) {
    return this.page.locator(`[data-test="add-to-cart-${productSlug}"]`);
  }

  removeFromCartByProduct(productSlug) {
    return this.page.locator(`[data-test="remove-${productSlug}"]`);
  }

  async sortBy(value) {
    await this.sortDropdown.selectOption(value);
  }

  async openCart() {
    await this.cartLink.click();
  }

  async logout() {
    await this.burgerMenuButton.click();
    await this.logoutLink.click();
  }

  async getAllPrices() {
    const texts = await this.inventoryItemPrices.allTextContents();
    return texts.map((t) => parseFloat(t.replace("$", "")));
  }
}

module.exports = { InventoryPage };
