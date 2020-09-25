const path = require('path');
require('dotenv').config()

// https://github.com/electron-userland/spectron/issues/74
exports.config = {
    // runner: 'local',
    path: '/', // Path to driver server endpoint.
    host: 'localhost', // Use localhost as chrome driver server
    port: 9515, // "9515" is the port opened by chrome driver.
    specs: [path.join('test', 'ui5-app', 'webapp', 'test', 'e2e', '*.js')],
    // bail: 0,
    // directConnect: true,
    // services: ['chromedriver'],
    chromeDriverLogs: path.join('test', 'report', 'logs'),
    maxInstances: 1,
    reporters: ['spec'],
    // logLevel: 'debug',
    // sync: false,
    outputDir: path.join('test', 'report', 'logs'),
    coloredLogs: true,
    screenshotPath: path.join('test', 'report', 'screenshots'),
    framework: 'mocha',
    mochaOpts: {
        timeout: 60000
    },
    capabilities: [
        {
            isHeadless: false,
            browserName: 'chrome',
            'goog:chromeOptions': {
                w3c: false,
                binary: path.join(
                    'test',
                    'ui5-app',
                    'app',
                    'platforms',
                    'electron',
                    'build',
                    'mac',
                    'UI5.app',
                    'Contents',
                    'MacOS',
                    'UI5'
                ),
                args: ['remote-debugging-port=9222', "window-size=1440,800"]
            }
        }
    ],
    wdi5: {
        deviceType: 'web',
        logLevel: 'verbose',
        platform: 'electron',
        plugins: {
            'phonegap-plugin-barcodescanner': {
                respObjElectron: {
                    text: '123-123-asd',
                    format: 'EAN',
                    cancelled: ''
                },
                scanCode: '123-123-asd',
                format: 'EAN'
            }
        }
    }
};
