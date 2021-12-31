const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/loginsleo.page');
const HomePage = require('../pages/homesleo.page');


Given(/^I am on the (\w+) page$/, () => {
 LoginPage.input(username, password)  
});

When(/^I login with (\w+) and (.+)$/, () => {
   LoginPage.click_btnSubmit()
});

Then(/^I should see home page(.*)$/, () => {
    expect(HomePage.flashAlert).toBeExisting();
    
});

