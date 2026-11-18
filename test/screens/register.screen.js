const ID = require("./app.screen").idPrefix;

class RegisterScreen {
   get inputUsername() {
      return $(`${ID}shop_input_reg_name`);
   }
   get inputEmail() {
      return $(`${ID}shop_input_reg_email`);
   }
   get inputPassword() {
      return $(`${ID}shop_input_reg_password`);
   }
   get inputConfirmPassword() {
      return $(`${ID}shop_input_reg_confirm`);
   }
   get checkboxTerms() {
      return $(`${ID}shop_chk_terms`);
   }
   get btnRegister() {
      return $(`${ID}shop_btn_register`);
   }

   async registerUser(username, email, password) {
      await this.inputUsername.setValue(username);
      await this.inputEmail.setValue(email);
      await this.inputPassword.setValue(password);
      await this.inputConfirmPassword.setValue(password);
      await this.checkboxTerms.click();
      await this.btnRegister.click();
   }
}

module.exports = new RegisterScreen();
