exports.config = {
user: process.env.BROWSERSTACK_USERNAME,
key: process.env.BROWSERSTACK_ACCESS_KEY,
updateJob: false,
specs: [
'./tests/specs/single_test.js'
],
exclude: [],
capabilities: [{
'device': 'iPhone 7',
'os_version': '10.3',
name: 'single_test',
build: 'webdriver-browserstack'

}],
logLevel: 'verbose',
coloredLogs: true,
screenshotPath: './errorShots/',
baseUrl: '',
waitforTimeout: 10000,
connectionRetryTimeout: 90000,
connectionRetryCount: 3,
host: 'hub.browserstack.com',
framework: 'mocha',
mochaOpts: {
ui: 'bdd'
}
}
