const noOfLinesInFile = require('./NoOfLinesInFile.js');
console.log("Hello Ragu, Welcome to NodeJS")

noOfLinesInFile(process.argv[2], (error, count) => {
    if(error){
        console.log('Error: ' + error);
    }else {
        console.log("No of Lines : " + count);
    }
})