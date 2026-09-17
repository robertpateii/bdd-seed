This is a kick-start / seed project that can be dropped into a website early or late in its life to kick-start behavior driven development (with the Cucumber / Gherkin framework) and UI testing automation (with Selenium). It includes some initial configuration along with a few example test cases.

This was initially created as part of the Master's research project available online here [Behavior driven development kick-start / by Robert Wayne Pate II](https://search.lib.utexas.edu/permalink/01UTAU_INST/q482hd/alma991058359080306011).

Dependencies:
* node / npm

Run the example:
1. git clone https://github.com/robertpateii/bdd-seed
2. cd bdd-seed
3. npm install
4. npm test

Add to your project:
1. git clone or download the repository
2. copy the features folder from the repo to your project
3. run `npm install --save-dev @cucumber/cucumber selenium-webdriver` to install the test framework (cucumber) and the browser driver (selenium)
4. Add/edit the package.json so that the test script calls cucumber-js:
```
  "scripts": {
    "test": "cucumber-js"
  },
```
5. `npm test` to run the smoke test which will test and pass two scenarios against a selenium test page
6. Customize features/smoke_test.features to match your own site's heading and menu, change the domain in features/support/world.js to match your own domain, and then re-run `npm test` to confirm they pass on your site.
7. Add new scenarios you want to test into features/smoke_test.feature with [Gherkin keywords](https://cucumber.io/docs/gherkin/reference), adding new feature files into the folder and wiring them up with new steps in features/step_definitions.

Last update: 2026
