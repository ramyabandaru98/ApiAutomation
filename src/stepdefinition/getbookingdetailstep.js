
const { When, Then, Given } = require("@cucumber/cucumber");

const bookingdetails= require("../API/getbookingdetails");
const postapi = require("../API/postapi");
let response;
When("I fetch all the booking details", async function () {
    response = await bookingdetails.getbookingdetails();
    
})


