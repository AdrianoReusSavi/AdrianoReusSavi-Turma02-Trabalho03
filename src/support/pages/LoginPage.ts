import { Page } from '@playwright/test';
import { fa, faker } from '@faker-js/faker';
import CadastroElements from '../elements/LoginElements';
import BasePage from './BasePage';

export default class CadastroPage extends BasePage {
  readonly cadastroElements: CadastroElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.cadastroElements = new CadastroElements(page);
  }

  async signInUser(): Promise<void> {
    await this.cadastroElements.getLinkSignUp('Sign up').click();
    await this.cadastroElements.getCampoUsername().fill(faker.person.firstName());
    await this.cadastroElements.getCampoPassword().fill(faker.internet.password());
    await this.cadastroElements.getBotaoSignUp('Sign up').click();
  }
}