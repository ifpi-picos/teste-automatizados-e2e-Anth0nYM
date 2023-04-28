import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://refeitorio.picos.ifpi.edu.br/');
  await page.getByText('☰').click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Usuário').click();
  await page.getByPlaceholder('Usuário').fill('2021118tads0050');
  await page.getByPlaceholder('Senha').click();
  await page.getByPlaceholder('Senha').fill('anthonyfr12');
  await page.getByPlaceholder('Senha').press('Enter');
}); 