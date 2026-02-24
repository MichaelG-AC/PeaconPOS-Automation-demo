export class HomePage {
  constructor(page) {
    this.page = page;

    this.loginButton = this.page.getByRole("button", { name: "LOG IN" });
    this.mobileReportsButton = this.page.getByRole("link", {
      name: "Mobile Reports On The Web",
    });
    this.getDemoButton = this.page.getByRole("link", {
      name: "get a demo",
      exact: true,
    });

    this.firstNameField = this.page.getByRole("textbox", {
      name: "First name",
    });
    this.lastNameField = this.page.getByRole("textbox", { name: "Last name" });
    this.phoneField = this.page.getByRole("textbox", { name: "Phone" });
    this.zipCodeField = this.page.getByRole("textbox", { name: "Zip code" });
    this.emailField = this.page.getByRole("textbox", { name: "Email" });
    this.messageField = this.page.getByRole("textbox", { name: "Message" });
    this.submitButton = this.page.getByRole("button", { name: "Submit" });
  }

  async gotoLoginPage() {
    await this.page.goto("/");
    await this.loginButton.click();
    await this.mobileReportsButton.click();
  }

  async gotoDemoSection() {
    await this.page.goto("/");
    await this.getDemoButton.click();
  }

  async fillInDemoRequest(
    firstName = "",
    lastName = "",
    phone = "",
    zipCode = "",
    email = "",
    message = "",
  ) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.phoneField.fill(phone);
    await this.zipCodeField.fill(zipCode);
    await this.emailField.fill(email);
    await this.messageField.fill(message);
    await this.submitButton.click();
  }
}
