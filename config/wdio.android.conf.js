import {config} from '../wdio.conf.cjs'
import path from 'path'
// ====================
// Runner Configuration
// ===================
// WebdriverIO supports running e2e tests as well as unit and component tests.

config.runner = 'local';
config.port = 4723;

config.capabilities = [{
        // capabilities for local Appium web tests on an Android Emulator
        'appium:platformName': 'Android',
        'appium:platformVersion': '16.0',
        'appium:deviceName': 'Pixel 9a',
        'appium:automationName': 'UIAutomator2',
        'appium:app':path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true
    }]

 config.specs = [
        // ToDo: define location for spec files here
        // './test/specs/**/*.js',
        './test/specs/android/add-note-screen.spec.js'
    ]

export { config }
    
  
   