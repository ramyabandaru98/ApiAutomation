
const endpoints = require("../config/endpoints");
const ApiMethods = require("../utility/ApiMethods");




const api = new ApiMethods();

class getAllBookingIDs{
  

async getBookingID(statuscode) {
    try{
       const response = await api.get({
        url: endpoints.url,
        endpoint: endpoints.getbookingid,
        expectedStatus: statuscode

       })
       console.log(JSON.stringify(response.body, null, 2));
       return response.body;
    }
    catch(error){
        console.error("Get Booking ID Error:", error.message)
        throw error;

    }
}

}
module.exports= new getAllBookingIDs()