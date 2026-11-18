const AppScreen = require("../screens/app.screen");
const LoginScreen = require("../screens/login.screen");
const RegisterScreen = require("../screens/register.screen");
const MainScreen = require("../screens/main-menu.screen");
const users = require("../data/users.json");

describe("Register", () => {
   beforeEach(async () => {
      await AppScreen.reset();
      await LoginScreen.btnMenuRegister.click();
   });

   it("create user with valid data", async () => {
      await RegisterScreen.registerUser(users.user1.username, users.user1.email, users.user1.password);

      await LoginScreen.login(users.user1.email, users.user1.password);
      await expect(MainScreen.greetingName).toHaveText(`Halo, ${users.user1.username}`);
   });
});
