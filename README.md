# amaysimTechTask

This repo contains a test on the amaysim website (https://www.amaysim.com.au/) purchasing a 7-day mobile plan, where failed
credit card payments should register as a failure, with the tests written in Cypress.

The tests are commented to ease you into the Cypress API.

Additionally this example app is configured to run tests in Jenkins CI.

## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Cypress Support](https://on.cypress.io/support)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

### 2. Fork this repo

If you want to experiment with running this project in Continuous Integration, you'll need to [fork](https://github.com/canciorv/amaysimTechTask#fork-destination-box) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/amaysimTechTask.git

## cd into the cloned repo
cd amaysimTechTask

## install the node_modules
npm install
```
### 3. Add the project to Cypress

[Follow these instructions to add the project to Cypress.](https://on.cypress.io/writing-your-first-test)

### 4. Run Cypress test

Scripts to run are added on the [package.json](https://github.com/canciorv/amaysimTechTask/blob/main/package.json). Please add your desired password required for creating a user before running a script or else the test would fail.
```
npx cypress run --headed --env password=addDesiredPassword
```
Password is not hardcoded on the cypress.config.js for better security

### 5. Run in Continuous Integration

[Follow these instructions to run the tests in CI.](https://on.cypress.io/continuous-integration)
[Follow these instructions to run the tests in Jenkins.]([https://on.cypress.io/continuous-integration](https://www.lambdatest.com/blog/jenkins-and-cypress-tutorial/)https://www.lambdatest.com/blog/jenkins-and-cypress-tutorial/)

