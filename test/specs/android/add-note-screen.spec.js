import {driver, expect} from '@wdio/globals' //wdio v9+
import 'dotenv/config'

// const AddNoteScreen = require("../screenobjects/android/add-note.screen");
import AddNoteScreen from '../../screenobjects/android/add-note.screen.js'

before(async () => {

    console.log("Before hook : to logins and all")

})
beforeEach(async () => {

    console.log("Before Each hook :  to refress the screen or go to particular screen")
})

afterEach(async () => {
    console.log("After Each hook :")

    // if (this.currentTest.state === 'passed') {
    //     await browser.execute('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Test Passed"}}')
    // } else {
    //     await browser.execute('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Test Failed"}}')
    // }

})
after(async () => {

    console.log("After hook :  to delet/reset ")

})

describe('ColorNote Notepad Tests', () => {

    it('Add Note Test', async () => {
        
        console.log(process.env);

        // Add Note
        await AddNoteScreen.addNotee2e();

        // assertion
        await expect(AddNoteScreen.editButton)
        .toBeDisplayed();
        await expect(AddNoteScreen.viewNote)
        .toHaveText("Naruto\nOnePiece\nAOT");
        
    })

})
