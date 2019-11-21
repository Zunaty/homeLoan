var homeCommands = {
    clickThing: function(data){
        this
            .wait()
            .click(data)
        return this
    },
    wait: function(){
        this
            .waitForElementVisible('#root')
        return this
    },
    buttonTest: function(){
        this
            .clickThing('@nextButton')
            .clickThing('@nextButton')
            .clickThing('@nextButton')
            .clickThing('@primaryButton')
            .clickThing('@yesButton')
            .clickThing('@yesButton')
            .clickThing('@nextButton')
            .clickThing('@excelButton')
            .clickThing('@noBankButton')
            .clickThing('@nextButton')
            .clickThing('@nextButton')
            .clickThing('@sendButton')
            .clickThing('@homeButton')
        return this
    },
    inputTest: function(data1,data2,data3,data4,data5,data6,data7,data8){
        this
            .clickThing('@nextButton')
            .clickThing('@nextButton')

            .setValue('@cityInput',data1)
            .clickThing('@nextButton')

            .clickThing('@primaryButton')
            .clickThing('@yesButton')
            .clickThing('@yesButton')

            .setValue('@purchaseInput',data2)
            .setValue('@downInput',data3)
            .clickThing('@nextButton')

            .clickThing('@excelButton')
            .clickThing('@noBankButton')

            .setValue('@addressInput',data4)
            .setValue('@addressCityInput',data5)
            .clickThing('@nextButton')

            .setValue('@firstNameInput',data6)
            .setValue('@firstNameInput',data7)
            .setValue('@emailInput',data8)
            .clickThing('@nextButton')

            //City Verify
            .verify.containsText('@formCity',data1)
            //Price Verify
            .verify.containsText('@formPrice',data2)
            //Down Verify
            .verify.containsText('@formDown',data2)
            //First Name Verify
            .verify.containsText('@formName',data2)
            //Email Verify
            .verify.containsText('@formEmail',data2)
        return this
    }
}
module.exports = {
    url:'http://localhost:3000/#/',
    commands: [homeCommands],
    elements: {
        //These are all selectors for buttons on the website
        nextButton: 'button',
        primaryButton: '[value="Primary Home"]',
        rentalButton: '[value="Rental Property"]',
        secondaryButton: '[value="Secondary Home"]',
        yesButton: '[name="yesButton"]',
        noButton: '[name="noButton"]',
        excelButton: '[value="excellent"]',
        goodButton: '[value="good"]',
        fairButton: '[value="fair"]',
        poorButton: '[value="poor"]',
        noBankButton: '[value="Has never been in bankruptcy"]',
        yesBankButton: '[value="Has had bankruptcy before"]',
        yesForeButton: '[value="Has had a foreclosure before"]',
        yesBothButton: '[value="Has had both a forclosure and a bankruptcy"]',
        sendButton: '[name="sendButton"]',
        restartButton: '[name"restartButton"]',
        homeButton: '[class="margin-btn"]',
        //These are all the selectors for text fields on the website
        cityInput: '[placeholder="city name"]',
        purchaseInput: '[name="price"]',
        downInput: '[name="down"]',
        addressInput: '[id="addressOne"]',
        addressOptInput: '[id="addressTwo"]',
        addressCityInput: '[id="addressThree"]',
        firstNameInput: '[id="first"]',
        lastNameInput: '[id="last"]',
        emailInput: '[id="email"]',
        //These are all the selectors for drop down menus
        //loanTypeDrop: `[id="loanTypes] option[value"${}"]`,
        //propTypeDrop: `[id="propertyTypes] option[value"${}"]`,
        //This are the form selectors
        formName: '[class="name p2"]',
        formEmail: '[class="email p2"]',
        formCity: '[class="city p2"]',
        formPrice: '[class="price p2"]',
        formDown: '[class="downPayment p2"]'

    }
}