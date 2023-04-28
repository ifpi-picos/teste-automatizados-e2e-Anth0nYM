import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://refeitorio.picos.ifpi.edu.br/');
  await page.getByText('☰').click();
  await page.getByRole('link', { name: 'Cadastre-se' }).click();
  await page.locator('#id_username').click();
  await page.locator('#id_username').fill('2021118tads0050');
  await page.getByText('Matricula Nome E-mail Foto Curso --------- LICENCIATURA EM QUÍMICA TECNÓLOGO EM ').click();
  await page.getByText('Matricula Nome E-mail Foto Curso --------- LICENCIATURA EM QUÍMICA TECNÓLOGO EM ').click();
  await page.locator('form div').filter({ hasText: 'Foto' }).click();
  await page.locator('#id_name').click();
  await page.locator('#id_name').fill('Anthony Irlan');
  await page.locator('#id_email').click();
  await page.locator('#id_email').fill('marquesanthony62@gmail.com');
  await page.locator('#id_photo').click();
  await page.locator('#id_photo').setInputFiles('discord-profile.jpg');
  await page.locator('#id_curso').selectOption('3');
  await page.locator('#id_password').click();
  await page.locator('#id_password').fill('sdahdjsfhadjsada');
  await page.getByRole('button', { name: ' Salvar' }).click();
  await page.getByText('Usuário com este Matricula já existe.').click();
  await page.getByText('Usuário com este E-mail já existe.').click();
});