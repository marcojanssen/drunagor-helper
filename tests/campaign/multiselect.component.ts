import { type Page, expect } from "@playwright/test";

export class MultiselectComponent {
  readonly page: Page;
  readonly testId: string;

  constructor(page: Page, testId: string) {
    this.page = page;
    this.testId = testId;
  }

  async selectOption(name: string) {
    await this.page.getByTestId(this.testId).click();
    await this.page.getByLabel(name).getByRole("checkbox").check();
  }

  async verifyOption(name: string, effect: string | null = null) {
    await this.page.getByTestId(this.testId).click();
    await expect(this.page.getByLabel(name).getByRole("checkbox")).toBeChecked();
    await this.page.getByTestId(this.testId).click();
    await expect(this.page.getByTestId(this.testId)).toContainText(name);
    if (effect !== null) {
      await expect(this.page.getByTestId(this.testId)).toContainText(effect);
    }
  }
}
