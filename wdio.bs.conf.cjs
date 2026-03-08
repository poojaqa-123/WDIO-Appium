
const path = require('path')
const { config } = require ('./wdio.conf.cjs')


    // Browserstack credentials
    config.user = process.env.BROWSERSTACK_USER;
    config.key = process.env.BROWSERSTACK_KEY;

    config.hostname = 'hub.browserstack.com'
    config.port = 443
    config.protocol = 'https'
    config.path = '/wd/hub'

    // service
    config.services = [
        [
            'browserstack', 
            {
            testObservability: true
            }
        ]
    ]

    // specs 
    config.specs= [
        // './test/specs/**/*.js'
        './test/specs/android/add-note-screen.spec.js'
    ]
   


    config.capabilities = [{
            platformName: 'Android',
            'appium:automationName': 'UIAutomator2',
            'appium:app': 'bs://c46554335c1d6c57cd4f235b088fda8583b08812',
            'appium:autoGrantPermissions':true,

            'bstack:options': {
                deviceName: 'Google Pixel 7',
                osVersion: '13.0',
                projectName: 'ColorNote App',
                buildName: `WDIO Build ${Date.now()}`,
                sessionName: 'Add Note Test'
         }
    }]

 

    exports.config = config;
    