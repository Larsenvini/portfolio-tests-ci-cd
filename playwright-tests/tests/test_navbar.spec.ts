import { test, expect } from '@playwright/test';

test.describe('Navbar Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://larsenvini.pages.dev'); // Open the portfolio page before each test
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