import {$, driver, expect} from '@wdio/globals' //wdio v9+

class AddNoteScreen {

    get skipButton(){
        return $('//*[@text="SKIP"]');
    }

    get addNoteText(){
        return $('//*[@text="Add note"]');
    }

    get textOption(){
        return $('//*[@text="Text"]');
    }

    get cancelStylus(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editingText(){
        return $('//*[@text="Editing"]');
    }

    get noteTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get noteBody(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveNote(){
         await driver.back();
         await driver.back();
    }

    async addNotee2e(){
        await this.skipButton.click();
        await expect(this.addNoteText).toBeDisplayed();

        //click add note button
        await this.addNoteText.click();
        await this.textOption.click();
        driver.pause(3000)
        //cancel tryout your stylus
        await this.cancelStylus.click();
        await expect(this.editingText).toBeDisplayed();

        // add note title
        await this.noteTitle.addValue("Fav Anime List");

        // add note body
        await this.noteBody.addValue("Naruto\nOnePiece\nAOT");

        // save the changes
        await this.saveNote();

        await driver.pause(5000);
        

    }

    // Browserstack
    // bs://c46554335c1d6c57cd4f235b088fda8583b08812
    // Username : poojatiwari_LOo8z7
    // access key : djCFpUFhNxvxBUEBrkwM

}
// module.exports = new AddNoteScreen();
export default new AddNoteScreen();