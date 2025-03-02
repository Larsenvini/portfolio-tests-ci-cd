import { test, expect } from '@playwright/test';

test('Portfolio Homepage Should Load and Display Correct Heading', async ({ page }) => {
    await page.goto('https://larsenvini.pages.dev');  // Open portfolio URL

    // Check if the `<h1>` contains "Vinicius Larsen Dev"
    const heading1 = page.locator('h1.text-3xl.font-semibold.text-gray-900');
    await expect(heading1).toHaveText('Vinicius Larsen');

    // Check if the `<h3>` contains "Software Engineer"
    const heading3 = page.locator('h3.text-4xl.text-black.mb-6');
    await expect(heading3).toHaveText('QA Automation Engineer');

    // Ensure the entire body is visible (confirms page loaded)
    await expect(page.locator('body')).toBeVisible();
});