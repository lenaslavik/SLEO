const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pages/homesleo.page');
const SLCPage= require('../pages/SLC.page');


Given(/^I am on the home page(\w+) page$/, () => {
 HomePage.click_SLConferences_image()  
});

When(/^I click on SLConferences_image(\w+) and (.+)$/,()  => {
SLCPage.log();
});

Then(/^I should see all conferences (.*)$/, () => {
    expect(SLCPage.flashAlert).toBeExisting();
    
});
