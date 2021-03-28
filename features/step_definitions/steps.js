const { Given, When, Then } = require('@cucumber/cucumber');
const j = require('hamjest');
const {Builder, By, Until} = require('selenium-webdriver');

// https://www.chaijs.com/plugins/chai-webdriver/
// https://www.selenium.dev/documentation/en/webdriver/driver_requirements/

When('the user visits {string}', async function (path) {
    this.getPage(this.domain + path);
});

Then('the page loads with the title {string}', async function (title) {
    let text = await this.driver.findElement(By.css('h1')).getText();
    j.assertThat(text.toString(), j.equalTo(title));
});

Then('open the link to {string} within {string}', async function (path, cssClass) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

  