const https = require('https');


https.get("https://reqres.in/api/users", (res) => {
    content = ""
    res.on("error", console.error);
    res.on('data', (d) => {content += d });
    res.on('end', () => {
        console.log("GET Response Ouput:" + content);
    });
})
