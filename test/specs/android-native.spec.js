import {$,driver, expect} from '@wdio/globals' //wdio v9+

describe('Android Native Features Tests', () => {

    it('Access an activity/screen directly', async () => {

        // Access activity
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
        
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
        
    })
    it('Working with dialog boxes', async () => {

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
        
        await $('~OK Cancel dialog with a message').click();

        //accept alert
        // await driver.acceptAlert();
        // await driver.dismissAlert();

        //get ALERT TEXT
        console.log('ALERT TEXT ----> ', await driver.getAlertText())

        // click ok button
        await $('//*[@resource-id="android:id/button1"]').click();
       

        expect('//*[@resource-id="android:id/title_template"]').not.toExist();
        
    })

    it('Working with vertical scroll', async () => {

        await $('~App').click();
        await $('~Activity').click();

        //scroll to end - not stable if element gets moved
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        // scrolltextIntoView
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        // await $('~Secure Surfaces').click();

        await expect($('~Secure Dialog')).toExist();

    
        
    })


    it('Working with horizontal scroll', async () => {

    await driver.startActivity(
        "io.appium.android.apis",
        "io.appium.android.apis.view.Gallery1"
    );

    //Horizontal scroll
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    await driver.pause(3000);
    
        
    })

    it.only('Working with Date Widget Practical application', async () => {

    await $('~Views').click();
    await $('~Date Widgets').click();
    await $('~1. Dialog').click();

    const dateSelector = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')

    const currentDate = await dateSelector.getText();
    console.log('Current date is ------------->',currentDate);

    await $('~change the date').click();

    // await $('~Next month').click();
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    await $('~09 April 2026').click();
    await $('//*[@resource-id="android:id/button1"]').click();
    const updatedDate = await dateSelector.getText();
    console.log('Updated date is ------------->',updatedDate);

    await expect(updatedDate).not.toEqual('currentDate');

    

    

    
    


    

   

    //Horizontal scroll
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    await driver.pause(3000);
    
        
    })
})