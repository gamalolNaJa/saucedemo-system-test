import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // 1. แก้ไข testDir ให้ตรงกับโฟลเดอร์จริงของคุณ (tests/system)
  testDir: './tests/system',

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  // 2. ตั้งค่า Reporter
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});