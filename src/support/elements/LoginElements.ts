import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CadastroElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getLinkSignUp(buttonName: string): Locator {
    return this.page.getByRole('link', { name: buttonName, exact: true });
  }

  getCampoUsername(): Locator {
    return this.page.locator('input[id="sign-username"]');
  }

  getCampoPassword(): Locator {
    return this.page.locator('input[id="sign-password"]');
  }

  getBotaoSignUp(buttonName: string): Locator {
    return this.page.getByRole('button', { name: buttonName, exact: true });
  }
}
