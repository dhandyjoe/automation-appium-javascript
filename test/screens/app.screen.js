// Screen Object: semua locator & aksi layar disimpan di sini, spec cukup panggil method-nya
const APP_ID = "com.automation.practice";

class AppScreen {
   idPrefix = `id=${APP_ID}:id/`;

   get btnSkipOnboarding() {
      return $(`${this.idPrefix}shop_btn_skip`);
   }

   // Hapus data app (sesi login ikut hilang) lalu buka ulang, supaya tiap test mulai dari layar Masuk
   async reset() {
      await driver.execute("mobile: clearApp", { appId: APP_ID });
      // clearApp juga mencabut izin runtime, grant ulang seperti autoGrantPermissions
      await driver.execute("mobile: changePermissions", { permissions: "all", appPackage: APP_ID, action: "grant" });
      await driver.activateApp(APP_ID);
      // Data kosong = onboarding muncul lagi
      await this.btnSkipOnboarding.click();
   }

   async waitForLaunched() {
      await driver.waitUntil(async () => (await driver.getCurrentPackage()) === APP_ID, {
         timeout: 20000,
         timeoutMsg: `App ${APP_ID} tidak terbuka dalam 20 detik`,
      });
   }
}

module.exports = new AppScreen();
