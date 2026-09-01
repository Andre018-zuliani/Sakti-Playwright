// @ts-check
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Reporter HTML - hasil disimpan di folder playwright-report/
  reporter: [
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["list"],
  ],

  use: {
    baseURL: "https://www.saucedemo.com",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 15000, // batas auto-waiting per aksi (fill/click), dinaikkan agar toleran saat server demo publik sedang lambat
  },

  // Saucedemo memakai atribut "data-test" (bukan default "data-testid"),
  // jadi getByTestId() dikonfigurasi supaya mengacu ke atribut tersebut.
  testIdAttribute: "data-test",

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],
});
