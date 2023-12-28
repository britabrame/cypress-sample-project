const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
  },

  reporter: 'mochawesome',

  reporterOptions: {
    'reportDir': 'cypress/results',
    'overwrite': false,
    'html': true,
    'json': false
  },
});
