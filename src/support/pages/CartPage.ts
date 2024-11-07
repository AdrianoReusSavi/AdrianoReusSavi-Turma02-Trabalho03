import { Page } from '@playwright/test';
import HomeElements from '../elements/CartElements';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElements = new HomeElements(page);
  }

  async addProductToCartByName(): Promise<void> {
    await this.homeElements.getLinkButton('Samsung galaxy s6').click();
    await this.homeElements.getLinkButton('Add to cart').click();
    await this.homeElements.getLinkButton('Cart').click();
    await this.homeElements.getLinkButton('Delete').click();
  }
}
