const http = require('http');

const map = require('through2-map');

const server = http.createServer((request, response) => {
    request.pipe(map((data) => {
        return data.toString().toUpperCase()
    })).pipe(response)
})

server.listen(5000, () => {
    console.log('Server started on 5000 port number');
})