const express = require('express');

const app  = express();

app.get('/api/parsetime',(request, response) => {
    response.send('Hello world from Parse time');
})

app.get('/api/unixtime', (request, response) => {
    response.send('Hello world from Unix time');
})

app.get('/api/1', (request, response) => {
    response.send('Hello world from Unix time 1');
})

app.get('/api/2', (request, response) => {
    response.send('Hello world from Unix time 2');
})

app.get('/api/3', (request, response) => {
    response.send('Hello world from Unix time 3');
})

app.listen(4500, ()=> {
    console.log('Server started running in 4500 port');
})




-------------


------- 
-------
------
-------
-------
-------
--------



client request --> need to verify client information to be valid ----> Yes   ---> parsing client request(validating client request)  ---> yes --> process user request to find valid response---> yes --> return response to the client 
                                                                ----> No                                                             ---> No                                                 ---> no
                                                                -------> return response to user by saying to create valid account   ---> return reponse to user by saying provide proper input ---> return response to user by saving something went wrong in Processing request, please try again      
  
client request --> need to verify client information to be valid ----> Yes   ---> parsing client request(validating client request)  ---> yes --> process user request to find valid response---> yes --> return response to the client 
                                                                ----> No                                                             ---> No                                                 ---> no
                                                                -------> return response to user by saying to create valid account   ---> return reponse to user by saying provide proper input ---> return response to user by saving something went wrong in Processing request, please try again        