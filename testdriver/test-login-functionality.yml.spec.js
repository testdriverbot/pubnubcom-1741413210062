import { test, expect } from '@playwright/test';
import context from './context';

test('test', async () => {
  
  let c = await context();
  const page = await c.newPage(); // ✅ Open a new page from the persistent context

  await page.goto('chrome://extensions');
  await page.getByRole('link', { name: 'Login' }).click();

  await page.waitForTimeout(10000);

  await page.goto('https://admin.pubnub.com/login');
  await page.getByRole('textbox', { name: 'Email*' }).fill('test@example.com');
  await page.getByRole('textbox', { name: 'Password*' }).fill('password123');
  await page.getByRole('button', { name: 'Log in' }).click();
});
