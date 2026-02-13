const { error } = require("ajv/dist/vocabularies/applicator/dependencies");
const ApiMethods = require("../utility/ApiMethods");
const details = require('../data/details')

const api = new ApiMethods

class bookingdetails{
    async getbookingdetails(){
        try{
            const responsebooking= await api.get({
                url:details.url,
                endpoint:"/100",
                headers: {
                    "Content-Type": "application/json",
                    "Cookie":"token={{b_token}}",
                    "Accept": "application/json"
                },
                expectedStatus:200,

            })
            console.log(JSON.stringify(responsebooking, null, 2));
            return responsebooking.body;

        }catch(error){
        console.error("bookingdetails Error:", error.message)
        throw error;
        }
    }
}
module.exports= new bookingdetails()