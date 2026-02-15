const endpoints = require("../config/endpoints")
const ApiMethods = require("../utility/ApiMethods")
const token = require("../API/tokengeneration")

const api = new ApiMethods()
class deletebooking {
    constructor() {
        this.bookingId = null;
    }
     async getStoredBookingId() {
    
        return this.bookingId;
        
    }
    async deletebooking(statuscode) {
        const deletebookingid = Number(this.getStoredBookingId());
          const Tokenid = await token.tokengenerator();
        try {
            const response = await api.delete({
                url: endpoints.url,
                endpoint: endpoints.deletebooking + deletebookingid,
                headers: {
                    "content-type": "application/json",
                    "Accept": "application/json",
                    "Cookie": "token=" + `${Tokenid}`,
                },
                expectedStatus: statuscode

            })
            console.log(JSON.stringify(response.body, null, 2));
            return response.body;
        } catch (error) {
            console.error("Delete Booking ID Error:", error.message);
            throw error;
        }
    }
}
    module.exports= new deletebooking()