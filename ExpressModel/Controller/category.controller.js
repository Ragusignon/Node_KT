const db = require('../models/index.js');
const Category = db.Category;

exports.getAllCategory = (req, res) =>{

    Category.findAll().then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Error while getting Category details"
        })
    })
}