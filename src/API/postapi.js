
const ApiMethods = require("../utility/ApiMethods")
const supertest = require("supertest");

const apiforpost = new ApiMethods();

const value = new supertest()
class postApI {

    async postBookingAPI() {
        try {
            const responsepost = await apiforpost.post({
                url: "https://restful-booker.herokuapp.com",
                endpoint: "/booking",
                body:
                {
                    "firstname": "{{Don}}",
                    "lastname": "{{Shen}}",
                    "totalprice": 1000,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2018-01-01",
                        "checkout": "2019-01-01",
                        "additionalneeds": "super bowls"
                    }
                },
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                expectedStatus: 200
            });
            console.log(JSON.stringify(responsepost.body, null, 2))
            return responsepost.body;
        }
        catch (error) {
            console.error("postBookingAPI", error.message);
            throw error;
        }


    }
}
module.exports = new postApI()


