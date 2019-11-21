var homeObjectPage = {}
var homeAsset = require('../testAssets/loanArray')
module.exports = {
    beforeEach: browser => {
        homeObjectPage = browser.page.homeLoanPage()
        homeObjectPage.navigate()
    },
    after: browser => {
        homeObjectPage.end()
    },
    'Testing only pressing the buttons': browser => {
        homeObjectPage
            .buttonTest()
    },
    'Testing the inputs': browser => {
        homeObjectPage
            .inputTest(homeAsset.city,homeAsset.price,homeAsset.down,homeAsset.streetAdd,homeAsset.cityAdd,homeAsset.fName,homeAsset.lName,homeAsset.email)
    },
}