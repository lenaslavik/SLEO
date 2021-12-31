const { Given, When, Then } = require('@wdio/cucumber-framework');

const LandingPage = require('../pages/landingsleo.page');
const LoginPage = require('../pages/loginsleo.page');


Given(/^I am on the (\w+) page$/, () => {
 LandingPage.click_signin_button()  
});

When(/^I login with (\w+) and (.+)$/,()  => {
LoginPage.login(username, password)
});

Then(/^I should see log in page (.*)$/, () => {
    expect(LoginPage.flashAlert).toBeExisting();
    
});
