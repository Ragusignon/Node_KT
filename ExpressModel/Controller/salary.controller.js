const db = require('../models/index.js');
const SalaryInfo = db.SalaryInfo;

exports.getAllSalary = (req, res)=> {

    SalaryInfo.findAll().then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Error while getting salary details"
        })
    })
}

exports.UpdateSalary = (req, res)=> {

    const SalaryID = req.params.SalaryID

    SalaryID.update(req.body, {
        where : {
            SalaryID : SalaryID
        }
    }).then(num => {
        if(num == 1){
            res.send({
                status : true,
                message : "Salary details updated successfully"
            })
        } else{
            res.send({
                status : false,
                message : "Cannot update salary details. Maybe salaryid was not found"
            })
        }
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Something went wrong"
        })
    })
}