
const https = require('https');
const bl  = require('bl');
 
const url = 'https://reqres.in/api/users';

let response = [];

let count = 0;

function printResults() {
    console.log("=========================Result Print=====================");
    for(let i = 0 ; i < 3 ; i++){
        console.log(" URL : "+ url +'/' +i);
        console.log(" content: "+ response[i]);
    }
}

function https_calls(index) {
    https.get(url+'/'+index, res => {
        res.pipe(bl((error, data) => {
            if(error){
                console.log("Error : "+ error);
            } else {
                console.log(" URL : "+ url +'/' +index);
                console.log(" content: "+ data[index]);
                response[index] = data;
                count++;
                if(count == 3){
                    printResults();
                }
            }
        }))
    })
}

for(let i = 0; i < 3; i++){
    https_calls(i);
}