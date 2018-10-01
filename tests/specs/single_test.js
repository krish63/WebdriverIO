var assert = require('assert');

describe('Google\'s Search Functionality', function() {
  it('can find search results', function () {
    browser
      .url('https://www.google.com/ncr')
      .setValue('*[name="q"]','BrowserStack\n')
      .pause(5000);
    consloe.log("hiii");
    assert(browser.getTitle().match(/BrowserStack - Google Search/i));
  });
});
