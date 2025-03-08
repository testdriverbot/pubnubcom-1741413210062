import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.pubnub.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.goto('https://admin.pubnub.com/login');
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password*' }).fill('test@example.com');
  await page.getByRole('button', { name: 'Log in' }).click();
});