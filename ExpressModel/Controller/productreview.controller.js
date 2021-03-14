const db = require('../models/index.js');
const ProductReview = db.ProductReview;

exports.getAllProudctReview = (req, res) =>{
    ProductReview.findAll().then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Error while getting Product review"
        })
    })
}