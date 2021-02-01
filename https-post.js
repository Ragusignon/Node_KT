const https = require('https');

const body = JSON.stringify({
    "name": "akash",
    "job": "developer"
})

const options = {
    hostname: "reqres.in",
    path : '/api/users',
    method : 'POST',
    headers: {
        'Content-Type':"application/json"
    }
}

https.request(options, (res) => {
    res.on('error', console.error);
    res.on('data', (d) => {
        console.log("Data:"+ d +"/n")
    });
    res.on('end', () => {
        console.log("Successfully completed POST request");
    })
}).end(body);