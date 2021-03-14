module.exports = (sequelizeConnect, sequelize) => {
    const ProductInfo = sequelizeConnect.define('ProductInfo', {
        ProductID : {
            type : sequelize.INTEGER,
            primaryKey : true
        },
        CategoryID : {
            type : sequelize.INTEGER
        },
        ProductName : {
            type : sequelize.STRING
        },
        Brand : {
            type : sequelize.STRING
        },
        Price : {
            type : sequelize.DOUBLE(14,2)
        },
        Quantity : {
            type : sequelize.STRING
        },
        ProductActive :{
            type : sequelize.STRING
        },
        ProductDescription : {
            type : sequelize.STRING
        },
        CreatedBy : {
            type : sequelize.INTEGER
        },
        UpdatedBy :{
            type : sequelize.INTEGER
        }    
    });

    return ProductInfo;
}