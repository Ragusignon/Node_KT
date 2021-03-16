const db = require('../models/index.js');
const WishList = db.WishList;

exports.getAllWishList = (req, res) => {

    WishList.findAll().then(data => {
        res.send(data);
    }).catch(error =>{
        res.status(500).send({
            status : false,
            message : error.message || "Something wrong while getting wish list"
        })
    })
}

exports.addList = (req, res) => {

    if(!req.body.ProductID || !req.body.UserID){
        res.status(400).send({
            status : false,
            message : "Insert the mandatory field"
        });
    }

    WishList.create(req.body).then(result =>{
        res.send({
            status : true,
            message : "Wishlist successfully added",
            data : result
        })
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Something went wrong while adding wish list"
        })
    })
}