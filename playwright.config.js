import { defineConfig } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testMatch: '*.spec.js',
  reporter: 'list',
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: false, // Runs Playwright in UI mode
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
      }
    }
  ]
});
