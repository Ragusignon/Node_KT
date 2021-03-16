const db = require('../models/index.js');
const UserInfo = db.UserInfo;

exports.getAllUser = (req, res) => {

    UserInfo.findAll().then(data => {
        res.send(data);
    }).catch (error =>{
        res.status(500).send({
            status : false,
            message : error.message || 'Error while getting user details'
        })
    })
}

exports.addUser = (req, res) => {

    if(!req.body.UserName || !req.body.Mobile || !req.body.Email || !req.body.LoginPassword){
        res.status(400).send({
            status : false,
            message : 'Content should not be empty'
        });
    }

    UserInfo.create(req.body).then(result => {
        res.send({
            status : true,
            message : "User details inserted successfully",
            data : result
        })       
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "There is a problem while creating user details"
        })
    })
}

exports.updateUser = (req, res) => {
    const UserID = req.params.UserID;

    UserInfo.update(req.body, {
        where : {UserID : UserID}
    }).then(num => {
        if(num == 1){
            res.send({
                status : true,
                message : "User details updated successfullly"
            })
        } else{
            res.send({
                status : false,
                message : "Can't update user details with UserId. Maybe User was not found"
            })
        }
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "There is an error while executing queries" 
        })
    })
}

exports.deleteUser = (req, res) => {
    const UserID = req.params.UserID;

    UserInfo.destroy({
        where : {UserID : UserID} 
    }).then(result => {
        if(result == 1){
            res.send({
                status : true,
                message : "UserId successfully deleted"
            })
        } else{
            res.send({
                status : false,
                message : "Cannot delete UserID. Maybe UserId was not found"
            }) 
        }
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Something went wrong while deleting UserId"
        })
    })
}

exports.validateUser = (req, res) => {

    const UserName = req.body.UserName;

    const LoginPassword = req.body.LoginPassword;

    UserInfo.findAll({
        where : {
            UserName : UserName,
            LoginPassword : LoginPassword          
        }
    }).then(data => {
        if(data.length > 0) {
            res.send({
                status : true,
                message : "User validated successfully"
            })
        } else {
            res.send({
                status : false,
                message : "User credentials not matching or user details not available"
            });
        }
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Something went wrong while validating credentials"
        })
    });
}

exports.generateOTP = (req, res) => {
    const UserID = req.params.UserID;
    var value = Math.floor(1000 + Math.random() * 9999);

    UserInfo.update({OTP : value}, {
        where : {UserID : UserID}
    }).then(num => {
        if(num == 1){
            res.send({
                status : true,
                message : "OTP generated successfully"
            })
        } else{
            res.send({
                status : false,
                messsage : "Cannot generate OTP"
            })
        }
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Something went wrong"
        })
    })
}