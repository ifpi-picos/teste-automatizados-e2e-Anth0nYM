import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://refeitorio.picos.ifpi.edu.br/');
  await page.locator('#header').click();
  await page.getByText('× Sobre Cardápio Cadastre-se Login ☰').click();
  await page.getByText('☰').click();
  await page.getByRole('link', { name: 'Cadastre-se' }).click();
  await page.locator('#id_username').click();
  await page.locator('#id_username').fill('example@gmail.com');
  await page.locator('#id_name').click();
  await page.locator('#id_name').fill('testName');
  await page.locator('#id_email').click();
  await page.locator('#id_username').click({
    clickCount: 3
  });
  await page.locator('#id_username').press('Control+x');
  await page.locator('#id_email').click();
  await page.locator('#id_email').fill('example@gmail.com');
  await page.locator('#id_username').click();
  await page.locator('#id_username').fill('2021118tads0050');
  await page.locator('#id_curso').selectOption('3');
  await page.locator('#id_password').click();
  await page.locator('#id_password').fill('examplesenha123');
  await page.getByRole('button', { name: ' Salvar' }).click();
  await page.locator('form div').filter({ hasText: 'Senha' }).click();
});