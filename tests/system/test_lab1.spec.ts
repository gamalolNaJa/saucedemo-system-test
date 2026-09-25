import {test,expect} from '@playwright/test';


test(' Sort Product', async ({ page }) => {
    await page.goto('/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    
    await expect(page).toHaveURL(/inventory\.html/);
    
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    const dropdown = page.locator('[data-test="product-sort-container"]');

    await expect(dropdown).toHaveValue('lohi');
    











});
