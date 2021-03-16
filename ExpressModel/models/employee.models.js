module.exports = (sequelizeConnect, sequelize)=> {
    const EmployeeInfo = sequelizeConnect.define('EmployeeInfo', {
        EmployeeID : {
            type : sequelize.INTEGER,
            primaryKey : true
        },
        EmployeeName : {
            type : sequelize.STRING
        },
        Mobile : {
            type : sequelize.BIGINT
        },
        Email : {
            type : sequelize.STRING
        },
        EmployeeRole : {
            type : sequelize.STRING
        },
        Gender : {
            type : sequelize.STRING
        },
        DateOfBirth : {
            type : sequelize.DATE
        },
        BloodGroup : {
            type : sequelize.STRING
        },
        BloodDonate : {
            type : sequelize.STRING
        },
        EmployeeRating : {
            type : sequelize.INTEGER
        },
        Address : {
            type : sequelize.STRING
        },
        CreatedBy : {
            type : sequelize.INTEGER
        },
        UpdatedBy : {
            type : sequelize.INTEGER
        },
        UpdateInfo : {
            type : sequelize.STRING
        }
    });
    return EmployeeInfo;
}