const { send } = require('./request');
const { read } = require('./response');

function makeRequest(url, data){
    send(url, data);
    return read();
}

const sendRequest = makeRequest("www.google.come", "user-data");
console.log(sendRequest);