const db = require('../models/index.js');
const Users = db.Users;

exports.getAllUser = (req, res) => {

    Users.findAll().then(data =>{
        res.send(data);
    }).catch( error => {
        res.status(500).send({
            status : false,
            message : error.message || 'Error while retrieving user details'
        })
    })
}

exports.addUser = (req, res) => {

    if(!req.body.user_name || !req.body.gender || !req.body.phone_number || !req.body.password){
        res.status(400).send({
            status : false,
            message : 'Content should not be empty'
        });
    }

    //create user
    // const user = {
    //     user_name : req.body.user_name,
    //     gender : req.body.gender,
    //     phone_number : req.body.phone_number,
    //     address : req.body.address,
    //     password : req.body.password,
    //     blood_group : req.body.blood_group,
    //     date_of_birth : req.body.date_of_birth || Date.now(),
    //     date_Of_registration : Date.now()
    // }

    Users.create(req.body).then(result => {
        res.send({
            status : true,
            message : "Users inserted Successfully",
            data : result
        })
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Something went wrong while creating user details"
        });
    })
}

exports.updateUser = (req, res) =>{
    const user_id = req.params.user_id;

    Users.update(req.body, {
        where : {user_id : user_id}
    }).then(num =>{
        if(num == 1){
            res.send({
                status : true,
                message : "User details updated successfully"
            })
        } else{
            res.send({
                status : false,
                message : `Can not update user with user_id =${user_id}. Maybe User was not found or req.body was not right`
            })
        }
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || 'Something went wrong while executing query'
        })
    })
}

exports.deleteUser = (req, res) =>{

    const user_id = req.params.user_id;

    Users.destroy({
        where : {
            user_id : user_id
        }
    }).then(result => {
        if(result == 1) {
            res.send({
                status : true,
                message : "Users deleted successfully"
            })
        } else {
            res.send({
                status : false,
                message : `Cannot delete user with user_id=${user_id}. May be user_id was not found`
            })
        }
    }).catch( error =>{
        res.status(500).send({
            status : false,
            message : error.message || 'Something went wrong while deleting user detail'
        })
    })
}

exports.validateUser = (req, res) => {

    const user_name = req.body.user_name;

    const password = req.body.password;

    Users.findAll({
        where : {
            user_name : user_name,
            password : password
        }
    }).then(data => {
        if(data.length > 0) {
            res.send({
                status : true,
                data: data,
                message : 'User validated successfully'
            });
        } else {
            res.send({
                status : false,
                message : 'User credentails not matching or user details not available'
            });
        }
    }).catch( error => {
        res.status(500).send({
            status : true,
            error_message : error.message || 'Something went wrong while validating user credentails'
        })
    });
}