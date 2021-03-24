const { setWorldConstructor, World } = require('@cucumber/cucumber');
const {Builder, By, Until} = require('selenium-webdriver');


class CustomWorld extends World {
    driver = new Builder()
        .forBrowser('chrome')
        .build()
    
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