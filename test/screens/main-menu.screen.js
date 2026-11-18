// Screen Object: semua locator & aksi layar disimpan di sini, spec cukup panggil method-nya
const ID = require("./app.screen").idPrefix;

class MainScreen {
   // Getter locator tetap 1 baris supaya mudah dibaca saat element banyak
   get greetingName() {
      return $(`${ID}shop_txt_greeting`);
   }
   get tabMenuAccount() {
      return $(`${ID}shop_tab_account`);
   }
}

module.exports = new MainScreen();
