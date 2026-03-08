import {$, $$, itx, expect} from '@wdio/globals' //wdio v9+
describe('Android Elements Tests', () => {

    itx('find element by accessibility id', async () => {
        // find element using accessibility id
        const appOptions = await $('~App')

        // clcik element
        await appOptions.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();

    })

    itx('find element by className', async () => {
        // find element using accessibility id
        const className = await $('android.widget.TextView');

        console.log(className);
        console.log(await className.getText());

        // assertion
        await expect(className).toHaveText('API Demos');

    })
    itx('find element by xpath', async () => {

         // find element using accessibility id
        const appOptions = await $('~App')
        await appOptions.click();

        //xpath = //tagnName OR className[@aatribute="value"]
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        // find element using resource-id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        
        // find element by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        // find by class, final assertion
        const textAssertion = $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");

    })

     itx('find element by UIAutomator', async () => {

         // find element using accessibility id
        const appOptions = await $('~App')
        await appOptions.click();

        //UiSelector
        await $('android=new UiSelector().textContains("Alert")').click();


    })


     itx('find multiple elements', async () => {
        const expectedList = [
        'API Demos', "Access'ibility",
        'Accessibility', 'Animation',
        'App', 'Content',
        'Graphics', 'Media',
        'NFC', 'OS',
        'Preference', 'Text',
        'Views'
        ];
        const actualList = [];

        // find elements using accessibility id
        const textList = await $$("android.widget.TextView");
        

        //loop through elements
        for(const element of textList){
            actualList.push(await element.getText());

        }

        // assert
        await expect(actualList).toEqual(expectedList);

    })

    itx('Access text input, enter country and assert country name', async () => {
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();

        const textFiled = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        textFiled.addValue('Canada');

        expect(textFiled).toHaveText('Canada');


    })

})