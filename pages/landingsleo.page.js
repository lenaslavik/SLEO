



class LandingPage  {
    
    get signin_buton() {
        return $('//li [@class="link authorization-link"]/a [@href="https://stage3.sacret-life.com/customer/account/login/"]');
    }

   click_signin_button () {
       this.signin_buton.click();
    }

}


module.exports = new LandingPage();
