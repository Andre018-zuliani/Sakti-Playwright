# Tugas 8 - Praktik Automation Testing (Playwright)
## Modul SWQA - SAKTI

Implementasi Web Automation Testing menggunakan **Playwright**, dengan
arsitektur **Page Object Model (POM)**, diadaptasi dari laporan Manual
Testing (End-to-End Testing - Execution Data) pada target
`https://www.saucedemo.com`.

## 📂 Struktur Project

```
sakti-playwright/
├── pages/
│   ├── LoginPage.js        # POM - halaman login
│   ├── InventoryPage.js    # POM - halaman dashboard/produk
│   └── CheckoutPage.js     # POM - halaman cart & checkout
├── tests/
│   ├── system/
│   │   └── login.spec.js   # System Testing (9 test case)
│   └── e2e/
│       └── checkout.spec.js # E2E Testing (4 test case)
├── playwright.config.js
├── package.json
└── README.md
```

## ⚙️ Instalasi

```bash
npm install
npx playwright install
```

Perintah kedua akan mendownload browser (Chromium, Firefox) yang dipakai Playwright.

## ▶️ Menjalankan Test

Jalankan seluruh test (headless):
```bash
npx playwright test
```

Jalankan hanya System Testing:
```bash
npx playwright test tests/system
```

Jalankan hanya E2E Testing:
```bash
npx playwright test tests/e2e
```

Mode headed (browser kelihatan):
```bash
npx playwright test --headed
```

Mode UI interaktif (debug per-step):
```bash
npx playwright test --ui
```

## 📊 Melihat Laporan HTML

Setelah eksekusi selesai, laporan otomatis tersimpan di folder `playwright-report/`.
Buka dengan:

```bash
npx playwright show-report
```

Laporan ini menampilkan ringkasan pass/fail, durasi, trace, dan screenshot
otomatis untuk test yang gagal.

## ✅ Pemetaan Test Case ke Laporan Manual Testing

**System Testing (`tests/system/login.spec.js`)** - 9 test case:
| Kode | Test ID Manual | Skenario |
|------|-----------------|----------|
| TE2E-001 | TE2E-001 | Landing page menampilkan elemen login |
| TE2E-002 | TE2E-002 | Login dengan kredensial valid |
| TE2E-003 | TE2E-003 | Login dengan password salah |
| TE2E-004 | TE2E-004 | Login dengan akun locked-out (contoh XPath) |
| TE2E-005 | TE2E-005 | Field username & password kosong |
| TE2E-006 | TE2E-006 | Password field masking (state assertion) |
| TE2E-007 | TE2E-007 | Product listing tampil setelah login |
| TE2E-008 | TE2E-008 | Sort produk harga low to high |
| TE2E-009 | TE2E-009 | Sort produk nama Z to A |

**E2E Testing (`tests/e2e/checkout.spec.js`)** - 4 test case:
| Kode | Test ID Manual | Skenario |
|------|-----------------|----------|
| E2E-01 | TE2E-011 | Login → tambah item ke cart |
| E2E-02 | TE2E-013 | Checkout dengan postal code kosong |
| E2E-03 | TE2E-014 | Login sampai order selesai |
| E2E-04 | TE2E-015 | Logout via burger menu |

## 🔑 Prinsip yang Diterapkan

- **Locator**: CSS Selector (`#user-name`), `[data-test="..."]`, dan Built-in
  Locator Playwright (`getByText`).
- **XPath (opsional)**: didemonstrasikan di TE2E-004 via `page.locator("//...")`.
- **Wait Strategy**: seluruh interaksi (`fill()`, `click()`) memanfaatkan
  *Auto-waiting* Playwright; **tidak ada** `page.waitForTimeout()` statis.
- **Page Object Model**: seluruh locator & action diisolasi ke dalam class
  di folder `pages/` (`LoginPage`, `InventoryPage`, `CheckoutPage`); file
  spec hanya memanggil method, tidak menulis selector langsung (kecuali
  contoh XPath opsional).
- **Assertion**:
  - *Equality*: `toHaveText(...)`, `toHaveValue(...)`, `toHaveURL(...)`
  - *Visibility*: `toBeVisible()`
  - *State*: `toBeEnabled()`, `toHaveAttribute(...)`, `toHaveCount(...)`
