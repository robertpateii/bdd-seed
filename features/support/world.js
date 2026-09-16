const {setWorldConstructor, World } = require('@cucumber/cucumber');
const {Builder, By, Until, Browser} = require('selenium-webdriver');
const Chrome = require('selenium-webdriver/chrome');
const coptions = new Chrome.Options();

class CustomWorld extends World {
    // exclude enable-logging (turns off logging) to avoid non-test-related output from Chrome
    driver = new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(coptions.excludeSwitches('enable-logging'))
        .build();
    
    domain = "https://www.selenium.dev"

    constructor(options) {
        super(options)
    }
    
    // Returns a promise that resolves to the element
    async waitForElement(locator) {
        const condition = Until.elementLocated(locator)
        return await this.driver.wait(condition)
    }

    async getPage(page) {
        return await this.driver.get(page);
    }
}
setWorldConstructor(CustomWorld);
