import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://refeitorio.picos.ifpi.edu.br/');
  await page.getByText('☰').click();
  await page.goto('http://refeitorio.picos.ifpi.edu.br/accounts/login/');
  await page.getByPlaceholder('Usuário').click();
  await page.getByPlaceholder('Usuário').fill('http://refeitorio.picos.ifpi.edu.br/');
  await page.getByPlaceholder('Usuário').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Usuário').fill('jdsghadjsghadjgha');
  await page.getByPlaceholder('Usuário').press('Enter');
  await page.getByPlaceholder('Senha').fill('dew');
  await page.getByPlaceholder('Senha').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Senha').click();
  await page.getByPlaceholder('Senha').dblclick();
  await page.getByPlaceholder('Senha').fill('8473847223');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Por favor, entre com um Matricula e senha corretos. Note que ambos os campos dif').click();
  await page.getByText('Por favor, entre com um Matricula e senha corretos. Note que ambos os campos dif').click();
});