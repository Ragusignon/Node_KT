const https = require('https');

const options = {
    hostname: "reqres.in",
    path : '/api/users'
}

https.request(options, function response(res){
    content = ""
    res.on("error", function errorHandling(error_msg) {
        console.log("Error handling: "+ error_msg);
    });
    res.on('data', function onMessageRecevied(d) {
        content = content + d;
    });
    res.on('end', () => {
        console.log("GET Response Ouput:" + content);
    });
}).end();
