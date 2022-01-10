// const { Given, When, Then } = require('@wdio/cucumber-framework');
const { Given, When, Then } = require('@cucumber/cucumber')

const LandingPage = require('../pages/landingsleo.page');
const LoginPage = require('../pages/loginsleo.page');


Given(/^I am on the landing page$/, () => {
  browser.url('')
});

When(/^I click on sign in button$/,()  => {

});

Then(/^I should see log in page$/, () => {
    
});
