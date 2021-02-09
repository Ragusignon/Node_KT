const { request, response } = require('express');
const express = require('express');
const { STATUS_CODES } = require('http');
const { type } = require('os');

const app  = express();

app.use(Validaterequest);

app.use(InputProcessing);

app.get('/api/parsetime', RequestProcessing, LogicalExecution, DBValidation, reponsegenerator);

app.get('/api/unixtime', RequestProcessingunixtime, LogicalExecutionunixtime, DBValidationunixtime, reponsegeneratorunixtime);

app.get('/api/1', RequestProcessing1, LogicalExecution1, DBValidation1, reponsegenerator1, areponsegenerator1)

app.get('/api/2', RequestProcessing2, LogicalExecution2, DBValidation2, reponsegenerator2)

app.get('/api/3', RequestProcessing3, LogicalExecution3)

app.use(Logging);

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


                                                                


http://localhost:8080/api/validateUserCredentails - POST 

Req Body : 
{
    "username":"ragu",
    "password" : "riya"
}

Objects:

request --> request.url
            request.headers -- content-type, authorization code, cookies
            request.body -- stream of Data(i.e. json)

response ---> null

Server execution:

1. Validaterequest(request, response, next, error) {
        if(request.headers.authorization){
            var authcode = request.headers.authorization;
            //Making DB call to validate client request
            if(validtoken){
                response.validateClient = true;
                next();
            }else {
                error("Invalid auth code, code expired");
            }
        }else {
            error("Its not a valid user request, no authentication code available")
        }
    }

2. InputProcessing(request, response, next, error) {
    if(request.headers.content_type){
        var content_type = request.headers.content_type ;
        request.data = request.body.convertTo(content_type);
        next();
    } else {
        error("No valid content-type available")
    }
}

3. RequestProcessing(request, reponse, next, error){
    if(request.data){
        if(request.data.username && request.data.password){
            next();
        }else {
            error("No valid input data available in request object");
        }
    } else {
        error("No Data found in request object");
    }
}

4. LogicalExecution(request, response, next, error) {
    //Make DB call to check  whether user name avaialble
    if(hasUsername){
        //Make DB call to check whether password matching with DB password
        if(passwordMatching){
            response.data ="valid User";
            response.send();
        } else {
            response.data = "User password is not valid";
            response.send();
        }
    } else {
        response.data = "Not a valid user";
        response.send();
    }
}

Routing: