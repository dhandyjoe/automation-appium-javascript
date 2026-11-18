const AppScreen = require("../screens/app.screen");

describe("Smoke: app launch", () => {
   it("membuka app di HP", async () => {
      await AppScreen.waitForLaunched();
   });
});
