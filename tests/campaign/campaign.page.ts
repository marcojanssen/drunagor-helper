import { type Page } from "@playwright/test";

export class CampaignPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("./campaign");
  }

  async startNewCampaign(campaign: "core" | "awakenings" | "apocalypse") {
    await this.page.getByLabel("New campaign").click();
    await this.page.locator("#campaign-" + campaign).click();
  }

  async addHero(name: string) {
    await this.page.getByRole("button", { name: "Add hero" }).click();
    await this.page.getByText(name).click();
  }
}
