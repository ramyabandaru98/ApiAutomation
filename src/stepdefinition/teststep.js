const { When, Then, Given } = require("@cucumber/cucumber");
const { expect } = require("chai");
const BookingAPI = require("../API/testapi");
const e2e = require("../API/endtoendAPI");
const post = require('../API/post');
const delet = require("../API/delete")
const get = require("../API/get");
const tokengeneration = require("../API/tokengeneration");



let response;

Given("I create a new booking using the POST API", async function () {
  const response = await post.postCreateBooking(200);
  expect(response).to.have.property("bookingid");
  expect(response.booking).to.be.an("object");
});
Then("I should store the Token", async function(){

    const token= tokengeneration.tokengenerator();
    console.log("Token created succsesfully:",token)
  
})

Given("I store the generated booking ID", async function () {
  const storedId = await post.getStoredBookingId();
  console.log("Stored Booking ID:", storedId);
  expect(storedId, "Booking ID was not stored").to.not.be.null;
});

When("I retrieve all booking IDs using the GET API", async function () {
  const response = await get.getBookingID(200);
  expect(response).to.be.an("array");
});
Then("I should delete the bookingdetails by ID", async function () {
  const deletedId = await delet.deletebooking(201);
  console.log("Deleted Booking ID:", deletedId);

})


Then("I should see the created booking ID in the booking list response", async function () {
  const exists = await post.validateBookingIdExists(200);
  expect(exists).to.be.true;
});

