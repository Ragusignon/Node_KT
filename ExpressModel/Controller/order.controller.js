const db = require('../models/index.js');
const OrderInfo = db.OrderInfo;

exports.getAllOrder = (req, res) => {

    OrderInfo.findAll().then(data =>{
        res.send(data)
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Error while getting All Orders"
        })
    })
}