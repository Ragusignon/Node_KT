const db = require('../models/index.js');
const ApplicationInfo = db.ApplicationInfo;

exports.getAllApplication = (req, res)=> {

    ApplicationInfo.findAll().then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Something went wrong while getting application information"
        })
    })
}

exports.addApplication = (req, res)=> {

    if(!req.body.FirstName || !req.body.LastName || !req.body.Gender || !req.body.Mobile ||!req.body.ApplicantRole){
        res.status(400).send({
            status : false,
            message : "content should not be empty"
        })
    }

    ApplicationInfo.create(req.body).then(result => {
        res.send({
            status : true,
            message : "Application information added successfully",
            data : result
        })
    }).catch(error => {
        res.status(500).send({
            status : false,
            message : error.message || "Something went wrong while adding application info"
        })
    })
}