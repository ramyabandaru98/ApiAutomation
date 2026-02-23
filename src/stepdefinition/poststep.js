const { When, Then, Given } = require("@cucumber/cucumber");

const postApI = require("../API/postapi");
const testdata= require("../test-data/payloads")


let response;
Given("I create a booking id with all the details", async function () {
    response = await postApI.postBookingAPI()
    
})

Given("I store the booking id", async function(){
    response= await postApI.storebookingid()
})
        