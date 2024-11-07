import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getLinkButton(buttonName: string): Locator {
    return this.page.getByRole('link', { name: buttonName, exact: true });
  }
}
