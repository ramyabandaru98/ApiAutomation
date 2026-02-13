const ApiMethods = require("../utility/ApiMethods");


const api = new ApiMethods();

class BookingAPI {

  async getBookingID() {
    try {
      const response = await api.get({
        url: "https://restful-booker.herokuapp.com",
        endpoint: "/booking",
        expectedStatus: 200
      });
      console.log(JSON.stringify(response.body, null, 2));
      return response.body;
    } catch (error) {
      console.error("BookingAPI Error:", error.message);
      throw error;
    }
  }

}

module.exports = new BookingAPI();
