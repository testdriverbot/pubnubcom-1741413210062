import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.pubnub.com/');
  await page.getByRole('button').filter({ hasText: 'CtrlK' }).click();
  await page.getByPlaceholder('Search or ask anything').click();
  await page.getByPlaceholder('Search or ask anything').fill('real-time interactive apps\n');
});