const db = require('../models/index.js');
const EmployeeInfo = db.EmployeeInfo;

exports.getAllEmployee = (req, res)=> {
    EmployeeInfo.findAll().then(data => {
        res.send(data)
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Something went wrong while getting "
        })
    })
}

exports.updateEmployee = (req, res) => {
    const EmployeeID = req.params.UserID;

    EmployeeInfo.update(req.body, {
        where : {EmployeeID : EmployeeID}
    }).then(num => {
        if(num == 1){
            res.send({
                status : true,
                message : "Employees details updated successfullly"
            })
        } else{
            res.send({
                status : false,
                message : "Can't update employee details with UserId. Maybe User was not found"
            })
        }
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "There is an error while executing queries" 
        })
    })
}