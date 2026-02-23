const { error } = require("ajv/dist/vocabularies/applicator/dependencies");
const ApiMethods = require("../utility/ApiMethods");
const details = require('../data/details')
const getbooking =  require('../API/postapi');
const endpoints = require("../config/endpoints");

const api = new ApiMethods

class bookingdetails{
    
    async getbookingdetails(statuscode){
        try{
            const responsebooking= await api.get({
                url:endpoints.url,
                endpoint:endpoints.getbooking,
                headers: {
                    "Content-Type": "application/json",
                    "Cookie":"token={{b_token}}",
                    "Accept": "application/json"
                },
                expectedStatus:statuscode,

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