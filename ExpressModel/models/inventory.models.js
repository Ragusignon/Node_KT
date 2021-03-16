module.exports = (sequelizeConnect, sequelize) => {
    const InventoryInfo = sequelizeConnect.define('InventoryInfo', {
        InventorID : {
            type : sequelize.INTEGER,
            primaryKey : true
        },
        InventorName : {
            type : sequelize.STRING
        },
        ProductID : {
            type : sequelize.INTEGER
        },
        Company : {
            type : sequelize.STRING
        },
        CompanyAddress : {
            type : sequelize.STRING
        },
        PerProductPrice : {
            type : sequelize.DOUBLE
        },
        TotalCost : {
            type : sequelize.DOUBLE
        },
        TotalStock : {
            type : sequelize.BIGINT
        },
        Sales : {
            type : sequelize.BIGINT
        },
        RemainingStock : {
            type : sequelize.BIGINT
        },
        CreatedBy : {
            type :sequelize.INTEGER
        },
        UpdatedBy : {
            type : sequelize.INTEGER
        },
        UpdateInfo : {
            type : sequelize.STRING
        }
    })
    return InventoryInfo;
}