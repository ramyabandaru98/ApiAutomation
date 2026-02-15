// const ApiMethods = require("../utility/ApiMethods");
// const endpoints = require("../config/endpoints");
// const payloads = require("../test-data/payloads");



// const api = new ApiMethods();

// class Token {

//     async tokengenerator() {
//         try {
//             const response = await api.post({
//                 url: endpoints.url,
//                 endpoint: endpoints.Tokengenerator,
//                 body: payloads.createtoken,
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 },
//                 expectedStatus: 200

//             })
//             const tokenId = await response.body.token
//             return tokenId;
//         }
//         catch (error) {

//             console.error("POST: Create Token Error:", error.message);
//             throw error;
//         }
//     }

// }
// module.exports = new Token();