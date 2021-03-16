module.exports = (sequelizeConnect, sequelize) => {
    const SalaryInfo = sequelizeConnect.define('SalaryInfo', {
        SalaryID : {
            type : sequelize.INTEGER,
            primaryKey : true
        },
        EmployeeID : {
            type : sequelize.INTEGER
        },
        EmployeeRole : {
            type : sequelize.STRING
        },
        AccountHolderName : {
            type : sequelize.STRING
        },
        AccountNumber : {
            type : sequelize.BIGINT 
        },
        BankName : {
            type : sequelize.STRING
        },
        IFSC : {
            type : sequelize.STRING
        },
        BranchName : {
            type : sequelize.STRING
        },
        GrossAmount : {
            type : sequelize.DOUBLE(14, 4)
        },
        PF : {
            type : sequelize.DOUBLE(14, 4) 
        },
        NetAmount : {
            type : sequelize.DOUBLE(14, 4)
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
    return SalaryInfo;
}