const http = require('http');

const server = http.createServer((request, respone) => {
    const parsedURL = new URL(request.url, "http://localhost:4500");
    const time = new Date(parsedURL.searchParams.get('iso'));
    let result = null;
    if(parsedURL.pathname == '/api/parsetime'){
        result = parseTime(time);
    }
    if(parsedURL.pathname == '/api/unixtime'){
        result = unixTime(time);
    }
    if(result){
        respone.writeHead(200, {'content-type' : 'application/json'});
        respone.end(JSON.stringify(result));
    }else {
        respone.writeHead(404);
        respone.end();
    }
});

server.listen(4500, () => {
    console.log("Server started running on 4500 port ")
})


function parseTime(time) {
    return {
        "hour" : time.getHours(),
        "minutes" : time.getMinutes(),
        "seconds" : time.getSeconds()
    }
}

function unixTime(time) {
    return {
        "time" : time.getTime()
    }
}