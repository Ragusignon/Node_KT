const db = require('../models/index.js');
const Cart = db.Cart;

exports.getAllCart = (req, res)=> {

    Cart.findAll().then(data => {
        res.send(data)
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Something went wrong" 
        })
    })
}

exports.addCart = (req, res)=> {

    if(!req.body.ProductID || !req.body.Quantity || !req.body.Price){
        res.status(400).send({
            status : false,
            message : "Content should not be empty"
        })
    }
    Cart.create(req.body).then(result => {
        res.send({
            status : true,
            message : "Cart Added successfully",
            data : result
        })
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "something went wrong"
        })
    })
}