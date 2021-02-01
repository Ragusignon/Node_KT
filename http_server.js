const http = require('http');
const fs = require('fs');

let server = http.createServer((request, response) => {

    response.writeHead(200, { 'content-type' : 'text/plain'});

    fs.createReadStream('./Sample.txt').pipe(response);
})

server.listen(7000, () => {
    console.log("Server started on 7000 port number");
})
