import { test, expect } from "@playwright/test";
import { CampaignPage } from "./campaign.page";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

test("import campaign", async ({ page }) => {
  await page.getByLabel("Import campaign").click();
  await page.locator("#campaign-token").click();
  await page
    .locator("#campaign-token")
    .fill(
      "eyJjYW1wYWlnbkRhdGEiOnsiY2FtcGFpZ25JZCI6IiIsImNhbXBhaWduIjoiY29yZSIsIm5hbWUiOiJUaGUgUGFydHkiLCJzdGF0dXNJZHMiOltdLCJvdXRjb21lSWRzIjpbXSwiZm9sbG93ZXJJZHMiOltdLCJ1bmZvbGRpbmdJZHMiOltdLCJiYWNrZ3JvdW5kQW5kVHJhaXRJZHMiOltdLCJsZWdhY3lUcmFpbCI6eyJwZXJzZXZlcmFuY2UiOjAsInRyYWdlZHkiOjAsImRvb20iOjAsImhlcm9pc20iOjB9LCJpc1NlcXVlbnRpYWxBZHZlbnR1cmUiOmZhbHNlLCJzZXF1ZW50aWFsQWR2ZW50dXJlUnVuZXMiOjB9LCJoZXJvZXMiOlt7Imhlcm9JZCI6ImFya2hhbm9zIiwiY2FtcGFpZ25JZCI6IiIsImVxdWlwbWVudCI6eyJ3ZWFwb25JZCI6IiIsIm9mZkhhbmRJZCI6IiIsImFybW9ySWQiOiIiLCJ0cmlua2V0SWQiOiIiLCJiYWdPbmVJZCI6IiIsImJhZ1R3b0lkIjoiIn0sInN0YXNoZWRDYXJkSWRzIjpbXSwic2tpbGxJZHMiOltdLCJkdW5nZW9uUm9sZVNraWxsQ3ViZUNvbG9ycyI6eyJyYW5rT25lIjpudWxsLCJyYW5rVHdvIjpudWxsfSwic2VxdWVudGlhbEFkdmVudHVyZVN0YXRlIjpudWxsLCJhdXJhSWQiOm51bGwsIm91dGNvbWVJZHMiOltdLCJzdGF0dXNJZHMiOltdfV19"
    );
  await page.getByLabel("Import", { exact: true }).click();

  await expect(page.getByText("Campaign imported")).toBeVisible();
  await expect(page.getByLabel("Party name")).toHaveValue("The Party");
  await expect(page.getByText("Arkhanos")).toBeVisible();
});
