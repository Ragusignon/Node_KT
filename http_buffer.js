const https = require('https');

const bl = require('bl');

https.get('https://reqres.in/api/users', res => {
    res.pipe(bl(bufferOutput));
})

function bufferOutput(error, data) {
    if(error) {
        console.log("Error: "+ error);
    } else {
        console.log("Content : "+ data);
    }
}