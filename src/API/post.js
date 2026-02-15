
const endpoints = require("../config/endpoints");
const payloads = require("../test-data/payloads");
const ApiMethods = require("../utility/ApiMethods")
const api = new ApiMethods();

class createbooking {

    constructor() {
        this.bookingId = null
    }
    async postCreateBooking(statuscode) {
        try {
            const response = await api.post({
                url: endpoints.url,
                endpoint: endpoints.createbooking,
                body: payloads.postbooking.booking,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                expectedStatus: statuscode

            });
            console.log(JSON.stringify(response.body, null, 2));
            this.bookingId = response.body.bookingId;
            return response.body;

        }
        catch (error) {
            console.error("POST: Create Booking Error:", error.message);
            throw error;
        }
    }
    async getStoredBookingId() {
    
        return this.bookingId;
        
    }
    async validateBookingIdExists(statuscode){

    try{
        const postbookingid = Number(this.getStoredBookingId());
        if(!postbookingid){
      throw new Error("Stored booking ID is not available");
    }
    const getbookingid= await this.getBookingID(200);
    const exists = getbookingid.some(
        booking => booking.bookingid === postbookingid
    )
     if (exists) {
      console.log(`Booking ID ${postbookingid} exists in response`);
    } else {
      throw new Error(`Booking ID ${postbookingid} NOT found in response`);
    }

    return exists;

  } catch (error) {
    console.error("Validation Error:", error.message);
    throw error;
  }
}
}
module.exports = new createbooking();