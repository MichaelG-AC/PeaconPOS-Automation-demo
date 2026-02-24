import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page_objects/LoginPage";
import { HomePage } from "../../page_objects/HomePage";

test.describe("Login Test", () => {
  test("Verify you cannot login with empty fields", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await homePage.gotoLoginPage();
    await loginPage.login("", "");

    const dataFields = ["Sign in name", "password"];

    for (let field of dataFields) {
      await expect(page.getByText(`Please enter your ${field}`)).toBeVisible();
    }
  });
});
