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
    let parent = await this.driver.findElement(By.className(cssClass));
    let ele = await parent.findElement(By.css('[href="' + path + '"]'));
    let elePath = await ele.getAttribute("href");
    console.log(elePath);
    j.assertThat(this.domain + path, j.equalTo(elePath));
});

  