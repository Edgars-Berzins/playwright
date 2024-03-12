const { Then, When } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const MyAccountPage = require("../pages/MyAccountPage");

let myAccountPageInstance;

Then('user is redirected to My Account page', async function () {
    myAccountPageInstance = new MyAccountPage();
    await expect(myAccountPageInstance.page).toHaveTitle('My Account');
    await expect(myAccountPageInstance.page).toHaveURL(myAccountPageInstance.myAccountPageUrl);
});

Then('account update success message is displayed', async function () {
    await expect(myAccountPageInstance.accountUpdateSuccessMessage).toBeVisible();
});

When('user selects Edit Account option in right sub menu',async function () {
    await myAccountPageInstance.editAccountLinkRightSubMenu.click();
});
