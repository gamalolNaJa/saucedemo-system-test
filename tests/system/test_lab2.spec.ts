import { test, expect } from '@playwright/test';


test(' Sort Product', async ({ page }) => {
    await page.goto('/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    const add2 = page.locator('.btn_inventory')
    await add2.nth(0).click();
    await add2.nth(1).click();


    await page.locator('.shopping_cart_link').click();

    const remove1 = page.locator('.cart_button');
    await remove1.nth(0).click();

    await page.locator('#checkout').click();

    const check1 = page.locator('.shopping_cart_badge')
    await expect(check1).toHaveText('1');




});