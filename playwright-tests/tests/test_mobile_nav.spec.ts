import { test, expect } from '@playwright/test';

const mobileViewports = [
  { name: 'iPhone 12', width: 390, height: 844 },
  { name: 'Samsung Galaxy S22', width: 412, height: 915 },
  { name: 'Google Pixel 7', width: 412, height: 900 },
];

mobileViewports.forEach(viewport => {
  test.describe(`Navbar Navigation on ${viewport.name}`, () => {
    
    // Set viewport for each test case
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    test.beforeEach(async ({ page }) => {
      await page.goto('https://larsenvini.pages.dev'); // Open portfolio page
    });

    test('Clicking "About" should scroll to the About section', async ({ page }) => {
      await page.click('a[href="#about"]');
      await page.waitForTimeout(500);
      await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
    });

    test('Clicking "Skills" should scroll to the Skills section', async ({ page }) => {
      await page.click('a[href="#skills"]');
      await page.waitForTimeout(500);
      await expect(page.getByRole('heading', { name: 'Technologies', exact: true })).toBeVisible();
    });

    test('Clicking "Projects" should scroll to the Projects section', async ({ page }) => {
      await page.click('a[href="#projects"]');
      await page.waitForTimeout(500);
      await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
    });

    test('Clicking "Contact" should scroll to the Contact section', async ({ page }) => {
      await page.click('a[href="#contact"]');
      await page.waitForTimeout(500);
      await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
    });

  });
});