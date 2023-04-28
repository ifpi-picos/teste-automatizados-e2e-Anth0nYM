import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://refeitorio.picos.ifpi.edu.br/');
  await page.getByText('☰').click();
  await page.getByRole('link', { name: 'Cadastre-se' }).click();
  await page.locator('#id_username').click();
  await page.locator('#id_username').fill('dsnjavdjsavdnsacdshagfdadsa');
  await page.locator('#id_name').click();
  await page.locator('#id_name').fill('ze');
  await page.locator('#id_email').click();
  await page.locator('#id_email').fill('dsvahgfdhsgafdhasda');
  await page.locator('#id_curso').selectOption('3');
  await page.locator('form div').filter({ hasText: 'Senha' }).click();
  await page.locator('#id_password').click();
  await page.locator('#id_password').fill('dsadsabdnvsacda');
  await page.getByRole('button', { name: ' Salvar' }).click();
});