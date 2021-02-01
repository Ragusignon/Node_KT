const https = require('http');

const bl = require('bl');

https.get('http://localhost:8081/', res => {
    res.pipe(bl(bufferOutput));
})

function bufferOutput(error, data) {
    if(error) {
        console.log("Error: "+ error);
    } else {
        console.log("Content : "+ data);
    }
}