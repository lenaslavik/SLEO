const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/loginsleo.page');
const SecurePage = require('../pages/secure.page');


Given(/^I am on the (\w+) page$/, () => {
 LoginPage.input(username)  
});

When(/^I login with (\w+) and (.+)$/, () => {
   LoginPage.login(username, password)
});

Then(/^I should see home page(.*)$/, () => {
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

