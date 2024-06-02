import { test, expect } from "@playwright/test";

test("can search for a keyword", async ({ page }) => {
  await page.goto("./keyword");

  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("Status");
  await page.getByRole("button", { name: "STATUS" }).click();
  await expect(page.getByLabel("STATUS").locator("div")).toHaveText(
    "Status is a reward related to a choice a character made during the story. Some Statuses can give special abilities as if they were some kind of blessing, while others are just related to the story. Regardless, a character can have any number of Statuses noted on their Campaign Log and all Statuses are erased during the next Camp Phase."
  );
});
