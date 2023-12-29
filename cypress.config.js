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
});
