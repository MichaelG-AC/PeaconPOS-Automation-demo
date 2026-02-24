import { expect, test } from "@playwright/test";
import { HomePage } from "../../page_objects/HomePage";

test.describe("Demo Tests", () => {
  test("Verify error messages when requesting customer demo with empty fields", async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    await homePage.gotoDemoSection();
    await homePage.fillInDemoRequest();

    const fieldInputs = [
      "First Name",
      "Last Name",
      "Phone",
      "Zip code",
      "Email",
      "Message",
    ];

    for (let dataField of fieldInputs) {
      await expect(page.getByText(`${dataField} is required`)).toBeVisible();
    }
  });
});
