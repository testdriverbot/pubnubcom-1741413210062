import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.pubnub.com/');
  await page.getByText('Products').click();
  await page.getByRole('link', { name: 'Overview' }).first().click();
  await page.goto('https://www.pubnub.com/products/pubnub-platform/#overview');
  await page.getByText('Solutions').click();
});