const db = require('../models/index.js');
const Roles = db.Roles;

exports.getAllRole = (req, res) => {

    Roles.findAll().then(data =>{
        res.send(data);
    }).catch( error => {
        res.status(500).send({
            status : false,
            message : error.message || 'Error while retrieving user details'
        })
    })
}

exports.createRole = (req, res) => {

    if(!req.body.role_name || !req.body.role_descriptions) {
        res.status(400).send({
            status : false,
            message : 'Required fields missing for Role creation'
        })
    }

    Roles.findAll({
        where : 
            db.Sequelize.where(
                db.Sequelize.fn('lower', db.Sequelize.col('role_name')),
                req.body.role_name
            )
    }).then(data => {
        if(data.length > 0){
            res.send({
                status : false,
                message : `Role ${req.body.role_name} already available`
            })
        } else {
            Roles.create(req.body).then(data => {
                res.send({
                    status : true,
                    message : 'Roles created successfully'
                })
            }).catch(error => {
                res.status(500).send({
                    status : false,
                    message : error.message || 'Something went wrong with Roles data'
                })
            })
        }
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || 'Something went wrong with Roles data'
        })
    })
}