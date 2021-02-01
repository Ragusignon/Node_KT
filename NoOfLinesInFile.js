const fs = require('fs');

module.exports = function findNoOfLines(filePath, callback){
    fs.readFile(filePath, (error, content) => {
        if(error){
            callback(error);
        } else {
            const lines = content.toString().split('\n').length;
            callback(null, lines);
        }
    });
}




