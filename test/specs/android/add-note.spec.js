import {$, driver, expect} from '@wdio/globals' //wdio v9+

describe('ColorNote Notepad Tests', () => {

    it('Add Note Test', async () => {

        // //Deny notification alert
        // driver.dismissAlert();

        // click update permission
        // await $('//*[@resource-id="android:id/button1"]').click();
        // Deny access to media alert
        // sawait $('//*[@resource-id="com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button"]').click();

        

        //click SKIP
        await $('//*[@text="SKIP"]').click();
        expect($('//*[@text="Add note"]')).toBeDisplayed();

        //click add note button
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        driver.pause(3000)
        //cancel tryout your stylus
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').click();
        
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

       // add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        .addValue("Fav Anime List");

        // add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        .addValue("Naruto\nOnePiece\nAOT");

        // save the changes
        await driver.back();
        await driver.back();

        await driver.pause(5000);

        // assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
        .toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
        .toHaveText("Naruto\nOnePiece\nAOT");
        	


        
    })

})
