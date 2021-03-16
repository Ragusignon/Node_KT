const { sequelize } = require('../models/index.js');
const db = require('../models/index.js');
const ProductInfo = db.ProductInfo;

exports.getAllProduct = (req, res) => {

    ProductInfo.findAll().then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            status: true,
            message : error.message || "Error while getting Product details"
        })
    })
}

exports.getShortPrice = (req, res) => {
    ProductInfo.findAll({
        where : {
            Price : {
                [sequelize.Op.gt] : 150
            }
        },
        order : [
            ['Price', 'DESC']
        ],
        limit : 3
    }).then(data => {
        res.send(data);
    }).catch (error => {
        res.status(500).send({
            status : false,
            message : error.message || "Error while getting price details"
        })
    })
}

// Count of Individual category

exports.getAllProductFromCategory = (req, res) =>{

    ProductInfo.findAll({
        where : {
            CategoryID : {
                [sequelize.Op.gt] : 1
            }
        }
    }).then(data =>{
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Error while getting product from category" 
        })
    })
}

// count of category by giving params

exports.getProductCategory = (req, res) =>{

    const CategoryID = req.params.CategoryID;

    ProductInfo.findAll({
        where : {CategoryID : CategoryID}
    }).then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Error while getting product category"
        })
    })
}

