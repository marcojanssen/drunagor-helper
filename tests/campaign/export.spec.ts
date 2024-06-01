import { test, expect } from "@playwright/test";
import { CampaignPage } from "./campaign.page";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

test("export campaign", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");

  await page.getByLabel("Party name").click();
  await page.getByLabel("Party name").fill("The Party");

  await campaignPage.addHero("Arkhanos");

  await page.getByLabel("Export campaign").click();
  await expect(page.locator("#campaign-token")).toHaveValue(
    "eyJjYW1wYWlnbkRhdGEiOnsiY2FtcGFpZ25JZCI6IiIsImNhbXBhaWduIjoiY29yZSIsIm5hbWUiOiJUaGUgUGFydHkiLCJzdGF0dXNJZHMiOltdLCJvdXRjb21lSWRzIjpbXSwiZm9sbG93ZXJJZHMiOltdLCJ1bmZvbGRpbmdJZHMiOltdLCJiYWNrZ3JvdW5kQW5kVHJhaXRJZHMiOltdLCJsZWdhY3lUcmFpbCI6eyJwZXJzZXZlcmFuY2UiOjAsInRyYWdlZHkiOjAsImRvb20iOjAsImhlcm9pc20iOjB9LCJpc1NlcXVlbnRpYWxBZHZlbnR1cmUiOmZhbHNlLCJzZXF1ZW50aWFsQWR2ZW50dXJlUnVuZXMiOjB9LCJoZXJvZXMiOlt7Imhlcm9JZCI6ImFya2hhbm9zIiwiY2FtcGFpZ25JZCI6IiIsImVxdWlwbWVudCI6eyJ3ZWFwb25JZCI6IiIsIm9mZkhhbmRJZCI6IiIsImFybW9ySWQiOiIiLCJ0cmlua2V0SWQiOiIiLCJiYWdPbmVJZCI6IiIsImJhZ1R3b0lkIjoiIn0sInN0YXNoZWRDYXJkSWRzIjpbXSwic2tpbGxJZHMiOltdLCJkdW5nZW9uUm9sZVNraWxsQ3ViZUNvbG9ycyI6eyJyYW5rT25lIjpudWxsLCJyYW5rVHdvIjpudWxsfSwic2VxdWVudGlhbEFkdmVudHVyZVN0YXRlIjpudWxsLCJhdXJhSWQiOm51bGwsIm91dGNvbWVJZHMiOltdLCJzdGF0dXNJZHMiOltdfV19"
  );
});
