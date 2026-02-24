export class LoginPage {
  constructor(page) {
    this.page = page;

    this.signInNameField = this.page.getByRole("textbox", {
      name: "Sign in name",
    });
    this.passwordField = this.page.getByRole("textbox", { name: "Password" });

    this.signInButton = this.page.getByRole("button", { name: "Sign in" });
  }

  async login(signinName = "", password = "") {
    await this.signInNameField.fill(signinName);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }
}
