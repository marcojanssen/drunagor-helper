import { type Page, expect } from "@playwright/test";

export class DropdownComponent {
  readonly page: Page;
  readonly testId: string;

  constructor(page: Page, testId: string) {
    this.page = page;
    this.testId = testId;
  }

  async selectOption(name: string) {
    await this.page.getByTestId(this.testId).click();
    await this.page.getByRole("option", { name: name }).click();
  }

  async reset() {
    await this.page.getByTestId(this.testId).locator("svg.p-dropdown-clear-icon").click();
  }

  async verifyOption(name: string, effect: string | null = null) {
    await expect(this.page.getByTestId(this.testId).getByRole("combobox")).toContainText(name);
    if (effect !== null) {
      await expect(this.page.getByTestId(this.testId)).toContainText(effect);
    }
  }
}
