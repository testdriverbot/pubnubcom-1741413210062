import path from 'path';
import { chromium } from 'playwright';

const extensionPath = path.resolve(__dirname, '../node_modules/dashcam-chrome/build');
const userDataDir = path.resolve(__dirname, 'chrome-user-data'); // Persistent profile

console.log(`✅ Extension path: ${extensionPath}`);
console.log(`✅ User data directory: ${userDataDir}`);

async function init() {
  // Launch Chromium with the extension
  let context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    args: [
      `--disable-extensions-except=${extensionPath}`,
      `--load-extension=${extensionPath}`,
    ],
  });

  return context;
}

export default init;
