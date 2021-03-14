module.exports = (sequelizeConnect, sequelize) => {
    const OfferInfo = sequelizeConnect.define('OfferInfo', {
        OfferID : {
            type : sequelize.INTEGER,
            primaryKey : true
        },
        OfferName : {
            type : sequelize.STRING,    
        },
        ProductID : {
            type : sequelize.INTEGER
        },
        UserID : {
            type : sequelize.INTEGER
        },
        Discount : {
            type : sequelize.STRING
        },
        Limited : {
            type : sequelize.STRING
        },
        StartAt : {
            type : sequelize.DATE
        },
        EndAt : {
            type : sequelize.DATE
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
    return OfferInfo;
}