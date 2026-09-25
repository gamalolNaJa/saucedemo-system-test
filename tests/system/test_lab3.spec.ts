import { test, expect } from '@playwright/test';


test(' Sort Product', async ({ page }) => {
    await page.goto('/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    const add2 = page.locator('.btn_inventory')
    await add2.nth(0).click();

    await page.locator('.shopping_cart_link').click();
    await page.locator('#checkout').click();

    await page.locator('#first-name').fill('tan');
    await page.locator('#last-name').fill('naja');

    await page.locator('#continue').click();
    
    await expect(page.locator('[data-test="error"]')).toHaveText('Error: Postal Code is required');





});