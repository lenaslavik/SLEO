



class HomePage  {
    
    get SLConferences_image() {
        return $('//img[@class="wk_image"]');
    }

   click_SLConferences_image () {
       this.click_SLConferences_image.click();
    }

}


module.exports = new HomePage();
