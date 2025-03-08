import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.pubnub.com/');
  await page.getByRole('link', { name: 'Start Building' }).click();
  await page.goto('https://admin.pubnub.com/register');
});