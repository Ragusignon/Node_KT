const http = require('http');
const mysql = require('mysql');
const { parse } = require('path');

const server = http.createServer((request, response) =>{
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        database: 'hospital_management_system',
        user: 'root',
        password: 'password'
    })
    const passed_url = new URL(request.url, 'http://localhost:4500');
    const name = passed_url.searchParams.get('name');
    if(name){
        const sql = 'select * from patient_master where patientname = ?';
        connection.query(sql, name, (error, result)=>{
            if(error){
                console.log('Error: ' + error);
                response.writeHead(200, {'content-type' :'application/json'})
                response.end('We have connection problem')
            } else{
                console.log('Result: ' + JSON.stringify(result));
                response.writeHead(200, {'content-type' :'application/json'})
                response.end(JSON.stringify(result));
            }
        })
    } else {
        console.log('Requset object name has not available');
        response.writeHead(200, {'content-type' :'application/json'})
        response.end('Requset object name has not available');
    }
})

server.listen(4500, () =>{
    console.log('Server started running on port number 4500');
})