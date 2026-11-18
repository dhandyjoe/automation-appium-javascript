const AppScreen = require("../screens/app.screen");
const LoginScreen = require("../screens/login.screen");
const MainScreen = require("../screens/main-menu.screen");
const users = require("../data/users.json");

describe("Login", () => {
   beforeEach(async () => {
      await AppScreen.reset();
   });

   it("valid credentials", async () => {
      await LoginScreen.login(users.standard.email, users.standard.password);
      await expect(MainScreen.greetingName).toHaveText(`Halo, ${users.standard.username}`);
   });

   it("invalid credentials", async () => {
      await LoginScreen.login(users.standard.email, "wrong-password");
      await expect(LoginScreen.txtLoginError).toHaveText("Username atau password salah");
   });
});
