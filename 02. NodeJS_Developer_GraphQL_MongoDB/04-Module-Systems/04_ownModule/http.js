const request = require('./request');
const response = require('./response');

function makeRequest(url, data){
    request.send(url, data);
    return response.read();
}

const sendRequest = makeRequest("www.google.come", "user-data");
console.log(sendRequest);