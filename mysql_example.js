const mysql = require('mysql');

mysql.createConnection({
    host : localhost,
    database : '',
    user:'root',
    password : 'root',
    port: 3306
})

const sql ='SELECT * FROM Patient_Master';

mysql.query(sql, (error, result) => {
    if(error){
        console.log('Error Message:'+error);
    } else {
        console.log('Result:'+result);
    }
})

mysql.end();