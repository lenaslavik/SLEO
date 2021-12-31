

class LoginPage {

    get inputUsername() {
        return $('//input [@class="inputField"  ][@name="email"]');
    }

    get inputPassword() {
        return $('//input [@class="inputField"  ][@name="password"]');
    }

    get btnSubmit() {
        return $('//button[@id="submitButton"]');
    }


    input_Username () {
        this.inputUsername.setValue();
    }
    input_Password () {
        this.inputPassword.setValue();
    }
    click_btnSubmit () {
       this.btnSubmit.click();
    }

}

module.exports = new LoginPage();
