// Screen Object: semua locator & aksi layar disimpan di sini, spec cukup panggil method-nya
const ID = require("./app.screen").idPrefix;

class AccountScreen {
   // Getter locator tetap 1 baris supaya mudah dibaca saat element banyak
   get btnLogout() {
      return $(`${ID}shop_btn_logout`);
   }
   get btnConfirmLogout() {
      return $(`id=android:id/button1`);
   }

   async logout() {
      await this.btnLogout.click();
      await this.btnConfirmLogout.click();
   }
}

module.exports = new AccountScreen();
