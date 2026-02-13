const { When, Then, Given } = require("@cucumber/cucumber");

const tokenAPI= require("../API/tokengenerator");

let response;
Given("I create a token with the username and password", async function()
{
    response = await tokenAPI.tokengeneratorAPI()
})