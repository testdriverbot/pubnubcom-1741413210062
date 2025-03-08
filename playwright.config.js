import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  reporter: 'list',
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});