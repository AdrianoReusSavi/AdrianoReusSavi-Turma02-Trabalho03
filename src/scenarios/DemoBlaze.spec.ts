import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/CartPage';
import LoginPage from '../support/pages/LoginPage';

test.describe('Demo Blaze', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePage: HomePage;
  let loginPage: LoginPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.demoBlaze')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    await page.goto(BASE_URL);
  });

  test('Validar carrinho com adição e remoção de produtos', async () => {
    await homePage.addProductToCartByName();
  });

  test('Validar cadastro de usuário', async () => {
    await loginPage.signInUser();
  });
});
