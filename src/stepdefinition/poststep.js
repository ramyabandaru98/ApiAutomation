const { When, Then, Given } = require("@cucumber/cucumber");

const postApI = require("../API/postapi");


let response;
Given("I create a booking id with all the details", async function () {
    response = await postApI.postBookingAPI()
    
})


        