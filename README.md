This is a kick-start / seed project that can be dropped into a website early or late in its life to kick-start behavior driven development (with the Cucumber / Gherkin framework) and UI testing automation (with Selenium). It includes some initial configuration along with a few example test cases.

This was initially created as part of the Master's research project available online here [Behavior driven development kick-start / by Robert Wayne Pate II](https://search.lib.utexas.edu/permalink/01UTAU_INST/q482hd/alma991058359080306011).

Setup
1. git clone
2. npm-install
3. Get the chrome browser driver that matches your version and put it on your path, links are on https://www.npmjs.com/package/selenium-webdriver

Running Tests
1. Run this command in the root folder: ```./node_modules/.bin/cucumber-js```
2. Customize the examples by changing the domain variable in features/support/world.js and the steps' code in features/step_definitions/steps.js.

Last update: 2021
