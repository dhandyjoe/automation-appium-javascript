const ID = require("./app.screen").idPrefix;

class LoginScreen {
   get inputUsername() {
      return $(`${ID}shop_input_username`);
   }
   get inputPassword() {
      return $(`${ID}shop_input_password`);
   }
   get btnLogin() {
      return $(`${ID}shop_btn_login`);
   }
   get txtLoginError() {
      return $(`${ID}shop_txt_login_error`);
   }
   get btnMenuRegister() {
      return $(`${ID}shop_btn_register_link`);
   }

   async login(username, password) {
      await this.inputUsername.setValue(username);
      await this.inputPassword.setValue(password);
      await this.btnLogin.click();
   }
}

module.exports = new LoginScreen();
