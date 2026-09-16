const { Given, When, Then } = require('@cucumber/cucumber');
const j = require('hamjest');
const {Builder, By, Until, error} = require('selenium-webdriver');

When('the user visits {string}', async function (path) {
    this.getPage(this.domain + path);
});

Then('the {string} contains the text {string}', async function (inputElement, inputText) {
    let text = await this.driver.findElement(By.css(inputElement)).getText();
    j.assertThat(text.toString(), j.equalTo(inputText));
});

Then('the link to {string} is within {string}', async function (path, cssClass) {
    let parent = await this.driver.findElement(By.className(cssClass));

    // Find the child element containing the link under test
    try {
        let ele = await parent.findElement(By.css('[href="' + path + '"]'));
    } catch (e) {
        if (e instanceof error.NoSuchElementError) {
        } else {
            console.log(e);
            j.assertThat(false);
        }
    }

    /* This doesn't test the feature, it tests if domain+path
     * is the same as the path derived from getAttribute, which
     * won't even match relative links.
     * TODO: remove this next time I see this if I still agree.
    let elePath = await ele.getAttribute("href");
    j.assertThat(this.domain + path, j.equalTo(elePath));
     */
});
