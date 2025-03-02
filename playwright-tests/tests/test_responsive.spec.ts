import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Mobile', width: 390, height: 844 },     // iPhone 12
  { name: 'Tablet', width: 768, height: 1024 },    // iPad
  { name: 'Desktop', width: 1280, height: 720 },   // Default Desktop
];

viewports.forEach(viewport => {
  test(`Portfolio should be responsive on ${viewport.name}`, async ({ page }) => {
  
    // Set viewport size
    await page.setViewportSize({ width: viewport.width, height: viewport.height });

    // Go to portfolio
    await page.goto('https://larsenvini.pages.dev');

    // Verify the main heading `<h1>` is visible
    await expect(page.locator('h1.text-3xl.font-semibold.text-gray-900')).toBeVisible();

    // Check if the `<h3>` subtitle is visible
    await expect(page.locator('h3.text-4xl.text-black.mb-6')).toBeVisible();

    // Special checks for mobile/tablet layouts
    if (viewport.name === 'Mobile' || viewport.name === 'Tablet') {
      // Example: Check if a 'menu' button exists (assumes you have a mobile menu)
      const menuButton = page.locator('button[aria-label="menu"]'); // Update selector if needed
      if (await menuButton.count() > 0) {
        await expect(menuButton).toBeVisible();
      }
    }
    
    console.log(`✅ Passed responsive test for ${viewport.name}`);
  });
});