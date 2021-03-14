const db = require('../models/index.js');
const OfferInfo = db.OfferInfo;

exports.getAllOffer = (req, res) => {
    
    OfferInfo.findAll().then(data =>{
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Error while getting offerinfo"
        })
    })
}

exports.getIndividualOffer = (req, res) => {

    const UserID = req.params.UserID;

    OfferInfo.findAll({
        where : {UserID : UserID}
    }).then(data => {
        res.send(data);
    }).catch(error =>{
        res.status(500).send({
            status : false,
            message : error.message || "Error while getting Individual offer"
        })
    })
}