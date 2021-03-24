const { Given, When, Then } = require('@cucumber/cucumber');
const j = require('hamjest');
const {Builder, By, Until} = require('selenium-webdriver');


// https://www.chaijs.com/plugins/chai-webdriver/
// https://www.selenium.dev/documentation/en/webdriver/driver_requirements/


When('the user visits the index page', async function () {
    this.getPage('http://example.org/');
});

Then('the page loads with the title {string}', async function (string) {
    let text = await this.driver.findElement(By.css('h1')).getText();
    j.assertThat(text.toString(), j.equalTo(string));
});



  