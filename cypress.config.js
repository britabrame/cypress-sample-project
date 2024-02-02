const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
  },

  reporter: 'mochawesome',

  reporterOptions: {
    'reportDir': 'cypress/reports',
    'overwrite': false,
    'html': false,
    'json': true
  },

  video: true,

  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 2
  }
});
