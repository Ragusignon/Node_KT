const db = require('../models/index.js');
const DeliveryInfo = db.DeliveryInfo;

exports.getAllDelivery = (req, res)=> {
    DeliveryInfo.findAll().then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Something went wrong while getting delivery details"
        })
    })
}