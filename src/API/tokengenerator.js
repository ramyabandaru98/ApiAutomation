const { stringify } = require("ajv");
const ApiMethods = require("../utility/ApiMethods");

const apifortoken = new ApiMethods();

class tokenAPI {
    async tokengeneratorAPI() {
        try {
            const responsetoken = await apifortoken.post({
                url: "https://restful-booker.herokuapp.com",
                endpoint: "/auth",
                body: {

                    "username": "admin",
                    "password": "password123"


                },
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                expectedStatus:200

            });
            console.log(JSON.stringify(responsetoken.body, null, 2))
            return responsetoken.body;
        }
    catch(error) {
console.error("tokengeneratorAPI",error.message)
    }
}

}
module.exports= new tokenAPI()