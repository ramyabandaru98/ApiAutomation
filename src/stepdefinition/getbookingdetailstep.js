
const { When, Then } = require("@cucumber/cucumber");

const bookingdetails= require("../API/getbookingdetails");
let response;
When("I fetch all the booking details", async function () {
    response = await bookingdetails.getbookingdetails();
    
})