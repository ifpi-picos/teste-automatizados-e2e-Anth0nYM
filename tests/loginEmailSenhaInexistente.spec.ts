import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://refeitorio.picos.ifpi.edu.br/');
  await page.getByText('☰').click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Usuário').click();
  await page.getByPlaceholder('Usuário').fill('formatedexample@sample.com');
  await page.getByPlaceholder('Senha').click();
  await page.getByPlaceholder('Senha').fill('senha123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Por favor, entre com um Matricula e senha corretos. Note que ambos os campos dif').click();
});