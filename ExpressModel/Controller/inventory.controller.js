const db = require('../models/index.js');
const InventoryInfo = db.InventoryInfo;

exports.getAllInventoryInfo = (req, res) => {

    InventoryInfo.findAll().then(data => {
        res.send(data)
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || 'Error while getting inventory info'
        })
    })
}

exports.addStock = (req, res) =>{

    if(!req.body.InventorName || !req.body.ProductID || !req.body.Company || !req.body.PerProductPrice ||!req.body.TotalStock){
        res.status(400).send({
            status : false,
            message : "Content should not be empty"
        });        
    }

    InventoryInfo.create(req.body).then(data => {
        res.send({
            status : true,
            message : "Inventory details added successfully",
            data : result
        })
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Something went wrong while adding inventory details"
        })
    })
}

